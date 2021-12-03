namespace App.Components


open Fable.Core
open Feliz
open Feliz.Bulma
open Fable
open Fable.Core.JsInterop

module Imports =
    type Accordion = 
        {
            attach : unit -> obj
        } 

    [<Import("bulmaAccordion",from="/node_modules/bulma-extensions/dist/js/bulma-extensions.js")>]
    let bulmaAccordion : Accordion = jsNative
    let attach() = 
        bulmaAccordion.attach() |> ignore

type Message() =  
    [<ReactComponent>]
    static member Box(messages : Models.Message list) = 
        let messages = 
            messages
            |> List.map(fun message ->
                let iconClass = 
                    if message.Unread then 
                        "fas fa-circle dot"
                    else
                        "fas fa-circle dot read"
                Bulma.columns [
                    prop.onClick(fun _ -> printfn "read message")
                    prop.className "message"
                    prop.children [
                        Bulma.column [    
                            column.is12
                            prop.children[
                                Bulma.content [
                                    prop.className "message-item"
                                    prop.children [
                                        Html.div [
                                            prop.className "message-item from"
                                            prop.children[
                                                Html.i [
                                                    prop.style [
                                                        style.marginRight 12
                                                    ]
                                                    prop.className iconClass
                                                ]
                                                message.From + " " + (message.Date.ToString("yyyy-MM-dd")) |> Html.span
                                            ]
                                        ]
                                        Html.span [
                                            prop.className "message-item subject"
                                            message.Subject |> prop.text
                                        ]
                                    ]
                                ]
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
                
                    (Bulma.title [
                        prop.text "Messages"
                    ])::messages
                    |> Bulma.content 
                    
                ]
            ]
        ]

    
    [<ReactComponent>]
    static member List(messages : Models.Message list,reduceUnreadCount) =
        let messages = 
            messages
            |> List.mapi(fun i message -> 
                Html.article [
                    prop.className "accordion message-item"
                    prop.children [
                        Html.div [
                            i |> sprintf "accordion-header toggle message-item message-item-%d" |> prop.className 
                            prop.onClick(fun _ -> 
                                let messageHeader = Browser.Dom.document.getElementsByClassName(sprintf "message-item-%d" i ).[0]
                                messageHeader.parentElement.classList.toggle "is-active" |> ignore
                                let dot = messageHeader.getElementsByClassName("dot").[0]
                                if dot |> isNull |> not && dot.classList.contains "read" |> not then 
                                    dot.classList.add "read" |> ignore
                                    reduceUnreadCount()
                            )
                            prop.children [
                                Html.div [
                                    Html.div [
                                        prop.className "message-item from"
                                        prop.children[
                                            if message.Unread then 
                                                yield Html.i [
                                                    prop.style [
                                                        style.marginRight 12
                                                    ]
                                                    prop.className "fas fa-circle dot"
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
                                    prop.text message.Content
                                ]
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
                        Bulma.title [
                            prop.text "Messages"
                        ]
                        Html.section [
                            prop.className "accordions"
                            prop.children messages
                        ]
                    ]
                ]
            ]
        ]
        
        
    