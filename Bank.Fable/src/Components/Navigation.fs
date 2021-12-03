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
                                yield Html.span [prop.className "badge is-danger"; prop.text count.Value]
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
                "lamp",Overview, None
                "arrows",Transfer, None
                "chart",Invest, None
                "wineglass",Pensions, None
                "envelope",Messages, if messageCount > 0 then Some messageCount else None
                "profile",Profile, None
                "code",DevSupport,None
            ] |> List.map(fun (viewName,view,notification) ->
                if activeView = view then
                    Bulma.panelBlock.div [
                        prop.className "is-active"
                        createMenuItem (viewName,view,notification)
                    ]
                else
                    Bulma.panelBlock.div [

                        createMenuItem (viewName,view,notification)
                    ]
            )
        Bulma.panel [
            prop.style [
                style.boxShadow.none
            ]
            prop.children menuItems
        ] 
    [<ReactComponent>]
    static member Topbar(userButtonText,action) =
        
        Bulma.navbarMenu [
            Bulma.navbarStart.div [
                Bulma.navbarItem.div [
                    prop.className "icon credit-card-logo"
                ]
                Bulma.navbarItem.div[
                    Html.span[
                        prop.className "app-name"
                        prop.text "%APPNAME%"
                    ]
                    Html.span[
                        prop.style [
                            style.marginLeft 12
                            style.fontWeight 800
                            style.fontSize 20
                        ]
                        prop.text "Bank"
                    ]
                ]
            ]
            Bulma.navbarEnd.div [
                Bulma.navbarItem.div [
                    Bulma.buttons [
                        (Some userButtonText,Some "power-off", fun _ -> action() ) |> Elements.IconButton
                    ]
                ]
            ]
        ]
