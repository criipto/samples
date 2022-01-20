namespace App.Components

open Feliz
open Feliz.Bulma

module SidePanelMenu =
    type MenuItemOptions<'a> = 
        {
          Data : 'a
          IsActive : bool
          Notification : int option
          IconName : string option
        }
    type SidePanelMenuOptions<'menuItem> = 
        {
            MenuItems : MenuItemOptions<'menuItem> list
            MenuClicked : 'menuItem -> unit
        }
    [<ReactComponent>]
    let SidePanelMenu<'menuItem>(options : SidePanelMenuOptions<'menuItem>) = 
        
        let createMenuItem (item : MenuItemOptions<_>) = 
            prop.children [
                Bulma.panelIcon [
                    Html.div [ 
                        match item.IconName with
                           None -> ()
                           | Some iconName -> yield iconName |> sprintf "icon %s" |> prop.className
                        match item.Notification with
                            None -> ()
                            | Some count ->
                                yield prop.children [
                                    Html.span [prop.className "badge is-danger"; prop.text count]
                                ]
                    ]
                ]
                Html.span [
                    prop.text (item.Data |> string)
                ]
            ]

        let menuItems = 
            options.MenuItems
            |> List.collect(fun menuItem ->
                let className =
                    if menuItem.IsActive then
                        "is-active menu-item"
                    else
                        "menu-item"
                Bulma.panelBlock.div [
                    prop.className className
                    prop.onClick(fun _ -> options.MenuClicked menuItem.Data)
                    createMenuItem menuItem
                ]::[Html.br []]
            )
        Bulma.panel [
            prop.style [
                style.boxShadow.none
            ]
            prop.children menuItems
        ] 
