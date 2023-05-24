import CriiptoSignatures from '@criipto/signatures';

import {readFileSync, writeFileSync} from 'fs';

const samplePdf = readFileSync(__dirname + '/../input-sample.pdf');

if (!process.env.CLIENT_ID || !process.env.CLIENT_SECRET) throw new Error('Environment variables CLIENT_ID and CLIENT_SECRET must be defined. They are available when you create a signature application on https://manage.criipto.id');

const client = new CriiptoSignatures(process.env.CLIENT_ID, process.env.CLIENT_SECRET);

async function pollSignatureOrderComplete(id: string, delay = 5000) : ReturnType<typeof client["querySignatureOrder"]> {
  console.log('Polling signature order ...');

  const signatureOrder = await client.querySignatureOrder(id).then(result => result!);
  const allComplete = signatureOrder?.signatories.reduce((complete, signatory) => complete && signatory.status != 'OPEN', true);
  if (allComplete) return signatureOrder;
  
  await new Promise((resolve) => setTimeout(resolve, delay));
  return await pollSignatureOrderComplete(id, delay);
}

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
    ]
  })
  if (!createdSignatureOrder) throw new Error('Failed adding signatureOrder');

  console.log('Adding signatory ...');
  const signatory = await client.addSignatory(createdSignatureOrder.id);
  if (!signatory) throw new Error('Failed adding signatory');

  console.log(`Signatory added, open ${signatory.href} to sign documents`);

  await new Promise((resolve) => setTimeout(resolve, 5000));
  const polledSignatureOrder = await pollSignatureOrderComplete(createdSignatureOrder.id);
  
  polledSignatureOrder?.signatories.forEach(signatory => {
    if (signatory.status === 'ERROR' || signatory.status === 'REJECTED') {
      throw new Error('A signatory failed or declined to sign');
    }
  });

  const closedSignatureOrder = await client.closeSignatureOrder(
    createdSignatureOrder.id
  );
  if (!closedSignatureOrder) throw new Error('Failed closing signatureOrder');

  closedSignatureOrder.documents.forEach((document, index) => {
    document.blob && 
      writeFileSync(index ? __dirname + `/../output-sample-${index}.pdf` : __dirname + `/../output-sample.pdf`, Buffer.from(document.blob));
  });

  console.log('Signature order signed and closed, inspect result in output-sample.pdf');
}

main().then().catch(console.error.bind(console));