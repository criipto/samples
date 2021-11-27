namespace App.Components

open Feliz
open Feliz.Bulma


type Page =
    
    [<ReactComponent>]
    static member Overview(onViewChanged) =
        let accounts,_ = React.useState(Statements.generate "user" 200)
        let view = React.useState Accounts |> onViewChanged
        let components = 
            match view with
            Accounts ->        
                [
                    Components.IdCard()
                    Components.Accounts(accounts,fun _ -> ())
                ]
            | Account name ->
               []
            | v ->
                printfn "Switching to %A" v 
                [
                    Components.IdCard()
                ]

        Bulma.container components

    [<ReactComponent>]
    static member Layout() =
        let mutable updater = fun _ -> eprintfn "No updater specified" 
        let rec updateView (view,updatr) =
            updater <- updatr
            view
        let viewChanged view = 
            updater view
        Html.div[
            Navigation.Topbar()
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
                                Navigation.SidePanel viewChanged
                            ]
                        ]
                        Bulma.column [
                            prop.children [
                                Page.Overview updateView
                            ]
                        ]
                    ]
                ]
            ]
        ]