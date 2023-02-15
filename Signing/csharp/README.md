# Criipto Signatures C# sample

Run sample with `CRIIPTO_SIGNATURES_CLIENT_ID=... CRIIPTO_SIGNATURES_CLIENT_SECRET=... dotnet run`

`List<SignatureEvidenceProvider>` will have to be manually converted to `List<object>` and `List<Document>` to `List<PdfDocument>` due to a current shortcoming with graphql-codegen-c-sharp