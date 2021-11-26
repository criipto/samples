namespace App

open Feliz
open Feliz.Router
open Feliz.Bulma

type Components =
    [<ReactComponent>]
    static member MenuPanel() = 
        let activeTab, setActiveTab = React.useState("Konti") 
        let createMenuItem (name : string) = 
            prop.children [
                Bulma.panelIcon [
                    Html.i [ prop.className "fas fa-book" ]
                ]
                Html.span name
            ]
        let menuItems = 
            [
                "Konti"
                "Betal og Overføre"
                "Investeringer"
                "Pension og Forsikringer"
                "Beskeder"
            ] |> List.map(fun tabName ->
                if activeTab = tabName then
                    Bulma.panelBlock.div [
                        prop.className "is-active"
                        prop.style [
                            style.borderBottomStyle borderStyle.solid
                        ]
                        createMenuItem tabName
                    ]
                else
                    Bulma.panelBlock.div [
                        prop.style [
                            style.borderStyle.none
                        ]
                        createMenuItem tabName
                    ]
            )
        Bulma.panel [
            prop.style [
                style.borderStyle.none
                style.boxShadow.none
            ]
            (Bulma.panelHeading [ prop.text "Overblik" ]
                ::menuItems
                |> prop.children)
        ]  
    [<ReactComponent>]
    static member IdCard() =
        Bulma.card [
            prop.style[
                style.boxShadow.none
            ]
            prop.children [
                Bulma.cardContent [
                    Bulma.media [
                        Bulma.mediaLeft [
                            Bulma.image [
                                prop.className "is-48x48"
                                prop.children[
                                    Html.img [
                                        prop.src "https://bulma.io/images/placeholders/96x96.png" 
                                        prop.alt "Placeholder image"
                                    ]
                                ]
                            ]
                        ]
                    ]
                
                    Bulma.mediaContent [
                        Bulma.title [
                            prop.text "John Smith"
                        ]
                        Bulma.subtitle [
                            size.isSize6
                            prop.text "Fødselsdag: 06-11-1975"
                        ] 
                    ]
                
                    Html.hr []
                    Bulma.content[
                        Html.div [
                            Html.span "Der er ikke nogle nye beskeder fra banken. Se gamle beskeder under "
                            Html.a [
                                prop.text "beskeder"
                                prop.href "/messages"
                            ]
                        ]
                        Html.div [
                            Bulma.helpers.isPulledRight
                            prop.children[
                                Html.span [
                                    size.isSize7
                                    prop.text "25-11-2021"
                                ]
                            ]
                        ]
                    ]

                ]
            ]
        ]
    [<ReactComponent>]
    static member Overview() =
        Bulma.container[
            Components.IdCard()
        ]
    [<ReactComponent>]
    static member Navbar() =
        Bulma.navbarMenu [
            Bulma.navbarStart.div [
                Bulma.navbarItem.a [ prop.text "Home" ]
                Bulma.navbarItem.a [ prop.text "Documentation" ]
                Bulma.navbarItem.div [
                    Bulma.navbarItem.hasDropdown
                    Bulma.navbarItem.isHoverable
                    prop.children [
                        Bulma.navbarLink.a [ prop.text "More" ]
                        Bulma.navbarDropdown.div [
                            Bulma.navbarDivider []
                            
                        ]
                    ]
                ]
            ]
            Bulma.navbarEnd.div [
                Bulma.navbarItem.div [
                    Bulma.buttons [
                        Bulma.button.a [
                            Bulma.color.isPrimary
                            prop.children [
                                Html.strong "Sign up"
                            ]
                        ]
                        Bulma.button.a [  
                            prop.style [
                                style.backgroundColor.transparent
                                style.borderStyle.none
                            ]
                            prop.children[
                                Bulma.icon [
                                    Html.i [
                                        prop.className "fa-light fa-power-off"
                                    ]
                                ]
                            ]
                        ]
                    ]
                ]
            ]
        ]

    [<ReactComponent>]
    static member Layout() =
        Html.div[
            Components.Navbar()
            Bulma.container [
                Bulma.columns[
                    prop.style [
                        style.marginTop 40
                    ]
                    columns.isCentered
                    prop.children[
                        Bulma.column [
                            prop.style[
                                style.boxShadow.none
                            ]
                            column.isOneQuarter
                            prop.children[
                                Components.MenuPanel()
                            ]
                        ]
                        Bulma.column [
                            prop.children [
                                Components.Overview()
                            ]
                        ]
                    ]
                ]
            ]
        ]