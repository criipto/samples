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
                        createMenuItem tabName
                    ]
                else
                    Bulma.panelBlock.div [
                        createMenuItem tabName
                    ]
            )
        
        
        Bulma.panelHeading [ prop.text "Konti" ]
        ::menuItems
        |> Bulma.panel