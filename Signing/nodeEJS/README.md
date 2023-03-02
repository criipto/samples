# Criipto Signatures API Sample App with Node.js, EJS, and a webhook 

This simple web app allows you to create a signature order with multiple documents, add a signatory to it, and close or cancel the order. It demonstrates how Criipto Signatures API can be used with Node.js, Express and EJS. Additionally, it uses [Ngrok](https://ngrok.com/) to create a webhook endpoint where you can receive [events](https://docs.criipto.com/signatures/webhooks/events/) triggered when a signatory signs or rejects a document.  

This repository serves as an example of how you might implement the Criipto Document Signatures GraphQL API. 

You can also try out the API and see the schema using our [GraphQL Explorer](https://signatures-api-prod.azurewebsites.net/v1/explorer). 

## GraphQL

If you have not worked with GraphQL before, we suggest you read through [Introduction to GraphQL](https://graphql.org/learn/) and [The Fullstack Tutorial for GraphQL](https://www.howtographql.com/).  

In this example, we used [GraphQL Code Generator](https://the-guild.dev/graphql/codegen) to generate types for operations.

## Project structure

- `mutations` and `queries` folders contain GraphQL mutations and queries used in the app
- `generated` folder contains generated types for operations
- `criipto-operations.ts` contains API calls to Criipto Signatures API

## Running the app

- add a `.env` file to the root of the project with the following content:
  
  ```javascript
  CLIENT_ID={{YOUR_CLIENT_ID}}}
  CLIENT_SECRET={{YOUR_CLIENT_SECRET}}}
  ```
Your client ID and secret will be available on your [Criipto Dashboard](https://dashboard.criipto.com/) after you create a new signatures application. 

- `npm install` && `npm run dev`

## Example Queries & Mutations

### Querying a signature order

```
query signatureOrder($id: ID!) {
  signatureOrder(id: $id) {
    status
    title

    documents {
      id
      title,
      blob
    }

    signatories {
      id
      status
      href
    }
  }
}

```

### Creating a signature order

```
mutation createSignatureOrder ($input: CreateSignatureOrderInput!) {
  createSignatureOrder(input: $input) {
    signatureOrder {
      id

      documents {
        id
      }

      signatories {
        id
        status
      }
    }
  }
}
```

### Canceling a signature order

If a signature order is no longer required, you can cancel it.

```
mutation cancelSignatureOrder(
  $input: CancelSignatureOrderInput!
) {
  cancelSignatureOrder(input: $input) {
    signatureOrder {
      id
    }
  }
}
```

### Closing a signature order

Once all signatories have signed, you need to close your signature order to retrieve the signed documents.

```
mutation closeSignatureOrder ($input: CloseSignatureOrderInput!) {
  closeSignatureOrder(input: $input) {
    signatureOrder {
      id

      documents {
        id
        blob
      }
    }
  }
}
```

## Executing a query with variables

GraphQL queries are executed with HTTP POST requests. A `query` body parameter is required and a `variables` body parameter is optional but recommended.

Authentication to the Criipto Document Signatures GraphQL API uses Basic Auth over your Application Client Id and Client Secret.

```
curl -u clientId:clientSecret \
  -X POST --data '{"query": "query { signatureOrder(id: $id) { status }", "variables": {"id": "...example id ...."}}'
  https://signatures-api-prod.azurewebsites.net/v1/query
```

Our [GraphQL Explorer](https://signatures-api-prod.azurewebsites.net/v1/explorer) is the easiest way to test out queries.

## Notes & limitations

- The app only supports adding one signatory per order.  
- [Retention peroiod](https://docs.criipto.com/signatures/graphql/examples/#with-document-retention) is set to 7 days, allowing to query for and retrieve the signed PDFs after the order has been closed without relying on a database. 