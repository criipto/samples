namespace App.Components

open Feliz
open Feliz.Bulma

type Account = 

    [<ReactComponent>]
    static member Transactions(account : Models.Account) = 
        let header = 
            Bulma.columns [
                prop.className "account header"
                [
                    "Date"
                    "Message"
                    "Amount"
                ] |> List.map(fun name ->
                    Bulma.column [
                        prop.className name
                        column.is4
                        prop.text name
                    ]
                ) |> prop.children 
            ]
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
                    ])::header::transactions
                    |> Bulma.content
                ]
            ]
        ]

    
    [<ReactComponent>]
    static member Box(accounts : Models.Account list, viewAccount) = 
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
                        prop.onClick(fun _ -> 
                            Browser.Dom.window.location.href <- sprintf "#%s" account.Name
                            viewAccount account.Name)
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