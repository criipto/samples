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
                style.fontSize 24
            ]
            prop.children[
                Bulma.icon [
                    if label.IsSome then 
                        yield Html.span [ 
                                prop.className "navbar-item"
                                prop.text label.Value
                              ]
                    if iconName.IsSome then
                        yield Html.i [
                            iconName.Value |> sprintf "fal fa-%s" |> prop.className
                        ]
                ]
            ]
        ]

[<AutoOpen>]
module Types =
    type View = 
        | Accounts
        | Account of string
        | Transfer
        | Invest
        | Pensions
        | Messages
        | Profile
        | DevSupport
        with override x.ToString() = 
                match x with
                | Accounts -> "Accounts"
                | Account n -> sprintf "Account - %s" n
                | Transfer -> "Payments & Transfer"
                | Invest -> "Investment"
                | Pensions -> "Pension and Insurance"
                | Messages -> "Messages"
                | Protile -> "Protile"
                | DevSupport -> "Developer ßSupport"
    