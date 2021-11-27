namespace App.Components

open Feliz
open Feliz.Bulma

type Navigation =
    [<ReactComponent>]
    static member SidePanel(activeView,setView) = 
        

        let createMenuItem (iconName : string,view : View) = 
            prop.children [
                Bulma.panelIcon [
                    Html.div [ iconName |> sprintf "icon %s" |> prop.className ]
                ]
                Html.span [
                    prop.onClick(fun _ -> setView view)
                    prop.text (view.ToString())
                ]
            ]
        let menuItems = 
            [
                "vbars",Accounts
                "arrows",Transfer
                "chart",Invest
                "wineglass",Pensions
                "envelope",Messages
            ] |> List.map(fun tab ->
                if activeView = snd tab then
                    Bulma.panelBlock.div [
                        prop.className "is-active"
                        createMenuItem tab
                    ]
                else
                    Bulma.panelBlock.div [
                        prop.style [
                            style.borderStyle.none
                        ]
                        createMenuItem tab
                    ]
            )
        Bulma.panel [
            prop.style [
                style.borderStyle.none
                style.boxShadow.none
            ]
            (Bulma.panelHeading [ 
                    Html.div [ 
                        Html.div [ prop.className "icon lamp" ]
                        Html.span "Overblik" 
                    ]
                ]
                ::menuItems
                |> prop.children)
        ] 
    [<ReactComponent>]
    static member Topbar() =
        Bulma.navbarMenu [
            Bulma.navbarStart.div [
                Bulma.navbarItem.div [
                    prop.className "logo"
                ]
                Bulma.navbarItem.div[
                    prop.text "%NAME% Bank"
                ]
            ]
            Bulma.navbarEnd.div [
                Bulma.navbarItem.div [
                    Bulma.buttons [
                        (None,Some "cog") |> Elements.IconButton
                        (None,None) |> Elements.IconButton
                        (Some "Log af",Some "power-off") |> Elements.IconButton
                        (None,None) |> Elements.IconButton
                    ]
                ]
            ]
        ]
