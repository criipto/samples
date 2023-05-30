import dotenv from 'dotenv';
dotenv.config();
import express, { Express, Request, Response } from 'express';
import path from 'path';
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
  cancelSignatureOrder,
} from './criipto-operations';

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
  const orders = await getOrders(100);
  res.render('orders', {
    title: 'Orders',
    orders: orders,
  });
});

app.get('/orders/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const order = await getSignatureOrder(id, true) ;

  // Check if order is closed or cancelled
  const isClosed = order!.status === 'CLOSED';
  const isCanceled = order!.status === 'CANCELLED';

  // Signed PDFs
  const signedDocuments = ("documents" in order!) ? 
  (order.documents.map((document) => {
    return {
      title: document.title,
      blob: document.blob?.toString("base64"),
    };
  })) : [];
  
  // Document titles
  const documentTitles = (order && "documents" in order)? (order!.documents.map((document) => document.title)) : [];

  if(!order){
    res.status(404).send('Order not found')
  } else {
  res.render('order', {
    title: 'Signature Order Created',
    signatories: order.signatories,
    status: order.status,
    orderTitle: order.title,
    orderId: id,
    signedDocuments: signedDocuments,
    documentTitles: documentTitles,
    isClosed,
    isCanceled,
  });
}
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

    const files = Array.isArray(req.files)
      ? req.files
      : Object.values(req.files).flatMap((v) => v);

    const createdSignatureOrder = await createSignatureOrder(
      files.map((file) => ({
        title: file.originalname,
        storageMode: 'Temporary',
        blob: file.buffer
      })),
      req.body.orderTitle
    );

    // Add signatories
    let signatories = req.body.signatory || [];
    if (signatories.every((signatory: string) => signatory === '')) {
      // add a default signatory if no signatories added
      signatories = ['Signatory'];
    }

    for (const signatory of signatories) {
      try {
        if (signatory !== '') {
          await addSignatory(createdSignatureOrder.id, signatory);
        }
      } catch (err) {
        console.error(err);
      }
    }

    res.redirect(`/orders/${createdSignatureOrder.id}`);
  }
);

// Listen to incoming events
app.post('/webhook', async (req: Request, res: Response) => {
  try {
    const { event, signatureOrderId } = req.body;
    let orderCanClose = false;

    if (event === "WEBHOOK_VALIDATION") {
      console.log("WEBHOOK_VALIDATION event");
      res.sendStatus(200);
      return;
    }
    
    if (event && signatureOrderId) {
    const order = await getSignatureOrder(signatureOrderId);
    console.log(
      `Received event ${event} for order ${signatureOrderId}`,
      req.body
    );


    if (order!.signatories.every((signatory) => signatory.status === 'SIGNED')) {
      orderCanClose = true;
    }

    if (event === 'SIGNATORY_SIGNED' && orderCanClose) {
      console.log(
        `Received SIGNATORY_SIGNED event for order ${signatureOrderId}`
      );
      await closeSignatureOrder(signatureOrderId, 7);
      res.redirect('/order/' + signatureOrderId);
    }
   }
} catch (error) {
  console.error('An error occurred:', error);
  res.status(500).send('Error');
}
});

app.listen(port, () => {
  console.log('Server listening on port 4000');
});
