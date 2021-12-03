namespace App.Components

open Feliz
open Feliz.Bulma

type Page() =
    static let mutable accordions = [||]
    [<ReactComponent>]
    static member Overview(user : Models.User, activeView,setView,messages : Models.Message list) =
        let components = 
            match activeView with
            Overview ->        
                [
                    Components.IdCard(user)
                    Message.Box(messages)
                    Account.Box(user.Accounts,fun name -> name |> View.Account |> setView)
                ]
            | View.Account name ->
                let account = 
                    user.Accounts
                    |> List.find(fun a -> a.Name = name)
                [
                   Account.Transactions(account)
                ]
            | Messages ->
                [
                    Message.List(messages)
                ]
            | v ->
                printfn "Switching to %A" v 
                [
                    Components.IdCard(user)
                ]
        
        Bulma.container components
        
    [<ReactComponent>]
    static member Layout() =
        let view,setView = React.useState Overview
        let user, _setUser = React.useState None
        let messages,setMessages = React.useState []
        Messages.fetch(setMessages)
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
                    Navigation.Topbar("Log on",fun _ -> Identity.logIn())
                ]
            else
               Identity.registerLogin(setUser) |> ignore
               Html.div[]
        | Some user -> 
            Html.div[
                Navigation.Topbar("Log off",Identity.logOut)
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
                                column.isOneFifthFullHd
                                prop.children[
                                    Navigation.SidePanel (messages.Length,view,setView)
                                ]
                            ]
                            Bulma.column [
                                prop.children [
                                    Page.Overview (user,view,setView, messages)
                                ]
                            ]
                        ]
                    ]
                ]
            ]