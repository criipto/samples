namespace App.Components

open Feliz
open Feliz.Bulma


type Page =
    
    [<ReactComponent>]
    static member Overview(activeView,setView) =
        let accounts,_ = React.useState(Statements.generate "user" 200)
        
        let components = 
            match activeView with
            Accounts ->        
                [
                    Components.IdCard()
                    Components.Accounts(accounts,fun name -> name |> Account |> setView)
                ]
            | Account name ->
               [
                   accounts
                   |> List.find (fun a -> a.Name = name)
                   |> Components.Account
               ]
            | v ->
                printfn "Switching to %A" v 
                [
                    Components.IdCard()
                ]

        Bulma.container components

    [<ReactComponent>]
    static member Layout() =
        let view,setView = React.useState Accounts
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
                                Navigation.SidePanel (view,setView)
                            ]
                        ]
                        Bulma.column [
                            prop.children [
                                Page.Overview (view,setView)
                            ]
                        ]
                    ]
                ]
            ]
        ]