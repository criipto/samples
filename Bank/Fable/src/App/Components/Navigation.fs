namespace App.Components

open Feliz
open Feliz.Bulma

type Navigation =
    [<ReactComponent>]
    static member SidePanel(messageCount : int,activeView,setView) = 
        
        let createMenuItem (view : View) (count : int option) = 
            prop.children [
                Bulma.panelIcon [
                    yield Html.div [ 
                        view.IconName |> sprintf "icon %s" |> prop.className
                        prop.children [
                            if count.IsSome then 
                                yield Html.span [prop.className "badge is-danger"; prop.text count.Value]
                        ]
                    ]
                ]
                Html.span [
                    prop.text (view.ToString())
                ]
            ]

        let menuItems = 
            [
                Overview, None
                Accounts,None
                Transfer, None
                Invest, None
                Pensions, None
                Messages, if messageCount > 0 then Some messageCount else None
                Profile, None
                DevSupport,None
            ] |> List.collect(fun (view,notification) ->
                
                let className =
                    if activeView = view then
                        "is-active menu-item"
                    else
                        "menu-item"
                Bulma.panelBlock.div [
                    prop.className className
                    prop.onClick(fun _ -> setView view)
                    createMenuItem view notification
                ]::[Html.br []]
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
                        (Some userButtonText,Some "power-off-white", fun _ -> action() ) |> Elements.IconButton
                    ]
                ]
            ]
        ]
