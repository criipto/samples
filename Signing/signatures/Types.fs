namespace Signatures.Types

open System.Runtime.InteropServices
open Signatures

[<AutoOpen>]
module Shared =
    type internal Convertible<'a> = 
        abstract member Convert : unit -> 'a
    let inline internal convert (arg : Convertible<_>) = arg.Convert()

module Arguments = 

    type SignatoryDocumentReference(id,?preapproved) = 
        let preapproved = if defaultArg preapproved false then Some true else None
        interface Convertible<Signatures.SignatoryDocumentInput> with
            member __.Convert() = 
               {id = id; preapproved = preapproved}

    type Signatory([<Optional;DefaultParameterValue(null : string)>]reference : string,
                   [<Optional;DefaultParameterValue(null : SignatoryDocumentReference [])>]documents :  SignatoryDocumentReference [],
                   [<Optional;DefaultParameterValue(null : System.Collections.Generic.Dictionary<string,string>)>]evidenceValidation : System.Collections.Generic.Dictionary<string,string>) = 
        let reference = 
            match reference with 
            null -> None 
            | s -> Some s
        let documents = 
            match documents with 
            null -> None 
            | s -> Some s
        let evidenceValidation = 
            match evidenceValidation with 
            null -> None 
            | s -> Some s
        interface Convertible<Signatures.CreateSignatureOrderSignatoryInput> with
            member __.Convert() = 
                {
                    reference = reference
                    documents = 
                        documents 
                        |> Option.map(Array.map(convert) >> List.ofArray)
                    evidenceValidation = 
                        evidenceValidation
                        |> Option.map(fun evidenceValidation ->  
                            evidenceValidation
                            |> Seq.map(fun kv -> { key = kv.Key; value = kv.Value } : Signatures.SignatoryEvidenceValidationInput)
                            |> List.ofSeq
                        )
                }
    type AddSignatory(signatureOrderId: string, signatory : Signatory) =
        let signatory = signatory |> convert
        interface Convertible<AddSignatoryInput> with
            member __.Convert() = 
                { 
                    signatureOrderId = signatureOrderId
                    reference = signatory.reference
                    documents = signatory.documents
                    evidenceValidation = signatory.evidenceValidation
                } : Signatures.AddSignatoryInput

    type AddSignatories(signatureOrderId: string, signatories : Signatory []) =
        let signatories = 
            signatories 
            |> Array.map convert
            |> List.ofArray
        interface Convertible<AddSignatoriesInput> with
            member __.Convert() = 
                { 
                    signatureOrderId = signatureOrderId
                    signatories = signatories
                } : Signatures.AddSignatoriesInput
                
    type ProviderInfo = 
        { 
          Name: string
          Domain: string
          ClientID: string
          Audience: string 
        } interface Convertible<EvidenceProviderInput> with 
              member this.Convert() = 
                let oidc = 
                       { 
                            name = this.Name
                            domain = this.Domain
                            clientID = this.ClientID
                            audience = this.Audience 
                        } : Signatures.OidcEvidenceProviderInput
                { oidc = oidc}
    type CreateOrder(documents : Signatures.DocumentInput [], 
                                    [<Optional;DefaultParameterValue(null : string)>]title : string,
                                    [<Optional;DefaultParameterValue(false)>]disableVerifyEvidenceProvider,
                                    [<Optional;DefaultParameterValue(true)>]fixDocumentFormattingErrors,
                                    [<Optional;DefaultParameterValue(14)>] maxSignatories : int,
                                    [<Optional;DefaultParameterValue(null : Signatory [])>] signatories : Signatory [],
                                    [<Optional;DefaultParameterValue(null : ProviderInfo [])>]evidenceProviders : ProviderInfo [],
                                    [<Optional;DefaultParameterValue(null : string)>]signatoryUIRedirectUri,
                                    [<Optional;DefaultParameterValue(null : string)>]webhookUrl) = 
        let title = 
            match title with null -> None | s -> Some s
        let disableVerifyEvidenceProvider = if disableVerifyEvidenceProvider then Some true else None
        let fixDocumentFormattingErrors = if fixDocumentFormattingErrors then None else Some false
        let maxSignatories = 
            if maxSignatories = 14 then None else Some maxSignatories
        let signatories = 
            match signatories with 
            null -> None 
            | arr -> 
                arr 
                |> Array.map convert
                |> List.ofArray 
                |> Some
        let evidenceProviders =
            match evidenceProviders  with null -> None | arr -> arr |> Array.map convert |> List.ofArray |> Some
        let ui = 
            match signatoryUIRedirectUri with 
            null -> None 
            | signatoryRedirectUri -> 
                ({signatoryRedirectUri = Some signatoryRedirectUri} : CreateSignatureOrderUIInput )|> Some
        let webhook = 
            match webhookUrl with 
            null -> None 
            | url -> 
                ({url = url} : CreateSignatureOrderWebhookInput) |> Some
        interface Convertible<Signatures.CreateSignatureOrderInput> with
            member __.Convert() =  
                {
                    title = title
                    disableVerifyEvidenceProvider = disableVerifyEvidenceProvider
                    fixDocumentFormattingErrors = fixDocumentFormattingErrors
                    maxSignatories = maxSignatories
                    signatories = signatories
                    documents = documents |> List.ofArray
                    evidenceProviders = evidenceProviders 
                    ui = ui
                    webhook = webhook
                } 

module Output = 
    type SignatoryRef = 
        {
            Id : string
            DocumentLink : string
        }

    type AddSignatory = 
        { 
            SignatoriesOnOrder: SignatoryRef []
            Signatory : SignatoryRef
        }

    type Document = 
        { 
            Id: string
            Content: string
        }
    
    type SignatureOrderResult = 
        { 
            Id: string
            Documents: Document []
        }
    type Signatory = 
        {
            Id : string
            Status : string        
        }
    type SignatureOrderInfo = 
        {
            Status : string
            Signatories : Signatory []
        }
    type SignatureOrder = 
        { 
            Id: string
            DocumentIds: string []
            Signatories : Signatory []
        }