module Signatures

//this assumes that the server is using the criipto signatures docker image criipto/signatures

open Fable.SimpleHttp
open Fable.SimpleJson

type Operation =
    CreateOrder
    | CancelOrder
    | CloseOrder
    | AddSignatory
    | AddSignatories
    override x.ToString() = 
        match x with
        CreateOrder -> "createOrder"
        | CancelOrder -> "cancelOrder"
        | CloseOrder -> "closeOrder"
        | AddSignatory -> "addSignatory"
        | AddSignatories -> "addSignatories"


[<Literal>]
let private apiRoot = "https://demo-app-signature-api.azurewebsites.net/api/"

type DocumentInfo = 
    {
        Title : string
        Content : string
        Reference : string option
    }


type SignatureOrderResponse = Fable.JsonProvider.Generator<"""{
    "id" : "id-string"
}""">

type AddSignatoryResponse = Fable.JsonProvider.Generator<"""{
    "signatory" : {
        "id" : "id-string",
        "documentLink" : "url-ti-document"
    }
}""">


let inline private post (token : string) (operation : Operation) parser (json : string) = 
    async{
        let url = sprintf "%s%A" apiRoot operation
        let! response =
            Http.request url
            |> Http.method POST
            |> Http.headers [ Headers.contentType "application/json"; token |> sprintf "Bearer %s" |> Headers.authorization]
            |> Http.content (BodyContent.Text json)
            |> Http.send

        match response.statusCode with
        | 200 ->
            let response =response.responseText
            printfn "Received: %s" response
            return response |> parser |> Ok

        | errorStatus ->
            let errors = response.responseText
            printfn "Got erros: %s" errors
            return Error errors
    }

let inline createSignatureOrder token title documents  =
    
    {|
        documents =
            documents
            |> Array.map(fun doc -> 
                {|
                    Title = doc.Title
                    Content = doc.Content
                    Reference = 
                        match doc.Reference with
                        None -> null
                        | Some s -> s
                |}
            ) 
        title = title
        disableVerifyEvidenceProvider = false
        fixDocumentFormattingErrors = true
        maxSignatories = 14
        signatories = null
        evidenceProviders = null
        signatoryUIRedirectUri = null
        webhookUrl = null
    |}
    |> Json.serialize
    |> post token CreateOrder SignatureOrderResponse
    

let inline addSignatory (token : string) (orderId : string) (userRef : string) =
    {|
        SignatureOrderId = orderId
        Signatory =  {|
            reference = userRef
            documents = null
            evidenceValidation = null

        |}
    |} |> Json.serialize
    |> post token AddSignatory AddSignatoryResponse


let inline cancelSignatureOrder (token : string) (orderId : string) =
    orderId
    |> Json.serialize
    |> post token CancelOrder id