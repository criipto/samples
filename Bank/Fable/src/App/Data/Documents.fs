module Documents

open Feliz
open Feliz.Bulma
open Fable.SimpleHttp
type private document = Fable.JsonProvider.Generator<"../public/documents.json">

let mutable documents = None
let sources = 
  [
      "https://criipto.github.io/samples/static/documents.json" //try online first
      "/documents.json" //fallback to local if online is unavailable
  ]
let fetch(setDocuments) = 
    let readDocument (doc : document.Documents) = 
        async {
            let! response =
                Http.request doc.documentUrl
                |> Http.method GET
                |> Http.send
            let content = 
                match response.statusCode with
                | 200 ->
                    Some response.responseText
                | errorStatus ->
                    let errors = response.responseText
                    printfn "Error retrieving document: %s" errors
                    None
            let doc = 
                content
                |> Option.map(fun content ->
                    {
                        Name = doc.name
                        Content = content
                        Reference = 
                            if doc.reference |> isNull then None else Some doc.reference
                    } : Models.Document
                )
            return doc
        } 

    let retrieveDocuments priority src =
        async {
                let! (statusCode,documentsRaw) = Fable.SimpleHttp.Http.get src
                if statusCode = 200 then
                    let! docs = 
                        document(documentsRaw).documents
                        |> Array.map(fun doc ->
                            readDocument doc
                        ) 
                        |> Async.Parallel
                    let documents = 
                        docs
                        |> Array.filter Option.isSome
                        |> Array.map Option.get
                        |> List.ofArray

                    if documents |> List.isEmpty |> not then 
                        return priority,documents                    
                    else 
                        eprintfn "Failed retrieving from %s got %d - %s" src statusCode documentsRaw
                        return priority,[]
                else
                    eprintfn "Failed to retrieve documents %d %s from %s" statusCode documentsRaw src
                    return priority,[]
            }

    if documents |> Option.isNone then
        async {
            let! docs = 
                sources
                |> List.mapi retrieveDocuments
                |> Async.Parallel

            documents <-
                docs
                |> Array.sortBy fst
                |> Array.map snd
                |> List.ofArray
                |> List.collect id
                |> List.fold(fun (res : Map<_,_>) doc ->
                    //if overriding a message locally (ie with higher priority) then that message will be showned
                    res.Add(doc.Name, doc)
                ) Map.empty
                |> Map.toList
                |> List.map snd
                |> Some
            setDocuments documents.Value
        }|> Async.StartImmediate