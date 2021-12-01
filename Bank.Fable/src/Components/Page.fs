namespace App.Components

open Feliz
open Feliz.Bulma

type Page =
    
    [<ReactComponent>]
    static member Overview(user : Models.User, activeView,setView,messages : Models.Message list) =
        let components = 
            match activeView with
            Accounts ->        
                [
                    Components.IdCard(user)
                    Components.MessageBox(messages)
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
                    Components.Messages(messages)
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
        let messages,setMessages = React.useState []
        async {
            let! (statusCode,messagesRaw) = Fable.SimpleHttp.Http.get "/messages.json"
            if statusCode = 200 then
                Message(messagesRaw).messages
                |> Array.map(fun m ->
                    {
                        Subject = m.title
                        Content = m.content
                        From = m.from
                        Date = System.DateTime.Parse(m.date,System.Globalization.CultureInfo.InvariantCulture)
                        Unread = true
                    } : Models.Message
                ) |> Array.sortByDescending(fun m ->
                    (if m.Unread then 1 else 0),m.Date
                ) |> List.ofArray
                |> setMessages
            else
               eprintfn "Failed to retrieve messages %d %s" statusCode messagesRaw
        } |> Async.StartImmediate
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