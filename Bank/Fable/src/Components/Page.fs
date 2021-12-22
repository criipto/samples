namespace App.Components

open Feliz
open Feliz.Bulma

type Page() =
    static let mutable accordions = [||]
    [<ReactComponent>]
    static member Overview(user : Models.User, activeView,setView,messages : Models.Message list, documents : Models.Document list, setMessages) =
        let components = 
            match activeView with
            Overview ->
                
                [
                    Components.IdCard(user)
                    Message.List("New messages",messages, setMessages, setView, Some 2)
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
                    Message.List("Messages",messages, setMessages,setView, None )
                ]
            | Pensions ->
                printfn "Switching to %A" Pensions
                // REWRITE TO SO THAT IT USES THE API
                // CREATE PROXY IN WEBPACK CONFIG

                // async{
                //     let doc = documents |> List.head
                //     let! order = 
                //         Criipto.Signatures.createSignatureOrder(
                //             doc.Name,
                //             doc.Reference
                //             Doc.Content
                //             Signatures.DocumentStorageMode.Temporary           
                //         )
                //     let userRef = 
                //         user.Name
                //         |> System.Text.Encoding.ASCII.GetBytes
                //         |> System.Convert.ToBase64String
                //     let signatoryAdded = 
                //         Criipto.Signatures.addSignatory(
                //             orderId,
                //             Signatures.Types.Arguments.Signatory(userRef)
                //         )
                //     let linkToDoc = signatoryAdded.Signatory.DocumentLink
                //     {
                //         Subject = "Document to be signed"
                //         Content = sprintfn "Copy this link into your browser: %s" linkToDoc
                //         From = "Your bank advisor"
                //         Date = System.DateTime.Now
                //         Unread = true
                //     }::messages |> setMessages
                // } |> Async.StartImmediate
                
                [
                    Components.IdCard(user)
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
        let messages,_setMessages = React.useState []
        let documents,_setDocuments = React.useState []
        let unreadCount,setUnread = React.useState 0
        let reduceUnreadCount() = 
            unreadCount - 1 |> setUnread
        let setMessages msgs = 
            let unreadCount = 
                msgs
                |> List.sumBy(fun (m:Models.Message) -> if m.Unread then 1 else 0)
            setUnread unreadCount
            _setMessages msgs
        Messages.fetch(setMessages)
        Documents.fetch(setDocuments)
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
            if Identity.hasRequestedAuthentication() |> not then
                Html.div[
                    Navigation.Topbar("Log on",fun _ -> Identity.logIn())
                    Components.Splash()
                ]
            else
               Identity.isAuthenticated(setUser) |> ignore
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
                                    Navigation.SidePanel (unreadCount,view,setView)
                                ]
                            ]
                            Bulma.column [
                                prop.children [
                                    Page.Overview (user,view,setView, messages,setMessages)
                                ]
                            ]
                        ]
                    ]
                ]
            ]