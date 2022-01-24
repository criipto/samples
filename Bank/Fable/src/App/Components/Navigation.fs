namespace App.Components

open Feliz
open Feliz.Bulma
open Criipto.React.SidePanelMenu
open Criipto.React

type Navigation =
    [<ReactComponent>]
    static member SidePanel(messageCount : int,manager) = 
        
        let menuItems = 
            [
                Overview, None
                Accounts,None
                Transfer, None
                Invest, None
                Pensions, None
                Messages, if messageCount > 0 then Some messageCount else None
                Profile, None
                DevSupport,None
            ] |> List.map(fun (view,notification) ->
                 {
                    Data = view
                    Notification = notification
                    IconName = Some view.IconName
                 } : SidePanelMenu.MenuItemOptions<Types.View>   
            )
        
        SidePanelMenu({
            MenuItems = menuItems
            Manager = manager
        })