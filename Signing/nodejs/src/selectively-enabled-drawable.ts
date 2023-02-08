import { GraphQLClient } from 'graphql-request';
import { getSdk, DocumentStorageMode, SignatoryStatus, SignatureOrderQuery } from './graphql';

import {readFileSync, writeFileSync} from 'fs';

const samplePdf = readFileSync(__dirname + '/../input-sample.pdf');

if (!process.env.CLIENT_ID || !process.env.CLIENT_SECRET) throw new Error('Environment variables CLIENT_ID and CLIENT_SECRET must be defined. They are available when you create a signature application on https://manage.criipto.id');

const client = new GraphQLClient('https://signatures-api.criipto.com/v1/graphql', {
  headers: {
    Authorization: `Basic ${Buffer.from(process.env.CLIENT_ID + ':' + process.env.CLIENT_SECRET).toString('base64')}`
  }
});
const sdk = getSdk(client);

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
      ],
      evidenceProviders: [
          {
              enabledByDefault: true,
              criiptoVerify: {
                  uniqueEvidenceKey: "sub"
              }
          },
          {
              enabledByDefault: false,
              drawable: {
                  requireName: true
              }
          }
      ]
    }
  }).then(result => result.createSignatureOrder?.signatureOrder);
  if (!createdSignatureOrder) throw new Error('Failed adding signatureOrder');

  const verifyEvidenceProvider = createdSignatureOrder.evidenceProviders.find(s => s.__typename === 'CriiptoVerifySignatureEvidenceProvider')!;
  const drawableEvidenceProvider = createdSignatureOrder.evidenceProviders.find(s => s.__typename === 'DrawableSignatureEvidenceProvider')!;

  console.log('Adding signatories ...');
  const [verifySignatory, drawableSignatory] = await Promise.all([
    await sdk.addSignatory({
      input: {
        signatureOrderId: createdSignatureOrder.id,
        evidenceProviders: [
          {
            id: verifyEvidenceProvider.id
          }
        ]
      }
    }).then(result => result.addSignatory?.signatory),
    await sdk.addSignatory({
      input: {
        signatureOrderId: createdSignatureOrder.id,
        evidenceProviders: [
          {
            id: drawableEvidenceProvider.id
          }
        ]
      }
    }).then(result => result.addSignatory?.signatory)
  ])
  if (!verifySignatory || !drawableSignatory) throw new Error('Failed adding signatories');

  console.log(`Signatory added`);
  console.log(`Open ${verifySignatory!.href} to sign documents as Criipto Verify enabled signatory`);
  console.log(`Open ${drawableSignatory.href} to sign documents as Drawable enabled signatory`);
}

main().then().catch(console.error.bind(console));