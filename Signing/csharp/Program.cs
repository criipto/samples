using Newtonsoft.Json;
using GraphQL;
using GraphQL.Client.Abstractions;
using GraphQL.Client.Http;
using GraphQL.Client.Serializer.Newtonsoft;
using System.Net.Http.Headers;
using System;
using System.IO;
using System.Threading;

var clientId = Environment.GetEnvironmentVariable("CRIIPTO_SIGNATURES_CLIENT_ID");
var clientSecret = Environment.GetEnvironmentVariable("CRIIPTO_SIGNATURES_CLIENT_SECRET");

var serializer = new NewtonsoftJsonSerializer();

using var graphQLClient = new GraphQLHttpClient("https://signatures-api.criipto.com/v1/graphql", serializer);

graphQLClient.HttpClient.DefaultRequestHeaders.Authorization
    = new AuthenticationHeaderValue("Basic", Convert.ToBase64String(System.Text.ASCIIEncoding.ASCII.GetBytes($"{clientId}:{clientSecret}")));

static async Task<CriiptoSignatures.Types.SignatureOrder> fetchSignatureOrder(GraphQLHttpClient graphQLClient, string id) {
    var response =
        await graphQLClient.SendQueryAsync<CriiptoSignatures.Types.Query>(
            CriiptoSignatures.SignatureOrderGQL.Request(new { id = id})
        );

    return response.Data.signatureOrder;
}

static async Task<CriiptoSignatures.Types.SignatureOrder> pollSignatureOrderComplete(GraphQLHttpClient graphQLClient, string id) {
    var signatureOrder = await fetchSignatureOrder(graphQLClient, id);

    var allComplete =
        signatureOrder.signatories.Where(s => s.status != CriiptoSignatures.Types.SignatoryStatus.OPEN).Count()
        == signatureOrder.signatories.Count();

    if (allComplete) return signatureOrder;
    await Task.Delay(5000);
    return await pollSignatureOrderComplete(graphQLClient, id);
}

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

var signatureOrder = await pollSignatureOrderComplete(graphQLClient, signatureOrderId);

Console.WriteLine("complete");

foreach (var signatory in signatureOrder.signatories) {
    if (signatory.status == CriiptoSignatures.Types.SignatoryStatus.ERROR || signatory.status == CriiptoSignatures.Types.SignatoryStatus.REJECTED) {
        throw new Exception("A signatory failed or declined to sign");
    }
}

var closeSignatureOrderInput = new CriiptoSignatures.Types.CloseSignatureOrderInput {
    signatureOrderId = signatureOrderId
};
var closeSignatureOrderResponse =
    await graphQLClient.SendMutationAsync(
        CriiptoSignatures.CloseSignatureOrderGQL.Request(new { input = closeSignatureOrderInput}),
        () => new {closeSignatureOrder = new CriiptoSignatures.Types.CloseSignatureOrderOutput()}
    );

if (closeSignatureOrderResponse.Errors?.Length > 0) {
    Console.WriteLine(closeSignatureOrderResponse.Errors.ToString());
    return;
}

foreach (var document in closeSignatureOrderResponse.Data.closeSignatureOrder.signatureOrder.documents) {
    Console.WriteLine(document.blob);
    foreach (var signature in document.signatures) {
        if (signature is CriiptoSignatures.Types.JWTSignature jwtSignature) {
            Console.WriteLine(jwtSignature.jwt);
        }
    }
}