namespace Signatures

module internal Implementation = 
    //this assumes that the server is using the criipto signatures docker image criipto/signatures

    open Fable.SimpleHttp
    open Fable.SimpleJson
    open Fable.Core

    type private Operation =
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

    type Client(apiRoot, token) = 
        let post (operation : Operation) (json : string) = 
            async{
                let url = sprintf "%s%A" apiRoot operation
                let! response =
                    Http.request url
                    |> Http.method POST
                    |> Http.headers [ Headers.contentType "application/json"; token |> sprintf "Bearer %s" |> Headers.authorization]
                    |> Http.content (BodyContent.Text json)
                    |> Http.send

                return response.statusCode, response.responseText
            } |> Async.StartAsPromise

        member __.CreateSignatureOrder(title : string, documents : Types.DocumentInfo [])  =
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
            |> post CreateOrder
            
        member __.AddSignatory(orderId : string,userRef : string) =
            {|
                SignatureOrderId = orderId
                Signatory =  {|
                    reference = userRef
                    documents = null
                    evidenceValidation = null

                |}
            |} |> Json.serialize
            |> post AddSignatory


        member __.CancelSignatureOrder(orderId : string) =
            orderId
            |> Json.serialize
            |> post CancelOrder