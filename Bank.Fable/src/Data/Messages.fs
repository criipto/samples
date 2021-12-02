module Messages

open Feliz
open Feliz.Bulma

type private Message = Fable.JsonProvider.Generator<"../public/messages.json">

let mutable messages = []
let fetch(setMessages) = 
    async {
        if messages |> List.isEmpty then
            let! (statusCode,messagesRaw) = Fable.SimpleHttp.Http.get "/messages.json"
            if statusCode = 200 then
                messages <- 
                    Message(messagesRaw).messages
                    |> Array.mapi(fun i m ->
                        {
                            Subject = m.title
                            Content = m.content
                            From = m.from
                            Date = System.DateTime.Parse(m.date,System.Globalization.CultureInfo.InvariantCulture)
                            Unread = (i % 5 = 1)
                        } : Models.Message
                    ) |> Array.sortByDescending(fun m ->
                        (if m.Unread then 1 else 0),m.Date
                    ) |> List.ofArray
                if messages |> List.isEmpty |> not then setMessages messages
            else
                eprintfn "Failed to retrieve messages %d %s" statusCode messagesRaw
    } |> Async.StartImmediate