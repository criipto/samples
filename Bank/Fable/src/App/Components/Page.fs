namespace App.Components

open Feliz
open Feliz.Bulma
open Signatures
open Fable.Core
open App.Components.SidePanelMenu
open App.Components.Navbar
open App.Components.Layout

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
    static let createOrder (user : Models.User) (documents : Models.Document list) addMessages = 
                async{
                    
                    let doc = documents |> List.head
                    let docName = doc.Name.Replace("%USERNAME%", user.Name)
                    let content = doc.Content.Replace("%USERNAME%", user.Name)
                    let userToken = user.Token 
                    let orderTitle = "Signature order"
                    let docs = [||] 
                    let! signatureOrderResult = 
                        let client = Client.Client("https://demo-app-signature-api.azurewebsites.net/api/",userToken)
                        promise {
                            let! res = client.createSignatureOrder(orderTitle,docs)
                            return res |> Signatures.parse Signatures.SignatureOrderResponse
                        } |> Async.AwaitPromise
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
    
    static let viewRenderer (messages : Models.Message list) (documents : Models.Document list) setMessages =
        
        let removeMessage predicate =
            messages
            |> List.filter(predicate >> not)
            |> setMessages

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
        
        
        fun (user : Models.User) activeView  (setView : View option -> unit) ->
            let cancelSignatureOrder = cancelSignatureOrder removeMessage user.Token
            let showAccount (account : Models.Account) = account.Name |> View.Account |> Some |> setView
            match activeView with
            None -> 
                Overview |> Some |> setView
                Bulma.container []
            | Some v -> 
                let components = 
                    match v with
                    Overview ->
                        [
                            Components.IdCard(user)
                            Message.List("New messages",messages, setMessages, Some >> setView, Some 2, cancelSignatureOrder)
                            Account.Box(user.Accounts,Some showAccount)
                        ]
                    | Accounts ->
                        [
                            Account.Box(user.Accounts,Some showAccount)
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
                            Message.List("Messages",messages, setMessages,Some >> setView, None, cancelSignatureOrder)
                        ]
                    | Pensions ->
                        
                        [
                            placeholderContent Pensions
                            Bulma.button.button [
                                prop.text "Apply"
                                prop.onClick(fun _ -> 
                                    createOrder user documents (fun msg -> msg::messages |> setMessages)
                                    |> Async.StartImmediate
                                )
                            ]
                        ]
                    | Profile -> [Components.IdCard(user)]
                    | v -> [placeholderContent v]
                Bulma.container components
        
        
    [<ReactComponent>]
    static member PageLayout() =
        let messages,_setMessages = React.useState []
        let documents,setDocuments = React.useState []
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
                    IsActive = view = Overview
                    Notification = notification
                    IconName = Some view.IconName
                }        
            )
        let options = 
            {
                MenuItems = menuItems
                ViewRenderer = viewRenderer messages documents setMessages
                SplashRenderer = Components.Splash
                UserManager = {
                    new IUserManager<Models.User> with
                        member __.HasRequestedAuthentication() = Identity.hasRequestedAuthentication()
                        member __.LogIn() = Identity.logIn()
                        member __.LogOut() = Identity.logOut()
                        member __.IsAuthenticated(_setUser) = 
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
                                user |> _setUser
                                
                            Identity.isAuthenticated(setUser)
                }
            }
        Layout options
