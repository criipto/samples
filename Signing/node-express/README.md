# Criipto Signatures API Sample App with Node.js, EJS, and a webhook

This sample app allows you to create a signature order with multiple documents, add signatories to it, and close or cancel the order. It is built with the [Node.js SDK for Criipto Signatures](https://github.com/criipto/criipto-signatures-nodejs) and demonstrates how Criipto Signatures API can be used with Node.js, Express, and EJS.  

Additionally, it uses [Ngrok](https://ngrok.com/) to create a webhook endpoint where you can receive [events](https://docs.criipto.com/signatures/webhooks/events/) triggered when a signatory signs or rejects a document.

### Documentation & Resources 

- [The full documentation](https://docs.criipto.com/signatures/integrations/nodejs/) for the Node.js SDK.  

- [More Node.js examples](https://docs.criipto.com/signatures/graphql/examples/) for all the options supported by the Criipto Signatures API (choose Node.js from the dropdown).  

- An easy way to test out queries is by using our [GraphQL Explorer](https://signatures-api.criipto.com/v1/explorer).  
If you have not worked with GraphQL before, you can read through [Introduction to GraphQL](https://graphql.org/learn/) and [The Fullstack Tutorial for GraphQL](https://www.howtographql.com/).

## Running the app

- add a `.env` file to the root of the project with the following content:

  ```
  CLIENT_ID={{YOUR_CLIENT_ID}}}
  CLIENT_SECRET={{YOUR_CLIENT_SECRET}}}
  ```

  Your client ID and secret will be available on your [Criipto Dashboard](https://dashboard.criipto.com/) after you [register your signatures application](https://docs.criipto.com/signatures/getting-started/register-application/).

- `npm install` && `npm start`

### Notes

- The [retention period](https://docs.criipto.com/signatures/graphql/examples/#with-document-retention) is set to 7 days. This allows to query for the order and retrieve the signed PDFs after the order has been closed without relying on a database.
