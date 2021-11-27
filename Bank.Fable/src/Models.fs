
module Models

type LedgerEntry =
    {
        Date : System.DateTime
        Amount : decimal
        Balance : decimal
        Text : string
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
       Email : string option
       ImageUrl : string option
       Accounts : Account list
   } 
