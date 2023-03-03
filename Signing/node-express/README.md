# Criipto Signatures API Sample App with Node.js, EJS, and a webhook

This simple web app allows you to create a signature order with multiple documents, add signatories to it, and close or cancel the order. It demonstrates how Criipto Signatures API can be used with Node.js, Express, and EJS. Additionally, it uses [Ngrok](https://ngrok.com/) to create a webhook endpoint where you can receive [events](https://docs.criipto.com/signatures/webhooks/events/) triggered when a signatory signs or rejects a document.

This repository serves as an example of how you might implement the Criipto Document Signatures GraphQL API.

You can also try out the API and see the schema using our [GraphQL Explorer](https://signatures-api-prod.azurewebsites.net/v1/explorer).

## GraphQL

If you have not worked with GraphQL before, we suggest you read through [Introduction to GraphQL](https://graphql.org/learn/) and [The Fullstack Tutorial for GraphQL](https://www.howtographql.com/).

In this example, we used [GraphQL Code Generator](https://the-guild.dev/graphql/codegen) to generate types for operations.

### GraphQL Queries & Mutations

Please refer to our [GraphQL API documentation](https://docs.criipto.com/signatures/graphql/) for a list of available queries and mutations.  
Our [GraphQL Explorer](https://signatures-api-prod.azurewebsites.net/v1/explorer) is the easiest way to test out queries.

## Running the app

- add a `.env` file to the root of the project with the following content:

  ```
  CLIENT_ID={{YOUR_CLIENT_ID}}}
  CLIENT_SECRET={{YOUR_CLIENT_SECRET}}}
  ```

  Your client ID and secret will be available on your [Criipto Dashboard](https://dashboard.criipto.com/) after you [register your signatures application](https://docs.criipto.com/signatures/getting-started/register-application/).

- `npm install` && `npm start`

### Project structure

- `mutations` and `queries` folders contain GraphQL mutations and queries used in the app
- `generated` folder contains generated types for operations
- `criipto-operations.ts` contains API calls to Criipto Signatures API

### Notes

- The [retention period](https://docs.criipto.com/signatures/graphql/examples/#with-document-retention) is set to 7 days. This allows to query for the order and retrieve the signed PDFs after the order has been closed without relying on a database.
