module Messages

open Feliz
open Feliz.Bulma

type private Message = Fable.JsonProvider.Generator<"../public/messages.json">

let mutable messages = None
//prioritiezed list of sources
//anything in the previous source will be overriden by something in a later source with the same id
let sources = 
  [
      "https://criipto-bank.netlify.app/feliz/messages.json" 
      "/messages.json" 
  ]
let fetch(setMessages) = 
    let retrieveMessages priority src =
        async {
            let! (statusCode,messagesRaw) = Fable.SimpleHttp.Http.get src
            if statusCode = 200 then
                let messages = 
                    Message(messagesRaw).messages
                    |> Array.filter(fun m -> System.String.IsNullOrWhiteSpace m.id |> not)
                    |> Array.mapi(fun i m ->
                        {
                            Id = m.id
                            Subject = m.title
                            Content = m.content
                            From = m.from
                            Date = System.DateTime.Parse(m.date,System.Globalization.CultureInfo.InvariantCulture)
                            Unread = (i % 5 <> 1)
                            Type = Models.Plain
                        } : Models.Message
                    ) |> Array.sortByDescending(fun m ->
                        (if m.Unread then 1 else 0),m.Date
                    ) |> List.ofArray                    
                if messages |> List.isEmpty |> not then 
                    return priority,messages                    
                else 
                    eprintfn "Failed retrieving from %s got %d - %s" src statusCode messagesRaw
                    return priority,[]
            else
                eprintfn "Failed to retrieve messages %d %s from %s" statusCode messagesRaw src
                return priority,[]
        } 
    if messages |> Option.isNone then
        async {
            let! msgs = 
                sources
                |> List.mapi retrieveMessages
                |> Async.Parallel

            messages <-
                msgs
                |> Array.sortBy fst
                |> Array.map snd
                |> List.ofArray
                |> List.collect id
                |> List.fold(fun (res : Map<_,_>) m ->
                    //if overriding a message locally (ie with higher priority) then that message will be showned
                    res.Add(m.Id, m)
                ) Map.empty
                |> Map.toList
                |> List.map snd
                |> Some
            setMessages messages.Value
        } |> Async.StartImmediate