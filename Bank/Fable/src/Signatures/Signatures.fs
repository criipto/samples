namespace Signatures

module Signatures = 

    open Fable.Core

    type SignatureOrderResponse = Fable.JsonProvider.Generator<"""{
        "id" : "id-string"
    }""">

    type AddSignatoryResponse = Fable.JsonProvider.Generator<"""{
        "signatory" : {
            "id" : "id-string",
            "documentLink" : "url-ti-document"
        }
    }""">

    type ErrorResponse = 
        {
            Error : string
            StatusCode : int
        }
    let client token = Client.Client("https://demo-app-signature-api.azurewebsites.net/api/",token)
    let inline parse parser (statusCode,responseText) = 
        match statusCode with
        | 200 ->
            let response =responseText
            response |> parser |> Ok
        | errorStatus ->
            {
                Error = responseText
                StatusCode = errorStatus
            } |> Error

    let createSignatureOrder token title documents  =
        let client = client token
        promise {
            let! res = client.createSignatureOrder(title,documents)
            return res |> parse SignatureOrderResponse
        } |> Async.AwaitPromise
        

    let addSignatory (token : string) (orderId : string) (userRef : string) =
        let client = client token
        promise {
            let! res = client.addSignatory(orderId,userRef)
            return res |> parse AddSignatoryResponse
        } |> Async.AwaitPromise


    let cancelSignatureOrder (token : string) (orderId : string) =
        let client = client token
        promise {
            let! res = client.cancelSignatureOrder orderId
            return res |> parse id
        } |> Async.AwaitPromise