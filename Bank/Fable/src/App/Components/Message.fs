namespace App.Components


open Fable.Core
open Feliz
open Feliz.Bulma
open Fable
open Fable.Core.JsInterop
open Browser.Dom
open Fable.Formatting.Markdown

module Imports =
    type Accordion = 
        {
            attach : unit -> obj
        } 

    [<Import("bulmaAccordion",from="../../../node_modules/bulma-extensions/dist/js/bulma-extensions.js")>]
    let bulmaAccordion : Accordion = jsNative
    let attach() = 
        bulmaAccordion.attach() |> ignore
type ActionType = 
    Link of href : string
    | Action of (unit -> unit)
type Message() =  
    [<ReactComponent>]
    static member MarkdownDiv (x:string) =
        Html.div [
            prop.dangerouslySetInnerHTML (Markdown.ToHtml x)
        ]

    [<ReactComponent>]
    static member List(title : string, messages : Models.Message list,setMessages, setView, maxCount, cancelSignatureOrder) =
        let msgs = 
            match maxCount with
            None -> messages
            | Some maxCount -> 
                messages
                |> List.take (min messages.Length maxCount)
        let actionButton (actionText : string) action = 
            let action = 
                match action with
                Link actionLink ->
                    actionLink |> prop.href 
                | Action f ->
                    prop.onClick( fun _ -> f())
            Bulma.button.a (
                action::[
                    prop.className "reply"
                    prop.children [
                        Html.span actionText
                        Html.div [
                            prop.className "icon reply"
                        ]
                    ]
                ]
            )
            
        let messageViews = 
            msgs
            |> List.mapi(fun i message -> 
                
                let buttons = 
                    match message.Type with
                    Models.Plain ->
                        [sprintf "mailto:support@criipto.com?subject=%s&body=%s" message.Subject  message.Content |> Link |> actionButton "Reply "]
                    | Models.Signature(href,orderId) ->
                        [
                            href |> Link |> actionButton "Sign "
                            cancelSignatureOrder orderId |> Action |> actionButton "Reject "
                        ]
                Html.article [
                    prop.className "accordion message-item"
                    prop.children [
                        Html.div [
                            i |> sprintf "accordion-header toggle message-item message-item-%d" |> prop.className 
                            prop.onClick(fun _ -> 
                                let messageHeader = document.getElementsByClassName(sprintf "message-item-%d" i ).[0]
                                messageHeader.parentElement.classList.toggle "is-active" |> ignore
                                let dot = messageHeader.getElementsByClassName("dot").[0]
                                if dot |> isNull |> not && dot.classList.contains "read" |> not then 
                                    dot.classList.add "read" |> ignore
                                messages
                                |> List.map(fun m -> 
                                    if m = message then
                                        {
                                            m with Unread = false
                                        } 
                                    else m
                                ) |> setMessages
                            )
                            prop.children [
                                Html.div [
                                    Html.div [
                                        prop.className "message-item from"
                                        prop.children[
                                            if message.Unread then 
                                                yield Html.div [
                                                    prop.style [
                                                        style.marginRight 12
                                                    ]
                                                    prop.className "icon dot"
                                                ]
                                            yield message.From + " " + (message.Date.ToString("yyyy-MM-dd")) |> Html.span
                                        ]
                                    ]
                                    Html.span [
                                        prop.className "message-item subject"
                                        message.Subject |> prop.text
                                    ]
                                ]
                            ]
                        ]
                        Html.div [
                            prop.className "accordion-body"
                            prop.children [
                                Html.div [
                                    prop.className "accordion-content message-item"
                                    prop.children[
                                        Message.MarkdownDiv message.Content
                                    ]
                                ]
                                Html.section buttons
                            ]
                        ]
                    ]
                ]
            )
        Bulma.card [
            prop.style[
                style.boxShadow.none
                style.backgroundColor.white
            ]
            prop.children [
                Bulma.cardContent [
                    Bulma.media [
                        Bulma.mediaLeft [
                            Bulma.image [
                                prop.className "is-32x32 icon envelope"
                            ]
                        ]
                    ]
                    
                    Bulma.content [
                        yield Bulma.title [
                            prop.text title
                        ]
                        yield Html.section [
                            prop.className "accordions"
                            prop.children messageViews
                        ]
                        if msgs.Length < messages.Length then
                            yield Html.a [
                                prop.onClick(fun _ -> setView View.Messages)
                                prop.text "Show all messages"
                            ] 
                    ]
                ]
            ]
        ]