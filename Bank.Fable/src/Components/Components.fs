namespace App.Components

open Feliz
open Feliz.Bulma

type private Message = Fable.JsonProvider.Generator<"../public/messages.json">  

type Components =
    
    [<ReactComponent>]
    static member IdCard(user :Models.User) =
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
                                prop.className "is-48x48"
                                prop.children[
                                    Html.img [
                                        prop.src "https://bulma.io/images/placeholders/96x96.png" 
                                        prop.alt "Placeholder image"
                                    ]
                                ]
                            ]
                        ]
                    ]
                
                    Bulma.mediaContent [
                        Bulma.title [
                            prop.text user.Name
                        ]
                        Bulma.subtitle [
                            size.isSize6
                            user.DateOfBirth |> sprintf "Fødselsdag: %s" |> prop.text 
                        ] 
                    ]
                
                    Html.hr []
                    Bulma.content[
                        Html.div [
                            Html.span "Der er ikke nogle nye beskeder fra banken. Se gamle beskeder under "
                            Html.a [
                                prop.text "beskeder"
                                prop.href "/messages"
                            ]
                        ]
                        Html.div [
                            Bulma.helpers.isPulledRight
                            prop.children[
                                Html.span [
                                    size.isSize7
                                    prop.text "25-11-2021"
                                ]
                            ]
                        ]
                    ]

                ]
            ]
        ]
    [<ReactComponent>]
    static member Accounts(accounts : Models.Account list, viewAccount) = 
        
        let accounts = 
            accounts
            |> List.map(fun account ->
                    Bulma.columns [
                        prop.onClick(fun _ -> viewAccount account.Name)
                        prop.className "account"
                        prop.children [
                            Bulma.column [
                                column.is4
                                prop.text account.Name
                            ] 
                            Bulma.column [
                                yield column.is4
                                if account.Balance < 0m then 
                                    yield prop.style [
                                        style.color.indianRed
                                    ]
                                yield prop.text (sprintf "%.2f" account.Balance)
                            ]
                            Bulma.column [
                                column.is4
                                prop.text (account.LatestMovement.ToShortDateString())
                            ]
                        ]
                    ]
            )
        Bulma.card [
            prop.style[
                style.boxShadow.none
                style.backgroundColor.white
            ]
            prop.children [
                Bulma.cardContent accounts
            ]
        ]
    
    [<ReactComponent>]
    static member Account(account : Models.Account) = 
        let transactions = 
            account.Ledger
            |> List.map(fun ledgerEntry ->
                    let formatCurrency = sprintf "%.2f"
                    Bulma.columns [
                        prop.className "transaction"
                        prop.children [
                            Bulma.column [
                                column.is4
                                prop.text (ledgerEntry.Date.ToShortDateString())
                            ] 
                            Bulma.column [
                                prop.text ledgerEntry.Text
                            ]
                            Bulma.column [
                                column.is4
                                prop.children [
                                    Html.div [
                                        prop.className "ledger-entry amount"
                                        ledgerEntry.Amount |> formatCurrency |> prop.text  
                                    ]
                                    Html.div [
                                        prop.className "ledger-entry balance"
                                        ledgerEntry.Balance |> formatCurrency |> prop.text  
                                    ]
                                ]
                            ]
                        ]
                    ]
            )
        Bulma.card [
            prop.style[
                style.boxShadow.none
                style.backgroundColor.white
            ]
            prop.children [
                Bulma.cardHeader [
                    Bulma.icon [
                        "icon-large icon vbars" |> prop.className 
                    ]
                    Html.span [
                        prop.className "account-heading"
                        prop.text account.Name
                    ]
                ]
                Bulma.cardContent transactions
            ]
        ]
    
    [<ReactComponent>]
    static member Messages() =
        let messages,setMessages = React.useState [||]
        async {
            let! (statusCode,messagesRaw) = Fable.SimpleHttp.Http.get "/messages.json"
            if statusCode = 200 then
                Message(messagesRaw).messages
                |> setMessages
            else
               eprintfn "Failed to retrieve messages %d %s" statusCode messagesRaw
        } |> Async.StartImmediate
        messages
        |> Array.map(fun message -> 
            Bulma.card [
            prop.style[
                style.boxShadow.none
                style.borderRadius 10
                style.backgroundColor.white
            ]
            prop.children [
                Bulma.cardHeader [
                    Bulma.icon [
                        "icon envelope" |> prop.className 
                    ]
                    Bulma.tile [
                        prop.className "message-heading"
                        prop.text message.title
                    ]
                ]
                Bulma.cardContent [
                    Bulma.section [
                        prop.text message.content
                    ]
                ]
            ]
        ]
        ) |> List.ofArray
        |> Bulma.section 
        