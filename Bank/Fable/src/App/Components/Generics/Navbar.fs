namespace App.Components

open Feliz
open Feliz.Bulma

module Navbar =
    [<ReactComponent>]
    let Navbar(userButtonText : string,action) =
        
        Bulma.navbarMenu [
            Bulma.navbarStart.div [
                Bulma.navbarItem.div [
                    prop.className "icon credit-card-logo"
                ]
                Bulma.navbarItem.div[
                    prop.className "logo-text"
                    prop.children [
                        Html.span[
                            prop.className "app-name"
                            prop.text "%APPNAME%"
                        ]
                        Html.span[
                            prop.className "bank"
                            prop.text "Bank"
                        ]
                    ]
                ]
            ]
            Bulma.navbarEnd.div [
                Bulma.navbarItem.div [
                    Bulma.buttons [
                        Bulma.button.a [  
                            prop.onClick (fun _ -> action() )
                            prop.style [
                                style.backgroundColor.transparent
                                style.borderStyle.none
                                style.fontSize 18
                            ]
                            prop.children [
                                Html.span [ 
                                    prop.className "navbar-item"
                                    prop.text userButtonText
                                ]
                                Html.div [
                                    "power-off-white" |> sprintf "icon %s" |> prop.className
                                ]
                            ]
                        ]
                    ]
                ]
            ]
        ]
