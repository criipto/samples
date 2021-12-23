module Documents

open Feliz
open Feliz.Bulma

type private document = Fable.JsonProvider.Generator<"../public/documents.json">

let mutable documents = []
let sources = 
  [
      "https://criipto-bank.netlify.app/feliz/documents.json" //try online first
      "/documents.json" //fallback to local if online is unavailable
  ]
let fetch(setDocuments) = 
    let rec inner srcs = 
        match srcs with
        src::s ->
            async {
                let! (statusCode,documentsRaw) = Fable.SimpleHttp.Http.get src
                if statusCode = 200 then
                    documents <- 
                        document(documentsRaw).documents
                        |> Array.mapi(fun i doc ->
                            {
                                Name = doc.name
                                Content = doc.content
                                Reference = 
                                    if doc.reference |> isNull then None else Some doc.reference
                            } : Models.Document
                        ) |> List.ofArray
                    if documents |> List.isEmpty |> not then 
                        setDocuments documents                    
                    else 
                        eprintfn "Failed retrieving from %s got %d - %s" src statusCode documentsRaw
                        return! inner s
                else
                    eprintfn "Failed to retrieve documents %d %s from %s" statusCode documentsRaw src
                    return! inner s
            }
        | [] -> 
            eprintfn "Failed to retrieve documents from any source"
            async { return ()}

    if documents |> List.isEmpty then
        sources
        |> inner 
        |> Async.StartImmediate