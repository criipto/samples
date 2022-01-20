namespace App.Components

open Feliz
open Feliz.Router
open Feliz.Bulma

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
                
    