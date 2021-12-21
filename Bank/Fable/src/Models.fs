
module Models

type LedgerEntry =
    {
        Date : System.DateTime
        Amount : decimal
        Balance : decimal
        Text : string
    }

type Message = 
    {
        Subject : string
        Content : string
        From : string
        Date : System.DateTime
        Unread : bool
    }
type Document = 
    {
        Name : string
        Content : string
        Reference : string option
    }  
type Account = 
    {
        Name : string
        Ledger : LedgerEntry list 
    } with member x.Balance
             with get() = 
                 x.Ledger
                 |> List.sumBy(fun l -> l.Amount)
           member x.LatestMovement
             with get() = 
                match x.Ledger
                       |> List.sortByDescending(fun l -> l.Date) with
                [] -> System.DateTime.Now.Date
                | l::_ -> l.Date
                  
type User = 
   {
       Name : string
       DateOfBirth : string
       Accounts : Account list
   } 
