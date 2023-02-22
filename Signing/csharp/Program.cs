using GraphQL.Client.Abstractions;
using GraphQL.Client.Http;
using GraphQL.Client.Serializer.Newtonsoft;
using System.Net.Http.Headers;

// Run sample with `CRIIPTO_SIGNATURES_CLIENT_ID=... CRIIPTO_SIGNATURES_CLIENT_SECRET=... dotnet run`
var clientId = Environment.GetEnvironmentVariable("CRIIPTO_SIGNATURES_CLIENT_ID");
var clientSecret = Environment.GetEnvironmentVariable("CRIIPTO_SIGNATURES_CLIENT_SECRET");

// Create GraphQL client
var serializer = new NewtonsoftJsonSerializer();
using var graphQLClient = new GraphQLHttpClient("https://signatures-api.criipto.com/v1/graphql", serializer);

// Set basic auth header using client id and client secret
graphQLClient.HttpClient.DefaultRequestHeaders.Authorization
    = new AuthenticationHeaderValue("Basic", Convert.ToBase64String(System.Text.Encoding.ASCII.GetBytes($"{clientId}:{clientSecret}")));

// --------------------- Creating a new signature order ---------------------

// Read sample pdf file to be signed
var pdf = File.ReadAllBytes("./input-sample.pdf");

// Create document to be added to signature order. This is the PDF converted to a base64 blob.
var documents = new List<CriiptoSignatures.Types.DocumentInput>{
    new CriiptoSignatures.Types.DocumentInput {
        pdf = new CriiptoSignatures.Types.PadesDocumentInput {
            title = "Dotnet Sample",
            blob = Convert.ToBase64String(pdf),
            storageMode = CriiptoSignatures.Types.DocumentStorageMode.Temporary
        }
    }
};

// Create signature order 
var createSignatureOrderInput = new CriiptoSignatures.Types.CreateSignatureOrderInput {
    title = "Dotnet Sample",
    documents = documents
};

// Send mutation to create signature order
var createSignatureOrderResponse =
    await graphQLClient.SendMutationAsync(
        CriiptoSignatures.CreateSignatureOrderGQL.Request(new { input = createSignatureOrderInput}),
        () => new {createSignatureOrder = new CriiptoSignatures.Types.CreateSignatureOrderOutput()}
    );

// Check for errors in response
if (createSignatureOrderResponse.Errors?.Length > 0) {
    Console.WriteLine(createSignatureOrderResponse.Errors.ToString());
    return;
}

// Get signature order id from response
var signatureOrderId = createSignatureOrderResponse.Data.createSignatureOrder.signatureOrder.id;

// Add signatory to signature order
var addSignatoryInput = new CriiptoSignatures.Types.AddSignatoryInput {
    signatureOrderId = signatureOrderId
};

// Send mutation to add signatory to signature order
var addSignatoryResponse =
    await graphQLClient.SendMutationAsync(
        CriiptoSignatures.AddSignatoryGQL.Request(new { input = addSignatoryInput}),
        () => new {addSignatory = new CriiptoSignatures.Types.AddSignatoryOutput()}
    );

// Check for errors in response
if (addSignatoryResponse.Errors?.Length > 0)
    throw new Exception(addSignatoryResponse.Errors.ToString());

// Print link to signatory signing page to console
Console.WriteLine($"Signature signing link: {addSignatoryResponse.Data.addSignatory.signatory.href}\n\n");

// --------------------- Polling for signature order completion ---------------------

// Task for fetching a signature order by id
static async Task<CriiptoSignatures.Types.SignatureOrder> fetchSignatureOrder(GraphQLHttpClient graphQLClient, string id)
{
    var response =
        await graphQLClient.SendQueryAsync<CriiptoSignatures.Types.Query>(
            CriiptoSignatures.SignatureOrderGQL.Request(new { id })
        );

    return response.Data.signatureOrder;
}

// Task for polling a signature order until all signatories have completed
static async Task<CriiptoSignatures.Types.SignatureOrder> pollSignatureOrderComplete(GraphQLHttpClient graphQLClient, string id)
{
    var signatureOrder = await fetchSignatureOrder(graphQLClient, id);

    var allComplete =
        signatureOrder.signatories.Where(s => s.status != CriiptoSignatures.Types.SignatoryStatus.OPEN).Count()
        == signatureOrder.signatories.Count();

    if (allComplete) return signatureOrder;
    await Task.Delay(5000);
    return await pollSignatureOrderComplete(graphQLClient, id);
}

// Await completion of signature order
var signatureOrder = await pollSignatureOrderComplete(graphQLClient, signatureOrderId);
Console.WriteLine("Signature signed!");

// Check if all signatories signed without rejecting or errors
foreach (var signatory in signatureOrder.signatories) {
    if (signatory.status == CriiptoSignatures.Types.SignatoryStatus.ERROR || signatory.status == CriiptoSignatures.Types.SignatoryStatus.REJECTED)
        throw new Exception("A signatory failed or declined to sign");
}

// Close signature order
var closeSignatureOrderInput = new CriiptoSignatures.Types.CloseSignatureOrderInput { signatureOrderId = signatureOrderId };

var closeSignatureOrderResponse =
    await graphQLClient.SendMutationAsync(
        CriiptoSignatures.CloseSignatureOrderGQL.Request(new { input = closeSignatureOrderInput}),
        () => new {closeSignatureOrder = new CriiptoSignatures.Types.CloseSignatureOrderOutput()}
    );

// Check for errors in response
if (closeSignatureOrderResponse.Errors?.Length > 0)
    throw new Exception(closeSignatureOrderResponse.Errors.ToString());

// Print signed documents to console
foreach (var document in closeSignatureOrderResponse.Data.closeSignatureOrder.signatureOrder.documents) {
    // Save blob to pdf file   
    var fileName = $"./output-{document.id.Substring(0, 8)}.pdf";
    Console.WriteLine($"Saving signed document to {fileName}");
    File.WriteAllBytes(fileName, Convert.FromBase64String(document.blob));

    foreach (var signature in document.signatures) {
        if (signature is CriiptoSignatures.Types.JWTSignature jwtSignature) {
            Console.WriteLine($"JWT signature: {jwtSignature.jwt}");
        }
    }
}