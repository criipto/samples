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
    
    [<ReactComponent>]
    static member Splash() = 
        let images = 
            [
                "apartment","Housing"
                "car","Cars"
                "chart","Investment"
                "wineglass", "Pension"
                "hand-holding-medical","Insurance"
                "credit-card","Cards"
                "coins","Loans"
                "cardboard-box","More products"
            ]
        let imageTile (imageName,(subtitle : string)) = 
            Bulma.tile[
                prop.className "is-child"
                prop.children [
                    Html.div [ 
                        imageName |> sprintf "menu-icon icon %s" |> prop.className
                    ]
                    Html.div [
                        prop.className "menu-name"
                        prop.text subtitle
                    ]
                ]
            ]

        let splashItems =
            [
                "signature","Easy digital signing of sensitive documents","Criipto provides %APPNAME% Bank’s secure and user-friendly signing solution so you can sign securely - on your computer and on the go."
                "power-off","Easy login to %APPNAME% Bank","%APPNAME% Bank is using Criipto's easy and secure login solution. It saves us a lot of money that we can spend on better service for you!"
                "mitid","MitID has arrived - We have you covered","Don’t worry. We have your back. With Criipto’s easy e-ID login solution we provide MitID and NemID login side-by-side."
            ]

        let splashItem (icon: string,title: string,content: string) = 
            Bulma.tile[
                prop.className "is-child box splash-item"
                prop.children [
                    Html.div [ 
                        icon |> sprintf "icon %s is-40h splash-item" |> prop.className 
                    ]
                    Bulma.title [
                        prop.className "splash-item"
                        prop.text title
                    ]
                    Bulma.content [
                        prop.className "splash-item"
                        prop.text content
                    ]
                ]
            ]
        Bulma.columns [
            Bulma.column [
                column.is2
            ]
            Bulma.column [
                column.is8
                prop.children [
                    Bulma.tile [
                        prop.className "is-ancestor splash-menu"
                        prop.children [
                            Bulma.tile [
                                prop.className "is-parent"
                                images
                                |> List.map imageTile
                                |> prop.children
                            ]
                        ]
                    ]
                    Bulma.tile [
                        prop.className "is-ancestor"
                        prop.children [
                            Bulma.tile [
                                prop.className "is-parent"
                                prop.children [
                                    Bulma.tile[
                                        prop.className "is-child box banner"
                                        prop.children [
                                            Html.div[
                                                prop.className "banner overlay"
                                            ]
                                            Html.div [
                                                prop.className "banner-content"
                                                prop.children [
                                                    Bulma.subtitle [
                                                        prop.className "banner"
                                                        prop.text "BUSINESS TO BUSINESS"
                                                    ]
                                                    Bulma.title [
                                                        prop.className "banner"
                                                        prop.text "“We save 120 dev hours a year with Criipto’s e-ID login”"
                                                    ]
                                                ]
                                            ]
                                        ]

                                    ]
                                ]
                            ]
                        ]
                    ]

                    Bulma.tile [
                        prop.className "is-ancestor"
                        prop.children [
                            Bulma.tile [
                                prop.className "is-parent"
                                splashItems
                                |> List.map splashItem
                                |> prop.children 
                            ]
                        ]
                    ]
                    Bulma.tile [
                        prop.className "is-ancestor"
                        prop.children [
                            Bulma.tile [
                                prop.className "is-parent"
                                prop.children [
                                    Bulma.tile[
                                        prop.className "is-child call-to-action"
                                        prop.children [
                                            Bulma.button.button [
                                                prop.className "call-to-action"
                                                prop.text "Become a customer in %APPNAME% Bank"
                                            ]
                                        ]
                                    ]
                                ]
                            ]
                        ]
                    ]
                ]
            ]
            Bulma.column [
                column.is2
            ]
        ]