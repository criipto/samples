namespace App.Components

open Feliz
open Feliz.Bulma

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