import { GraphQLClient } from 'graphql-request';
import { getSdk, DocumentStorageMode, SignatoryStatus, SignatureOrderQuery } from './graphql';

import {readFileSync, writeFileSync} from 'fs';

const samplePdf = readFileSync(__dirname + '/../input-sample.pdf');

if (!process.env.CLIENT_ID || !process.env.CLIENT_SECRET) throw new Error('Environment variables CLIENT_ID and CLIENT_SECRET must be defined. They are available when you create a signature application on https://manage.criipto.id');

const client = new GraphQLClient('https://signatures-api-prod.azurewebsites.net/v1/graphql', {
  headers: {
    Authorization: `Basic ${Buffer.from(process.env.CLIENT_ID + ':' + process.env.CLIENT_SECRET).toString('base64')}`
  }
});
const sdk = getSdk(client);

async function pollSignatureOrderComplete(id: string, delay = 5000) : Promise<SignatureOrderQuery["signatureOrder"]> {
  console.log('Polling signature order ...');
  const signatureOrder = await sdk.signatureOrder({
    id
  }).then(result => result.signatureOrder!);

  const allComplete = signatureOrder.signatories.reduce((complete, signatory) => complete && signatory.status != SignatoryStatus.Open, true);
  if (allComplete) return signatureOrder;
  await new Promise((resolve) => setTimeout(resolve, delay));
  return await pollSignatureOrderComplete(id, delay);
}

async function main() {
  console.log('Creating signature order ...');

  const createdSignatureOrder = await sdk.createSignatureOrder({
    input: {
      documents: [
        {
          pdf: {
            title: 'Sample',
            storageMode: DocumentStorageMode.Temporary,
            blob: samplePdf.toString('base64')
          }
        }
      ]
    }
  }).then(result => result.createSignatureOrder?.signatureOrder);
  if (!createdSignatureOrder) throw new Error('Failed adding signatureOrder');

  console.log('Adding signatory ...');
  const signatory = await sdk.addSignatory({
    input: {
      signatureOrderId: createdSignatureOrder.id
    }
  }).then(result => result.addSignatory?.signatory);
  if (!signatory) throw new Error('Failed adding signatory');

  console.log(`Signatory added, open ${signatory.href} to sign documents`);

  await new Promise((resolve) => setTimeout(resolve, 5000));
  const polledSignatureOrder = await pollSignatureOrderComplete(createdSignatureOrder.id);
  
  polledSignatureOrder?.signatories.forEach(signatory => {
    if (signatory.status === SignatoryStatus.Error || signatory.status === SignatoryStatus.Rejected) {
      throw new Error('A signatory failed or declined to sign');
    }
  });

  const closedSignatureOrder = await sdk.closeSignatureOrder({
    input: {
      signatureOrderId: createdSignatureOrder.id
    }
  }).then(result => result.closeSignatureOrder?.signatureOrder);
  if (!closedSignatureOrder) throw new Error('Failed closing signatureOrder');

  closedSignatureOrder.documents.forEach((document, index) => {
    writeFileSync(index ? __dirname + `/../output-sample-${index}.pdf` : __dirname + `/../output-sample.pdf`, Buffer.from(document.blob, 'base64'));
  });

  console.log('Signature order signed and closed, inspect result in output-sample.pdf');
}

main().then().catch(console.error.bind(console));