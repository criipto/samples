namespace App.Components

open Feliz
open Feliz.Bulma

type Page =
    
    [<ReactComponent>]
    static member Overview(user : Models.User, activeView,setView) =
        
        
        let components = 
            match activeView with
            Accounts ->        
                [
                    Components.IdCard(user)
                    Components.Accounts(user.Accounts,fun name -> name |> Account |> setView)
                ]
            | Account name ->
                let account = 
                    user.Accounts
                    |> List.find(fun a -> a.Name = name)
                [
                   Components.Account(account)
                ]
            | v ->
                printfn "Switching to %A" v 
                [
                    Components.IdCard(user)
                ]

        Bulma.container components

    [<ReactComponent>]
    static member Layout() =
        let view,setView = React.useState Accounts
        let oidcUser, _ = Identity.tryReadIdToken |> React.useState
        let user, _ = 
            oidcUser |> Option.map(fun ou -> 
                {
                    Name = ou.name
                    DateOfBirth = ou.birthdate
                    Accounts = Statements.generate ou.name 200
                }  : Models.User
            ) |> React.useState

        match user with
        None -> 
            Identity.logIn()
            Html.div []
        | Some user -> 
            
            Html.div[
                Navigation.Topbar(Identity.logOut)
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
                                    Page.Overview (user,view,setView)
                                ]
                            ]
                        ]
                    ]
                ]
            ]