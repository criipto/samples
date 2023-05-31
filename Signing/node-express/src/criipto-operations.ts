import dotenv from 'dotenv';
dotenv.config();
import CriiptoSignatures from '@criipto/signatures';
import { ngrokUrl } from './app';

if (!process.env.CLIENT_ID || !process.env.CLIENT_SECRET)
  throw new Error(
    'Environment variables CLIENT_ID and CLIENT_SECRET must be defined. They are available when you create a signature application on https://manage.criipto.id'
  );

const client = new CriiptoSignatures(process.env.CLIENT_ID, process.env.CLIENT_SECRET);

export async function createSignatureOrder(
  inputFiles: Parameters<typeof client["createSignatureOrder"]>[0]["documents"][0]["pdf"][],
  title?: Parameters<typeof client["createSignatureOrder"]>[0]["title"]
) {
  console.log('Creating signature order ...');
  
  const createdSignatureOrder = await client.createSignatureOrder({
    title: title,
    documents: inputFiles.map((pdf) => ({ pdf })),
    // Adding ngrok webhook url
    webhook: {
      url: ngrokUrl + '/webhook',
      validateConnectivity: true
    },
    // Adding redirect url (optional), where the signatory will be redirected after signing
    // ui: {
    //   "signatoryRedirectUri": "http://localhost:4000/thank-you",
    // },
  });
  if (!createdSignatureOrder) throw new Error('Failed adding signatureOrder');
  return createdSignatureOrder;
}

export async function addSignatory(
  signatureOrderId: string,
  reference?: string
) {
  console.log(`Adding signatory`);
  const signatory = await client.addSignatory(signatureOrderId, {reference});
  if (!signatory) throw new Error('Failed adding signatory');
  console.log(`Signatory added`);

  return signatory;
}

export async function getSignatureOrder(id: string, includeDocuments?: boolean){
  console.log(`Getting signature order ${id} ...`);
  const signatureOrder = await client.querySignatureOrder(id, includeDocuments);
  console.log(`Signature order ${id} retrieved`);
  return signatureOrder;
}

export async function getOrdersByStatus(first: number, status?: NonNullable<Parameters<typeof client["querySignatureOrders"]>[0]>["status"]) {
  console.log(`Getting orders ...`);
  const orders = await client.querySignatureOrders({ first, status })
    .then((result) => {
      return result
        .slice(-10)
        .map((order) => ({
          id: order.id,
          status: order.status,
          title: order.title || 'Untitled',
        }));
    });
  return orders;
}

export async function closeSignatureOrder(id: string, retentionPeriod: number) {
  console.log(`Closing signature order ${id} ...`);

  // Check if order is already closed
  let orderStatus = await client.querySignatureOrder(id)
    .then((result) => result!.status);
  if (orderStatus === 'CLOSED') return;

  const closedSignatureOrder = await client.closeSignatureOrder(id, {retainDocumentsForDays: retentionPeriod});
  if (!closedSignatureOrder) throw new Error('Failed closing signatureOrder');
  console.log(`Signature order ${id} closed`);
  return closedSignatureOrder;
}

export async function cancelSignatureOrder(id: string) {
  console.log(`Canceling signature order ${id} ...`);

  let orderStatus = await client.querySignatureOrder(id).then(result => result!.status);
  if (orderStatus === 'CANCELLED') return;

  const canceledSignatureOrder = await client.cancelSignatureOrder(id);
  if (!canceledSignatureOrder)
  throw new Error('Failed cancelling signatureOrder');
  console.log(`Signature order ${id} canceled`);
  return canceledSignatureOrder;
}
