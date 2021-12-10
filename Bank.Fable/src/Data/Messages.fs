module Messages

open Feliz
open Feliz.Bulma

type private Message = Fable.JsonProvider.Generator<"../public/messages.json">

let mutable messages = []
let sources = 
  [
      "https://criipto-bank.netlify.app/felize/messages.json" //try online first
      //"/messages.json" //fallback to local if online is unavailable
  ]
let fetch(setMessages) = 
    let rec inner srcs = 
        match srcs with
        src::s ->
            async {
                let! (statusCode,messagesRaw) = Fable.SimpleHttp.Http.get src
                if statusCode = 200 then
                    messages <- 
                        Message(messagesRaw).messages
                        |> Array.mapi(fun i m ->
                            {
                                Subject = m.title
                                Content = m.content
                                From = m.from
                                Date = System.DateTime.Parse(m.date,System.Globalization.CultureInfo.InvariantCulture)
                                Unread = (i % 5 <> 1)
                            } : Models.Message
                        ) |> Array.sortByDescending(fun m ->
                            (if m.Unread then 1 else 0),m.Date
                        ) |> List.ofArray
                    if messages |> List.isEmpty |> not then 
                        setMessages messages                    
                    else 
                        eprintfn "Failed retrieving from %s got %d - %s" src statusCode messagesRaw
                        return! inner s
                else
                    eprintfn "Failed to retrieve messages %d %s from %s" statusCode messagesRaw src
                    return! inner s
            }
        | [] -> 
            eprintfn "Failed to retrieve messages from any source"
            async { return ()}

    if messages |> List.isEmpty then
        sources
        |> inner 
        |> Async.StartImmediate