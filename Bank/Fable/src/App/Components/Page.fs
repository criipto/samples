namespace App.Components

open Feliz
open Feliz.Bulma
open Signatures
open Fable.Core
open Criipto.React.SidePanelMenu
open Criipto.React.Navbar
open Criipto.React.Layout
open Criipto.React

type Page() =
    static let mutable accordions = [||]
    static let cancelSignatureOrder removeMessage userToken orderId= 
        let identifyMessage (msg : Models.Message) = 
            match msg.Type with
            Models.Signature(_,oid) when oid = orderId -> true
            | _ -> false
        
        fun () -> 
            async {
                let! res = Signatures.cancelSignatureOrder userToken orderId
                match res with
                Ok res -> 
                    removeMessage identifyMessage
                | Error e ->
                    eprintfn "Failed to cancel %s. Errors: %A" orderId e
            } |> Async.StartImmediate
    static let rnd = System.Random()
    static let createOrder (user : Models.User) (documents : Models.Document list) addMessages = 
                async{
                    let doc = documents |> List.head
                    let docName = doc.Name.Replace("%USERNAME%", user.Name)
                    let content = doc.Content.Replace("%USERNAME%", user.Name)
                    let userToken = user.Token 
                    let orderTitle = "Signature order"
                    let docs = [||] 
                    let! signatureOrderResult = 
                        async {
                            let exp = 
                                match rnd.Next(0,3) with
                                0 -> None
                                | 1 -> Some 1
                                | 2 -> Some 2
                                | _ -> Some 4
                            return! Signatures.createSignatureOrder user.Token orderTitle docs exp
                        }
                    match signatureOrderResult with
                    Ok order  -> 
                        async {
                            let userRef = 
                                user.Name
                                |> System.Text.Encoding.Unicode.GetBytes
                                |> System.Convert.ToBase64String
                            
                            let! signatoryAddedResult = 
                                Signatures.addSignatory userToken order.id userRef    
                            match signatoryAddedResult with
                            Ok signatoryAdded ->
                                let linkToDoc = signatoryAdded.signatory.documentLink
                                let msg : Models.Message = 
                                    {
                                        Id = (userRef + System.DateTime.Now.Ticks.ToString())
                                        Subject = "Document to be signed"
                                        Content = "Your loan is awaiting your signature. To read the document and sign it press the button below"
                                        From = "Your bank advisor"
                                        Date = System.DateTime.Now
                                        Unread = true
                                        Type = Models.Signature(linkToDoc,order.id)
                                    }
                                msg |> addMessages
                            | Error e -> 
                                eprintfn "Erros while adding signatory %A" e
                        } |> Async.StartImmediate
                    | Error e -> 
                        eprintfn "Error occurred while creating signature order %A" e
                } 
        
    [<ReactComponent>]
    static member PageLayout() =
        let messages,_setMessages = React.useState []
        let documents,setDocuments = React.useState []
        let currentView,setView = React.useState Overview
        let user,setUser = None|> React.useState
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
        let manager = 
            {
                new Types.IManager<Types.View,Models.User> with
                    member __.UserManager 
                            with get() = 
                                {new IUserManager<Models.User> with
                                    member __.HasRequestedAuthentication() = Identity.hasRequestedAuthentication()
                                    member __.LogIn() = Identity.logIn()
                                    member __.LogOut() = Identity.logOut()
                                    member __.Authenticate() = 
                                        let setUser (oidcUser : Oidc.UserInfo option) = 
                                            let user = 
                                                oidcUser |> Option.map(fun ou -> 
                                                    {
                                                        Name = ou.profile.name
                                                        DateOfBirth = ou.profile.birthdate
                                                        Accounts = Statements.generate ou.profile.name 200
                                                        Token = ou.id_token
                                                    }  : Models.User
                                                ) 
                                            
                                            user |> setUser
                                            
                                        Identity.isAuthenticated(setUser)
                                    member __.CurrentUser with get() = user}
                    member __.ViewManager
                            with get() = 
                                {new IViewManager<Types.View> with
                                    member __.CurrentView
                                            with get() = currentView
                                            and set newView = setView newView
                                }
            }
        let placeholderContent (v : View) = 
            Bulma.card [
                prop.style[
                    style.boxShadow.none
                    style.backgroundColor.white
                ]
                prop.children [
                    Bulma.cardContent [
                        Bulma.media [
                            Bulma.mediaLeft [
                                Bulma.image [
                                    v.IconName |> sprintf "is-32x32 icon %s" |> prop.className 
                                ]
                            ]
                        ]
                    
                        Bulma.content [
                            Bulma.title [
                                v.ToString() |> prop.text
                            ]
                        ]
                    ]
                ]
            ]
        let setView view = manager.ViewManager.CurrentView <- view
        let removeMessage (predicate : Models.Message -> bool) =
            messages
            |> List.filter(predicate >> not)
            |> (fun _ -> failwith "How to handle set messages")

        let views = 
            match user with
            None -> List.empty
            | Some user ->  
                let accountViews =
                    user.Accounts
                    |> List.map(fun account ->
                        View.Account account.Name,
                            Bulma.container [
                                Account.Transactions(account)
                            ]
                    )
                let cancelSignatureOrder = cancelSignatureOrder removeMessage user.Token
                let showAccount (account : Models.Account) = 
                    manager.ViewManager.CurrentView <- account.Name |> View.Account
                [
                    Overview,Bulma.container [
                            Components.IdCard(user)
                            Message.List("New messages",messages, setMessages, setView, Some 2, cancelSignatureOrder)
                            Account.Box(user.Accounts,Some showAccount)
                        ]
                    Accounts, Bulma.container [
                            Account.Box(user.Accounts,Some showAccount)
                        ]
                    Messages, Bulma.container [
                            Message.List("Messages",messages, setMessages,setView, None, cancelSignatureOrder)
                        ]
                    Pensions, Bulma.container [
                            placeholderContent Pensions
                            Bulma.button.button [
                                prop.text "Apply"
                                prop.onClick(fun _ -> 
                                    createOrder user documents (fun msg -> msg::messages |> setMessages)
                                    |> Async.StartImmediate
                                )
                            ]
                    ]
                    Profile, Bulma.container [Components.IdCard(user)]
                ]@accountViews
                |> List.map(fun (view,render) ->
                    (Some view), fun _ -> render
                ) 
        let views =  (None, placeholderContent)::views 
        let menuItems = 
            [
                Overview, None
                Accounts,None
                Transfer, None
                Invest, None
                Pensions, None
                Messages, if unreadCount > 0 then Some unreadCount else None
                Profile, None
                DevSupport,None
            ] |> List.map(fun (view,notification) ->
                 {
                    Data = view
                    Notification = notification
                    IconName = Some view.IconName
                }        
            )
       
        let options =
            {
                MenuItems = menuItems
                View = ViewPicker<View,Models.User> views manager
                Manager = manager
            }
        match user with
        None ->
            Bulma.container [
                Navbar("Log in",manager.UserManager.LogIn)
                Components.Splash()
            ]
        | Some _ ->
            Layout options
