namespace App.Components

open Feliz
open Feliz.Bulma

type Components =
    
    [<ReactComponent>]
    static member IdCard() =
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
                            prop.text "John Smith"
                        ]
                        Bulma.subtitle [
                            size.isSize6
                            prop.text "Fødselsdag: 06-11-1975"
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