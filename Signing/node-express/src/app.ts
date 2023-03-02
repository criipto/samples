import dotenv from 'dotenv';
dotenv.config();
import express, { Express, Request, Response } from 'express';
import path from 'path';
import ejs from 'ejs';
const expressLayouts = require('express-ejs-layouts');
import bodyParser from 'body-parser'; // parse incoming requests with JSON payloads, for webhook events
import multer from 'multer'; // handle file uploads
import ngrok from 'ngrok'; // ngrok tunneling for webhook events
import {
  getSignatureOrder,
  getOrders,
  createSignatureOrder,
  addSignatory,
  closeSignatureOrder,
  cancelSignatureOrder
} from './criipto-operations';
import { DocumentStorageMode } from './generated/graphql';

const app: Express = express();
const port = 4000;
const upload = multer({ storage: multer.memoryStorage() });

// *** Ngrok tunneling for local development ***
export let ngrokUrl: string; // ngrok url for webhook

// Starting ngrok tunneling when the app starts
async function startNgrok() {
  try {
    const url = await ngrok.connect({
      addr: port,
      authtoken: process.env.NGROK_TOKEN,
    });
    ngrokUrl = url;
    console.log(`Ngrok tunnel started at ${url}`);
  } catch (error) {
    console.error(error);
  }
}
startNgrok();

// For webhook events: parse incoming requests with JSON payloads
app.use(bodyParser.json());

// Set Templating Engine
app.set('view engine', 'ejs');

// Use express-ejs-layouts middleware and enable extractScripts
app.use(expressLayouts);
app.set('layout extractScripts', true);

// Set the directory for views
app.set('views', path.join(__dirname, 'views'));

// Use the built-in express static middleware to serve static files
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', async (req: Request, res: Response) => {
  res.render('create-order', { title: 'Create New Signature Order' });
});

app.get('/order-signed', async (req: Request, res: Response) => {
  res.render('thank-you', { title: 'Create New Signature Order' });
});

app.get('/orders', async (req: Request, res: Response) => {
  const orders = await getOrders();

  res.render('orders', {
    title: 'Orders',
    orders: orders,
  });
});

app.get('/orders/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const order = await getSignatureOrder(id);

  // Check if order is closed or cancelled
  const isClosed = order.status === 'CLOSED';
  const isCanceled = order.status === 'CANCELLED';

  // Signed PDFs
  const signedDocuments = order.documents.map((document) => {
    return {
      title: document.title,
      blob: document.blob,
    };
  });
  // Document titles
  const documentTitles = order.documents.map((document) => document.title);

  res.render('order', {
    request: req,
    title: 'Signature Order Created',
    link: order.signatories[0].href, // This sample app only supports adding one signatory per order
    status: order.status,
    orderTitle: order.title || 'Untitled',
    orderId: id,
    signedDocuments: signedDocuments,
    documentTitles: documentTitles,
    isClosed,
    isCanceled
  });
});

// Close signature order
app.post('/orders/:id/close', async (req: Request, res: Response) => {
  const { id } = req.params;

  // Set retention period for 7 days – to be able to download the signed PDFs after the order is closed. 
  await closeSignatureOrder(id, 7);
  res.redirect('/orders/' + req.params.id);
});

// Cancel signature order
app.post('/orders/:id/cancel', async (req: Request, res: Response) => {
  const { id } = req.params;
  await cancelSignatureOrder(id);
  res.redirect('/orders/' + req.params.id);
});


app.post(
  '/new-signature-order',
  upload.array('document'),
  async (req: Request, res: Response) => {
    if (!req.files) throw new Error('No file uploaded!');

    // Files array might also be a Map, converting to an array
    const files = Array.isArray(req.files)
      ? req.files
      : Object.values(req.files).flatMap((v) => v);

    const createdSignatureOrder = await createSignatureOrder(
      files.map((file) => ({
        title: file.originalname,
        storageMode: DocumentStorageMode.Temporary,
        blob: file.buffer.toString('base64'),
      })),
      req.body.orderTitle
    );

    await addSignatory(createdSignatureOrder.id, req.body.reference);

    res.redirect(`/orders/${createdSignatureOrder.id}`);
  }
);

// Listen to incoming events
app.post('/webhook', async (req: Request, res: Response) => {
  const event = req.body.event;
  const orderId = req.body.signatureOrderId;
  console.log('Received webhook event:', req.body);

  if (event === 'SIGNATORY_SIGNED' && orderId) {
    console.log(`Received SIGNATORY_SIGNED event for order ${orderId}`);
    await closeSignatureOrder(orderId, 7);
  }
});

app.listen(port, () => {
  console.log('Server listening on port 4000');
});
