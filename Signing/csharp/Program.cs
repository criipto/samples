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
            blob = Convert.ToBase64String(pdf)
        }
    }
};

var input = new CriiptoSignatures.Types.CreateSignatureOrderInput {
    title = "Dotnet Sample",
    documents = documents
};
var response =
    await graphQLClient.SendMutationAsync(
        CriiptoSignatures.CreateSignatureOrderGQL.Request(new { input = input}),
        () => new {createSignatureOrder = new CriiptoSignatures.Types.CreateSignatureOrderOutput()}
    );

if (response.Errors?.Length > 0) {
    Console.WriteLine(response.Errors.ToString());
} else {
    Console.WriteLine(response.Data.createSignatureOrder.signatureOrder.id);
}