using Newtonsoft.Json;
using GraphQL;
using GraphQL.Client.Abstractions;
using GraphQL.Client.Http;
using GraphQL.Client.Serializer.Newtonsoft;
using System.Net.Http.Headers;
using System.IO;

var clientId = "";
var clientSecret = "";
using var graphQLClient = new GraphQLHttpClient("https://signatures-api.criipto.com/v1/graphql", new NewtonsoftJsonSerializer());
graphQLClient.HttpClient.DefaultRequestHeaders.Authorization
    = new AuthenticationHeaderValue("Basic", Convert.ToBase64String(System.Text.ASCIIEncoding.ASCII.GetBytes($"{clientId}:{clientSecret}")));

var pdf = File.ReadAllBytes("./input-sample.pdf");

var documents = new List<CriiptoSignatures.Types.DocumentInput>{
    new CriiptoSignatures.Types.DocumentInput {
        pdf = new CriiptoSignatures.Types.PadesDocumentInput {
            title = "Dotnet Sample",
            blob = Convert.ToBase64String(pdf),
            storageMode = CriiptoSignatures.Types.DocumentStorageMode.Temporary
        }
    }
};

var createSignatureOrderInput = new CriiptoSignatures.Types.CreateSignatureOrderInput {
    title = "Dotnet Sample",
    documents = documents
};
var createSignatureOrderResponse =
    await graphQLClient.SendMutationAsync(
        CriiptoSignatures.CreateSignatureOrderGQL.Request(new { input = createSignatureOrderInput}),
        () => new {createSignatureOrder = new CriiptoSignatures.Types.CreateSignatureOrderOutput()}
    );

if (createSignatureOrderResponse.Errors?.Length > 0) {
    Console.WriteLine(createSignatureOrderResponse.Errors.ToString());
    return;
}

var signatureOrderId = createSignatureOrderResponse.Data.createSignatureOrder.signatureOrder.id;

var addSignatoryInput = new CriiptoSignatures.Types.AddSignatoryInput {
    signatureOrderId = signatureOrderId
};
var addSignatoryResponse =
    await graphQLClient.SendMutationAsync(
        CriiptoSignatures.AddSignatoryGQL.Request(new { input = addSignatoryInput}),
        () => new {addSignatory = new CriiptoSignatures.Types.AddSignatoryOutput()}
    );

if (addSignatoryResponse.Errors?.Length > 0) {
    Console.WriteLine(addSignatoryResponse.Errors.ToString());
    return;
}

Console.WriteLine(addSignatoryResponse.Data.addSignatory.signatory.href);