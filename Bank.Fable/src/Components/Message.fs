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
        printfn "Attaching..."
        bulmaAccordion.attach()
        |> printfn "Attached %A"
        bulmaAccordion.attach
        |> printfn "accordion %A"

type Message() =  
    [<ReactComponent>]
    static member Box(messages : Models.Message list) = 
        let messages = 
            messages
            |> List.map(fun message ->
                Bulma.columns [
                    prop.onClick(fun _ -> printfn "read message")
                    prop.className "message"
                    prop.children [
                        Bulma.column [    
                            column.is11
                            prop.children[
                                Bulma.content [
                                    prop.className "message-item"
                                    prop.children [
                                        Html.div [
                                            prop.className "from"
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
                                            prop.className "subject"
                                            message.Subject |> prop.text
                                        ]
                                    ]
                                ]
                            ] 
                        ]
                    ]
                ]
            )
        JS.setTimeout Imports.attach 1000 |> ignore
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
    static member List(messages : Models.Message list) =
        let messages = 
            messages
            |> List.mapi(fun i message -> 
                Html.article [
                    prop.className "accordion"
                    prop.children [
                        Html.div [
                            i |> sprintf "accordion-header toggle message-item message-item-%d" |> prop.className 
                            prop.onClick(fun _ -> Browser.Dom.document.getElementsByClassName(sprintf "message-item-%d" i ).[0].parentElement.classList.toggle "is-active" |> ignore)
                            prop.children [
                                    Html.div [
                                        prop.className "from"
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
                                        prop.className "subject"
                                        message.Subject |> prop.text
                                    ]
                            ]
                        ]
                        Html.div [
                            prop.className "accordion-body"
                            prop.children [
                                Html.div [
                                    prop.className "accordion-content"
                                    prop.text message.Content
                                ]
                            ]
                        ]
                    ]
                ]
            )
        
        Html.section [
            prop.className "accordions"
            prop.children messages
        ]
        
    