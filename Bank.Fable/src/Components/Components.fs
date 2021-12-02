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
                                prop.className "is-32x32 icon profile"
                            ]
                        ]
                    ]
                
                    Bulma.content [
                        Bulma.title [
                            prop.text user.Name
                        ]
                        Bulma.subtitle [
                            size.isSize6
                            user.DateOfBirth |> sprintf "Fødselsdag: %s" |> prop.text 
                        ] 
                    ]
                ]
            ]
        ]

    [<ReactComponent>]
    static member Accounts(accounts : Models.Account list, viewAccount) = 
        let header = 
            Bulma.columns [
                prop.className "account header"
                [
                    "Name"
                    "Balance"
                    "Recent transactions"
                ] |> List.map(fun name ->
                    Bulma.column [
                        column.is4
                        prop.text name
                    ]
                ) |> prop.children 
            ]
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
                Bulma.cardContent [
                    Bulma.media [
                        Bulma.mediaLeft [
                            Bulma.image [
                                prop.className "is-32x32 icon vbars"
                            ]
                        ]
                    ]
                
                    
                    (Bulma.title [
                        prop.text "Accounts"
                    ])::header::accounts
                    |> Bulma.content 
                    
                ]
            ]
        ]
    
    
    [<ReactComponent>]
    static member MessageBox(messages : Models.Message list) = 
        
        let messages = 
            messages
            |> List.map(fun message ->
                Bulma.columns [
                    prop.onClick(fun _ -> printfn "read message")
                    prop.className "message"
                    prop.children [
                        Bulma.column [
                            column.is1
                            prop.className "dot"
                            prop.children [
                                if message.Unread then yield Bulma.icon [
                                    Html.i [
                                        prop.className "fas fa-circle dot"
                                    ]
                                ]
                            ]
                        ]
                        Bulma.column [    
                            column.is11
                            prop.children[
                                Bulma.title [
                                    prop.className "message-item"
                                    message.From + " " + (message.Date.ToString("yyyy-MM-dd")) |> prop.text
                                ]
                                Bulma.subtitle [
                                    prop.className "message-item"
                                    message.Subject |> prop.text
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
                Bulma.cardContent [
                    Bulma.media [
                        Bulma.mediaLeft [
                            Bulma.image [
                                prop.className "is-32x32 icon envelope"
                            ]
                        ]
                    ]
                
                    
                    (Bulma.title [
                        prop.text "Messages"
                    ])::messages
                    |> Bulma.content 
                    
                ]
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
                Bulma.cardContent [
                    Bulma.media [
                        Bulma.mediaLeft [
                            Bulma.image [
                                prop.className "is-32x32 icon vbars"
                            ]
                        ]
                    ]
                    
                    (Bulma.title [
                        prop.text account.Name
                    ])::transactions
                    |> Bulma.content
                ]
            ]
        ]
    
    [<ReactComponent>]
    static member Messages(messages : Models.Message list) =
        messages
        |> List.map(fun message -> 
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
                            prop.text message.Subject
                        ]
                    ]
                    Bulma.cardContent [
                        Bulma.section [
                            prop.text message.Content
                        ]
                    ]
                ]
            ]
        ) |> Bulma.section 
        