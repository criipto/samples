import CriiptoSignatures from '@criipto/signatures';

import {readFileSync, writeFileSync} from 'fs';

const samplePdf = readFileSync(__dirname + '/../input-sample.pdf');

if (!process.env.CLIENT_ID || !process.env.CLIENT_SECRET) throw new Error('Environment variables CLIENT_ID and CLIENT_SECRET must be defined. They are available when you create a signature application on https://manage.criipto.id');

const client = new CriiptoSignatures(process.env.CLIENT_ID, process.env.CLIENT_SECRET);

async function main() {
  console.log('Creating signature order ...');

  const createdSignatureOrder = await client.createSignatureOrder({
    title: "Sample",
    documents: [
      {
        pdf: {
          title: "Node.js Sample",
          blob: Buffer.from(samplePdf), 
          storageMode: 'Temporary' 
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
  });
  if (!createdSignatureOrder) throw new Error('Failed adding signatureOrder');

  const verifyEvidenceProvider = createdSignatureOrder!.evidenceProviders.find(s => s.__typename === 'CriiptoVerifySignatureEvidenceProvider')!;
  const drawableEvidenceProvider = createdSignatureOrder!.evidenceProviders.find(s => s.__typename === 'DrawableSignatureEvidenceProvider')!;

  console.log('Adding signatories ...');
  const [verifySignatory, drawableSignatory] = await Promise.all([
    await client.addSignatory(createdSignatureOrder.id, {
      evidenceProviders: [
        {
          id: verifyEvidenceProvider!.id
        }
      ]
    }),
    await client.addSignatory(createdSignatureOrder.id, {
      evidenceProviders: [
        {
          id: drawableEvidenceProvider!.id
        }
      ]
    })
  ])
  if (!verifySignatory || !drawableSignatory) throw new Error('Failed adding signatories');

  console.log(`Signatory added`);
  console.log(`Open ${verifySignatory!.href} to sign documents as Criipto Verify enabled signatory`);
  console.log(`Open ${drawableSignatory.href} to sign documents as Drawable enabled signatory`);
}

main().then().catch(console.error.bind(console));