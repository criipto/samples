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
            | Messages ->
                [
                    Components.Messages()
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
        let user, _setUser = React.useState None
        let setUser (oidcUser : Oidc.UserInfo option) = 
            let user = 
                oidcUser |> Option.map(fun ou -> 
                    {
                        Name = ou.profile.name
                        DateOfBirth = ou.profile.birthdate
                        Accounts = Statements.generate ou.profile.name 200
                    }  : Models.User
                ) 
            match user with
            Some _ -> user |> _setUser
            | None -> ()
        match user with
        None -> 
            if Identity.isAuthenticated |> not then
                Html.div[
                    Navigation.Topbar("Log på",fun _ -> Identity.logIn())
                ]
            else
               Identity.registerLogin(setUser) |> ignore
               Html.div[]
        | Some user -> 
            Html.div[
                Navigation.Topbar("Log af",Identity.logOut)
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