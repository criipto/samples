namespace Criipto.Signatures.Types

open System.Runtime.InteropServices
open Signatures

[<AutoOpen>]
module Shared =
    type Convertible<'a> = 
        abstract member Convert : unit -> 'a
    let inline convert (arg : Convertible<_>) = arg.Convert()

module Arguments = 
    type SignatoryDocumentReference(id,[<Optional;DefaultParameterValue(false)>]preapproved) = 
        let preapproved = if preapproved then Some true else None
        interface Convertible<Signatures.SignatoryDocumentInput> with
            member __.Convert() = 
               {id = id; preapproved = preapproved}
    
    type Signatory() =                    
        
        let mutable reference = null 
        let mutable documents = null 
        let mutable evidenceValidation : System.Collections.Generic.Dictionary<string,string> = null 
        let noneIfNull s =
            match s with
            null -> None
            | s -> Some s
        member __.Reference 
            with get() = reference
            and set value = reference <- value
        member __.Documents 
            with get() = documents
            and set value = documents <- value
        member __.EvidenceValidation 
            with get() = evidenceValidation
            and set value = evidenceValidation <- value


        interface Convertible<Signatures.CreateSignatureOrderSignatoryInput> with
            member __.Convert() = 
                {
                    reference = reference |> noneIfNull
                    documents = 
                        documents 
                        |> noneIfNull
                        |> Option.map(Array.map(convert) >> List.ofArray)
                    evidenceValidation = 
                        evidenceValidation
                        |> noneIfNull
                        |> Option.map(fun evidenceValidation ->  
                            evidenceValidation
                            |> Seq.map(fun kv -> { key = kv.Key; value = kv.Value } : Signatures.SignatoryEvidenceValidationInput)
                            |> List.ofSeq
                        )
                }
    type AddSignatory(signatureOrderId: string, signatory : Signatory) =
        
        let mutable signatureOrderId = signatureOrderId
        let mutable signatory = signatory

        member __.SignatureOrderId
            with get() = signatureOrderId
            and set value = signatureOrderId <- value
        member __.Signatory
            with get() = signatory
            and set value = signatory <- value
        interface Convertible<AddSignatoryInput> with
            member __.Convert() = 
                let signatory = signatory |> convert
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

    type DocumentInfo() =
        let mutable reference = None
        let mutable title = null
        let mutable content = null
        
        member __.Title 
                   with get() = title
                   and set value = title <- value
        member __.Content 
                   with get() = content
                   and set value = content <- value
        member __.Reference 
                   with get() = reference
                   and set value = reference <- value
        interface Convertible<Signatures.DocumentInput> with
            member __.Convert() = 
                {
                    pdf = {
                            title = 
                                if title |> isNull then failwith "Title must not be null" else title
                            reference = reference
                            blob = if content |> isNull then failwith "Content must not be null" else content
                            storageMode = DocumentStorageMode.Temporary
                        }
                }

    type CreateOrder() = 
        let mutable documents : DocumentInfo[] = [||]
        let mutable title = null
        let mutable disableVerifyEvidenceProvider = false
        let mutable fixDocumentFormattingErrors = true
        let mutable maxSignatories = 14
        let mutable signatories : Signatory [] = null
        let mutable evidenceProviders : ProviderInfo [] = null 
        let mutable ui = null
        let mutable webhook = null

        
        member __.Documents 
                    with get() = documents
                    and set value = documents <- value
        member __.WebhookUrl 
                    with get() = webhook 
                    and  set value = webhook <- value
        member __.SignatoryUIRedirectUri 
                    with get() = ui 
                    and  set value = ui <- value
        member __.EvidenceProviders 
                    with get() = evidenceProviders 
                    and  set value = evidenceProviders <- value
        member __.Title 
                    with get() = title 
                    and  set value = title <- value
        member __.DisableVerifyEvidenceProvider 
                    with get() = disableVerifyEvidenceProvider 
                    and  set value = disableVerifyEvidenceProvider <- value
        member __.FixDocumentFormattingErrors 
                    with get() = fixDocumentFormattingErrors 
                    and  set value = fixDocumentFormattingErrors <- value
        member __.MaxSignatories 
                    with get() = maxSignatories 
                    and  set value = maxSignatories <- value
        member __.Signatories 
                    with get() = signatories 
                    and  set value = signatories <- value 

        interface Convertible<Signatures.CreateSignatureOrderInput> with
            member __.Convert() =  
                {
                    title = 
                        match title with null -> None | s -> Some s
                    disableVerifyEvidenceProvider = 
                        if disableVerifyEvidenceProvider then Some true else None
                    fixDocumentFormattingErrors = 
                        if fixDocumentFormattingErrors then None else Some false
                    maxSignatories = 
                        if maxSignatories = 14 then None else Some maxSignatories
                    signatories =
                        match signatories with 
                        null -> None 
                        | arr -> 
                            arr 
                            |> Array.map convert
                            |> List.ofArray 
                            |> Some
                    documents = 
                        documents
                        |> Array.map convert
                        |> List.ofArray

                    evidenceProviders = 
                        match evidenceProviders  with null -> None | arr -> arr |> Array.map convert |> List.ofArray |> Some
                    ui = 
                        match ui with 
                        null -> None 
                        | signatoryRedirectUri -> 
                            ({signatoryRedirectUri = Some signatoryRedirectUri} : CreateSignatureOrderUIInput )|> Some
                    webhook = 
                        match webhook with 
                        null -> None 
                        | url -> 
                            ({url = url} : CreateSignatureOrderWebhookInput) |> Some
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