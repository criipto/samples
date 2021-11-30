namespace App.Components

open Feliz
open Feliz.Bulma

type private Message = Fable.JsonProvider.Generator<"../public/messages.json">  

type Components =
    
    [<ReactComponent>]
    static member IdCard(messageCount,user :Models.User) =
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
                                prop.className "is-48x48 icon profile"
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
                            messageCount |> sprintf "Der er %d nye beskeder fra banken. Se beskeder under " |> Html.span 
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
    static member MessageBox(messages : Models.Message []) = 
        
        let messages = 
            messages
            |> Array.map(fun message ->
                    Bulma.columns [
                        prop.onClick(fun _ -> printfn "read message")
                        prop.className "message"
                        prop.children [
                            Bulma.column [
                                column.is2
                                prop.text message.From
                            ]
                            Bulma.column [
                                column.is2
                                prop.text message.Subject
                            ] 
                            Bulma.column [
                                column.is6
                                message.Content.Substring(0,min message.Content.Length 100) |> prop.text 
                            ]
                            Bulma.column [
                                column.is2
                                prop.text message.Date
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
                Bulma.cardContent messages
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
    static member Messages(messages : Models.Message []) =
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
        ) |> List.ofArray
        |> Bulma.section 
        