namespace App.Components

open Feliz
open Feliz.Bulma

type Navigation =
    [<ReactComponent>]
    static member SidePanel(messageCount : int,activeView,setView) = 
        

        let createMenuItem (iconName : string,view : View,count : int option) = 
            prop.children [
                Bulma.panelIcon [
                    yield Html.div [ 
                        iconName |> sprintf "icon %s" |> prop.className
                        prop.children [
                            if count.IsSome then 
                                yield Html.span [prop.className "badge"; prop.text count.Value]
                        ]
                    ]
                ]
                Html.span [
                    prop.onClick(fun _ -> setView view)
                    prop.text (view.ToString())
                ]
            ]
        let menuItems = 
            [
                "vbars",Accounts, None
                "arrows",Transfer, None
                "chart",Invest, None
                "wineglass",Pensions, None
                "envelope",Messages, Some messageCount
            ] |> List.map(fun (viewName,view,notification) ->
                if activeView = view then
                    Bulma.panelBlock.div [
                        prop.className "is-active"
                        createMenuItem (viewName,view,notification)
                    ]
                else
                    Bulma.panelBlock.div [
                        prop.style [
                            style.borderStyle.none
                        ]
                        createMenuItem (viewName,view,notification)
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
    static member Topbar(userButtonText,action) =
        
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
                        (None,Some "cog",ignore) |> Elements.IconButton
                        (None,None,ignore) |> Elements.IconButton
                        (Some userButtonText,Some "power-off", fun _ -> action() ) |> Elements.IconButton
                        (None,None,ignore) |> Elements.IconButton
                    ]
                ]
            ]
        ]
