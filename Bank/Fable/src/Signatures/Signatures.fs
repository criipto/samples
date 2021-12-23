module Signatures

//this assumes that the server is using the criipto signatures docker image criipto/signatures

open Fable.SimpleHttp
open Fable.SimpleJson
open Criipto.Signatures.Types.Fable

let inline private post<'args,'ok,'error> token url (args : 'args) = 
    async{
        let! response =
            Http.request url
            |> Http.method POST
            |> Http.headers [ Headers.contentType "application/json"; token |> sprintf "Bearer %s" |> Headers.authorization]
            |> Http.content (BodyContent.Text (Json.serialize args))
            |> Http.send

        match response.statusCode with
        | 200 ->
            let response : 'ok = Json.parseNativeAs<'ok> response.responseText
            return Ok response

        | errorStatus ->
            let errors : 'error = Json.parseNativeAs<'error> response.responseText
            return Error errors
    }

let createSignatureOrder token title documents : Async<Result<Output.SignatureOrder,string>> =
    let args = Arguments.CreateOrder(documents,title = title)
    args
    |> post token "/signatures/CloseSignatureOrder"
    

let addSignatory token orderId userRef : Async<Result<Output.AddSignatory,string>>  =
    let args : Arguments.AddSignatory = Arguments.AddSignatory(orderId,Arguments.Signatory(reference = userRef))
    args
    |> post<Arguments.AddSignatory,Output.AddSignatory,string> token "/signatures/CloseSignatureOrder"
    