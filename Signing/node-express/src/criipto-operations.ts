import dotenv from 'dotenv';
dotenv.config();
import { GraphQLClient } from 'graphql-request';
import { getSdk, PadesDocumentInput, Scalars } from './generated/graphql';
import { ngrokUrl } from './app';

if (!process.env.CLIENT_ID || !process.env.CLIENT_SECRET)
  throw new Error(
    'Environment variables CLIENT_ID and CLIENT_SECRET must be defined. They are available when you create a signature application on https://manage.criipto.id'
  );

const client = new GraphQLClient(
  'https://signatures-api.criipto.com/v1/graphql',
  {
    headers: {
      Authorization: `Basic ${Buffer.from(
        process.env.CLIENT_ID + ':' + process.env.CLIENT_SECRET
      ).toString('base64')}`,
    },
  }
);
const sdk = getSdk(client);

export async function createSignatureOrder(
  inputFiles: PadesDocumentInput[],
  title?: Scalars['String'],
  redirectUrl?: Scalars['String']
) {
  console.log('Creating signature order ...');

  const createdSignatureOrder = await sdk
    .createSignatureOrder({
      input: {
        title: title,
        documents: inputFiles.map((pdf) => ({ pdf })),
        // Adding ngrok webhook url
        webhook: {
          url: ngrokUrl + '/webhook',
        },
        // Adding redirect url (optional), where the signatory will be redirected after signing
        // ui: {
        //   "signatoryRedirectUri": "http://localhost:4000/thank-you",
        // },
      },
    })
    .then((result) => result.createSignatureOrder?.signatureOrder);
  if (!createdSignatureOrder) throw new Error('Failed adding signatureOrder');
  return createdSignatureOrder;
}

export async function addSignatory(
  signatureOrderId: string,
  reference?: string
) {
  console.log(`Adding signatory`);
  const signatory = await sdk
    .addSignatory({
      input: {
        signatureOrderId: signatureOrderId,
        reference,
      },
    })
    .then((result) => result.addSignatory?.signatory);

  if (!signatory) throw new Error('Failed adding signatory');
  console.log(`Signatory added`);

  return signatory;
}

export async function getSignatureOrder(id: string) {
  console.log(`Getting signature order ${id} ...`);
  const signatureOrder = await sdk
    .signatureOrder({
      id,
    })
    .then((result) => result.signatureOrder!);
  console.log(`Signature order ${id} retrieved`);
  return signatureOrder;
}

export async function getOrders() {
  console.log('Getting orders ...');
  // Return the last 10 orders
  const orders = await sdk.SignatureOrders().then((result) => {
    if (result.viewer.__typename !== 'Application')
      throw new Error('Unauthorized');
    const orders = result.viewer.signatureOrders?.edges
      .slice(-10)
      .map((edge) => ({
        id: edge.node.id,
        title: edge.node.title || 'Untitled',
        status: edge.node.status,
      }));
    return orders;
  });
  return orders;
}

export async function closeSignatureOrder(id: string, retentionPeriod: number) {
  console.log(`Closing signature order ${id} ...`);

  // Check if order is already closed
  let orderStatus = await sdk
    .signatureOrder({
      id,
    })
    .then((result) => result.signatureOrder!.status);
  if (orderStatus === 'CLOSED') return;

  const closedSignatureOrder = await sdk
    .closeSignatureOrder({
      input: {
        signatureOrderId: id,
        retainDocumentsForDays: retentionPeriod,
      },
    })
    .then((result) => result.closeSignatureOrder?.signatureOrder);
  if (!closedSignatureOrder) throw new Error('Failed closing signatureOrder');
  console.log(`Signature order ${id} closed`);
  return closedSignatureOrder;
}

export async function cancelSignatureOrder(id: string) {
  console.log(`Canceling signature order ${id} ...`);

  let orderStatus = await sdk
    .signatureOrder({
      id,
    })
    .then((result) => result.signatureOrder!.status);

  if (orderStatus === 'CANCELLED') return;

  const canceledSignatureOrder = await sdk
    .cancelSignatureOrder({
      input: {
        signatureOrderId: id,
      },
    })
    .then((result) => result.cancelSignatureOrder?.signatureOrder);
  if (!canceledSignatureOrder)
    throw new Error('Failed cancelling signatureOrder');
  console.log(`Signature order ${id} canceled`);
  return canceledSignatureOrder;
}
