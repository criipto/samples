namespace App.Components

open Feliz
open Feliz.Router
open Feliz.Bulma

type Elements =
    
    [<ReactComponent>]
    static member IconButton (label : string option,iconName : string option, action ) = 
        Bulma.button.a [  
            prop.onClick action
            prop.style [
                style.backgroundColor.transparent
                style.borderStyle.none
                style.fontSize 18
            ]
            prop.children[
                if label.IsSome then 
                    yield Html.span [ 
                            prop.className "navbar-item"
                            prop.text label.Value
                            ]
                if iconName.IsSome then
                    yield Html.div [
                        iconName.Value |> sprintf "icon %s" |> prop.className
                    ]
            ]
        ]

[<AutoOpen>]
module Types =
    type View = 
        | Overview
        | Account of string
        | Transfer
        | Invest
        | Pensions
        | Messages
        | Profile
        | DevSupport
        | Accounts
        with override x.ToString() = 
                match x with
                | Overview -> "Overview"
                | Accounts -> "Accounts"
                | Account n -> sprintf "Account - %s" n
                | Transfer -> "Payments & Transfer"
                | Invest -> "Investment"
                | Pensions -> "Pension and Insurance"
                | Messages -> "Messages"
                | Profile -> "Profile"
                | DevSupport -> "Developer Support"
             member x.IconName
                 with get() = 
                    match x with
                    | Overview -> "lamp"
                    | Accounts -> "coins"
                    | Account n -> ""
                    | Transfer -> "arrows"
                    | Invest -> "chart"
                    | Pensions -> "wineglass"
                    | Messages -> "envelope"
                    | Profile -> "profile"
                    | DevSupport -> "code"
                
    