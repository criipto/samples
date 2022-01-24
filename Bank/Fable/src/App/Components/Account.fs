namespace App.Components

open Feliz
open Feliz.Bulma
open Criipto.React
open Criipto.React.Table

type Account = 

    static member Transactions(account : Models.Account) = 
        let columnOptions =
            [
                "Date",(fun (ledgerEntry : Models.LedgerEntry) -> prop.text (ledgerEntry.Date.ToShortDateString()))
                "Message",(fun (ledgerEntry : Models.LedgerEntry) -> prop.text ledgerEntry.Text)
                "Amount",(fun (ledgerEntry : Models.LedgerEntry) -> 
                                let formatCurrency = sprintf "%.2f"
                                prop.children [
                                    Html.div [
                                        prop.className "ledger-entry amount"
                                        ledgerEntry.Amount |> formatCurrency |> prop.text  
                                    ]
                                    Html.div [
                                        prop.className "ledger-entry balance"
                                        ledgerEntry.Balance |> formatCurrency |> prop.text  
                                    ]
                                ])
            ] |> List.map(fun (name,formatter) ->
                {
                    Header = Some {
                                    ClassNames = Some [name]
                                    Text = name
                                }
                    Cell =  {
                        Formatter = formatter
                        ClassNames = if name = "Message" then None else Some ["is-4"]
                    }
                }
            )
        Table({
            ColumnOptions = columnOptions
            TableClass = Some "account-overview"
            RowClass = Some "transaction"
            RowSelected = None
            Icon = Some {
                Size = Is32x32
                Name = "vbars"
            }
            Title = Some account.Name
        },account.Ledger)
    
    [<ReactComponent>]
    static member Box(accounts : Models.Account list, viewAccount) = 
        let columnOptions =    
            [
                "Name",(fun (account : Models.Account) -> prop.text account.Name)
                "Balance",(fun (account : Models.Account) -> 
                                if account.Balance < 0m then 
                                    prop.children [
                                        Html.span [
                                            prop.style [
                                                style.color.indianRed
                                            ]
                                            prop.text (sprintf "%.2f" account.Balance)
                                        ]
                                    ]
                                else
                                    prop.text (sprintf "%.2f" account.Balance)
                )
                "Recent transactions",(fun (account : Models.Account) -> account.LatestMovement.ToShortDateString() |> prop.text)
                ] |> List.map(fun (name,formatter) ->
                    {
                        Header = Some {
                                        ClassNames = Some [name]
                                        Text = name
                                    }
                        Cell =  {
                            Formatter = formatter
                            ClassNames = Some ["is-4"]
                        }
                    }
                )
            
        Table({
            ColumnOptions = columnOptions
            TableClass = Some "account header"
            RowClass = Some "account"
            RowSelected = viewAccount
            Icon = Some {
                Size = Is32x32
                Name = "vbars"
            }
            Title = Some "Accounts"
        },accounts)
        