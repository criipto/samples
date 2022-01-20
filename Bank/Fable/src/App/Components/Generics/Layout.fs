namespace App.Components

open Feliz
open Feliz.Bulma
open Fable.Core
open App.Components.SidePanelMenu
open App.Components.Navbar

module Layout = 
    type IUserManager<'user> = 
        abstract member HasRequestedAuthentication : unit -> bool
        abstract member LogIn : unit -> unit
        abstract member LogOut : unit -> unit
        abstract member IsAuthenticated : ('user option -> unit) -> unit
    
    type LayoutOptions<'view,'user> = {
        MenuItems : MenuItemOptions<'view> list
        ViewRenderer : 'user -> 'view option ->  ('view option -> unit) -> ReactElement
        SplashRenderer : unit -> ReactElement
        UserManager : IUserManager<'user>
    }
    
    [<ReactComponent>]
    let Layout<'view,'user when 'view: equality>(options : LayoutOptions<'view,'user>) =
        let menuItems, setMenuItems = React.useState options.MenuItems
        let view = 
            match menuItems with
            [] -> None
            | _ -> 
                menuItems
                |> List.tryFind(fun mi -> mi.IsActive)
                |> Option.map(fun mi -> mi.Data)
        let setView (view : _ option) = 
            menuItems
            |> List.map(fun mi ->
                {
                    mi with 
                       IsActive = 
                           view.IsSome && mi.Data = view.Value
                }
            ) |> setMenuItems
        let (user : 'user option),setUser = React.useState None
        
        match user with
        None -> 
            if options.UserManager.HasRequestedAuthentication() |> not then
                Html.div[
                    Navbar("Log on",fun _ -> options.UserManager.LogIn())
                    options.SplashRenderer()
                ]
            else
               options.UserManager.IsAuthenticated(setUser) 
               Html.div[]
        | Some user -> 
            Html.div[
                Navbar("Log off",options.UserManager.LogOut)
                Bulma.container [
                    Bulma.columns [
                        prop.style [
                            style.marginTop 40
                        ]
                        columns.isCentered
                        prop.children[
                            Bulma.column [
                                prop.style[
                                    style.boxShadow.none
                                ]
                                column.isOneQuarter
                                column.isOneFifthFullHd
                                prop.children[
                                    SidePanelMenu({
                                        MenuItems = menuItems
                                        MenuClicked = Some >> setView
                                    })
                                ]
                            ]
                            Bulma.column [
                                prop.children [
                                    options.ViewRenderer user view setView
                                ]
                            ]
                        ]
                    ]
                ]
            ]
