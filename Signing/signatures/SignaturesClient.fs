namespace Signatures

open Signatures
open Criipto.Signatures.Types.Arguments
open Criipto.Signatures.Types
open System.Runtime.InteropServices

type SignaturesClient(url,clientId,clientSecret) = 
    
    let _client = 
        let credentials = 
            sprintf "%s:%s" clientId clientSecret
            |> System.Text.Encoding.Default.GetBytes
            |> System.Convert.ToBase64String
        
        let httpClient = new System.Net.Http.HttpClient()
        httpClient.DefaultRequestHeaders.Add("Authorization", sprintf "Basic %s" credentials)
        httpClient.BaseAddress <- System.Uri url
        SignaturesGraphqlClient(url,httpClient)

    member this.AddSignatory(signatureOrderId, signatory) = 
        AddSignatory(signatureOrderId, signatory)
        |> this.AddSignatory

    member __.AddSignatory(input : AddSignatory) = 
        let res =  _client.AddSignatory({input = input |> convert})
        match res with
        Ok res -> 
            match res.addSignatory with
            None -> failwith "No order detailed returned"
            | Some res -> 
                {
                    SignatoriesOnOrder = 
                        res.signatureOrder.signatories
                        |> List.map(fun signatory ->
                            {
                                    Id = signatory.id
                                    DocumentLink = signatory.href
                            } : Output.SignatoryRef
                        ) |> Array.ofList
                    Signatory = 
                        {
                            Id = res.signatory.id
                            DocumentLink = res.signatory.href
                        } : Output.SignatoryRef
                } : Output.AddSignatory
        | Error e ->
            System.String.Join(" => ", e |> List.map (fun e -> e.message))
            |> failwith

    member __.AddSignatories(addSignatories : AddSignatories) = 
            let res = _client.AddSignatories({ input = addSignatories |> convert} )
            match res with
            Ok res -> 
                match res.addSignatories with
                None -> failwith "No order detailed returned"
                | Some order ->
                    order.signatories
                    |> List.map(fun signatory ->
                        {
                            Id = signatory.id
                            DocumentLink = signatory.href
                        } : Output.SignatoryRef
                    ) |> Array.ofList
            | Error e ->
                System.String.Join(" => ", e |> List.map (fun e -> e.message))
                |> failwith

    member __.CloseSignatureOrder(signatureOrderId : string) = 
            let res = _client.CloseSignatureOrder({input = ({ signatureOrderId = signatureOrderId} : CloseSignatureOrderInput) })
            match res with
            Ok res ->
                let order =  
                    res.closeSignatureOrder
                    |> Option.map(fun order -> 
                        {
                            Id = order.signatureOrder.id
                            Documents = 
                                order.signatureOrder.documents
                                |> List.map(fun doc ->
                                    {
                                        Id = doc.id
                                        Content = 
                                            match doc.blob with
                                            None -> null
                                            | Some content -> content
                                    } : Output.Document
                                )
                                |> Array.ofList
                         } : Output.SignatureOrderResult
                    )
                match order with
                None -> failwith "No order details returned"
                | Some order -> order
            | Error e ->
                System.String.Join(" => ", e |> List.map (fun e -> e.message))
                |> failwith
    
    member __.CancelSignatureOrder(signatureOrderId : string) = 
            let res = _client.CancelSignatureOrder({input = ({ signatureOrderId = signatureOrderId} : CancelSignatureOrderInput) })
            match res with
            Ok res ->
                let order =  
                    res.cancelSignatureOrder
                    |> Option.map(fun order -> 
                        {
                            Id = order.signatureOrder.id
                            Documents = 
                                order.signatureOrder.documents
                                |> List.map(fun doc ->
                                    {
                                        Id = doc.id
                                        Content = 
                                            match doc.blob with
                                            None -> null
                                            | Some content -> content
                                    } : Output.Document
                                )
                                |> Array.ofList
                         } : Output.SignatureOrderResult
                    )
                match order with
                None -> failwith "No order details returned"
                | Some order -> order
            | Error e ->
                System.String.Join(" => ", e |> List.map (fun e -> e.message))
                |> failwith
    
    member this.CreateSignatureOrder(documents : DocumentInfo [], 
                                    [<Optional;DefaultParameterValue(null : string)>]title : string,
                                    [<Optional;DefaultParameterValue(false)>]disableVerifyEvidenceProvider : bool,
                                    [<Optional;DefaultParameterValue(true)>]fixDocumentFormattingErrors : bool,
                                    [<Optional;DefaultParameterValue(14)>] maxSignatories : int,
                                    [<Optional;DefaultParameterValue(null : Signatory [])>] signatories : Signatory [],
                                    [<Optional;DefaultParameterValue(null : ProviderInfo [])>]evidenceProviders : ProviderInfo [],
                                    [<Optional;DefaultParameterValue(null : string)>]signatoryUIRedirectUri : string,
                                    [<Optional;DefaultParameterValue(null : string)>]webhookUrl : string) = 
        let order  = CreateOrder()
        order.Documents <- documents
        order.Title <- title
        order.DisableVerifyEvidenceProvider <- disableVerifyEvidenceProvider
        order.FixDocumentFormattingErrors <- fixDocumentFormattingErrors
        order.MaxSignatories <- maxSignatories
        order.Signatories <- signatories
        order.EvidenceProviders <- evidenceProviders
        order.SignatoryUIRedirectUri <- signatoryUIRedirectUri
        order.WebhookUrl <- webhookUrl
            
        this.CreateSignatureOrder order
    member __.CreateSignatureOrder(input : CreateOrder) = 
        async {
            let! res = _client.CreateSignatureOrderAsync({input = input |> convert})
            let res = 
                match res with
                Ok res -> 
                    match 
                        res.createSignatureOrder
                        |> Option.map(fun order ->
                            order.signatureOrder
                        ) with
                    None -> failwith "Order not created"
                    | Some order -> 
                        {
                            Id = order.id
                            DocumentIds = 
                                order.documents
                                |> List.map(fun doc ->
                                    doc.id
                                ) |> Array.ofList
                            Signatories = 
                                order.signatories
                                |> List.map(fun signatory ->
                                    {
                                        Id = signatory.id
                                        Status = 
                                            match signatory.status with
                                            SignatoryStatus.Open -> "OPEN"
                                            | SignatoryStatus.Signed -> "SIGNED"
                                            | SignatoryStatus.Rejected -> "REJECTED"
                                            | SignatoryStatus.Error -> "ERROR"
                                    } : Output.Signatory
                                ) |> Array.ofList
                        } : Output.SignatureOrder
                | Error e ->
                    System.String.Join(" => ", e |> List.map (fun e -> e.message))
                    |> failwith
            return res
        } |> Async.StartAsTask
    
    member __.SignatureOrder(orderId : string) = 
            async{
                let! res = _client.SignatureOrderAsync({ id = orderId})
                let res = 
                    match res with
                    Ok res -> 
                        match res.signatureOrder with
                        None -> failwith "No order detailed returned"
                        | Some order -> 
                            {
                                Status = 
                                    match order.status with
                                    | SignatureOrderStatus.Open -> "OPEN"
                                    | SignatureOrderStatus.Closed -> "CLOSED"
                                    | SignatureOrderStatus.Cancelled -> "CANCELLED"
                                Signatories = 
                                    order.signatories
                                    |> List.map(fun signatory ->
                                        {
                                            Id = signatory.id
                                            Status = 
                                                match signatory.status with
                                                SignatoryStatus.Open -> "OPEN"
                                                | SignatoryStatus.Signed -> "SIGNED"
                                                | SignatoryStatus.Rejected -> "REJECTED"
                                                | SignatoryStatus.Error -> "ERROR"
                                        } : Output.Signatory
                                    ) |> Array.ofList
                            } : Output.SignatureOrderInfo
                    | Error e ->
                        System.String.Join(" => ", e |> List.map (fun e -> e.message))
                        |> failwith
                return res
            } |> Async.StartAsTask

module Extensions =

    let array2list<'a> (a : 'a []) = a |> List.ofArray