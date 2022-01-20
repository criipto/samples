namespace App.Components

open Feliz
open Feliz.Bulma


module Table = 
    type Header = {
        ClassNames : string list option
        Text : string
    }

    type CellFormatter<'a> = 'a -> IReactProperty

    type CellOptions<'a> = {
        Formatter : CellFormatter<'a>
        ClassNames : string list option
    }

    type ColumnOptions<'a> = {
        Header : Header option
        Cell : CellOptions<'a>
    }

    type IconSize =
       Is24x24
       | Is32x32
       | Is48x48
       with override x.ToString() = 
              match x with
              Is24x24 -> "is-24x24"
              | Is32x32 -> "is-32x32"
              | Is48x48 -> "is-48x48"

    type IconOptions = {
        Name : string
        Size : IconSize
    }

    type TableOptions<'a> = {
        ColumnOptions : ColumnOptions<'a> list
        TableClass : string option
        RowClass : string option
        RowSelected : ('a -> unit) option
        Icon : IconOptions option
        Title : string option
    }
    
    let inline private classNamesFromOption defaultClass classNames = 
        match classNames with
        None -> defaultClass
        | Some cls -> 
            System.String.Join(" ", defaultClass::cls)

    [<ReactComponent>]
    let Table<'a>(options : TableOptions<'a>,data : 'a list) = 
        let header = 
            let headerRow = 
                options.ColumnOptions
                |> List.map(fun columnOption ->
                    let headerText,classNames = 
                        match columnOption.Header with
                        None -> "", None
                        | Some h -> h.Text, h.ClassNames
                    let className = 
                        classNames
                        |> classNamesFromOption "table-header-cell"
                        
                    Bulma.column [
                        prop.className className
                        prop.text headerText
                    ]
                ) |> prop.children 
            Bulma.columns [
                prop.className "table-header"
                headerRow
            ]
        let rows = 
            data
            |> List.map(fun row ->
                let cells = 
                    options.ColumnOptions
                    |> List.map(fun column -> 
                        let cellOption = column.Cell
                        let cellFormatter = cellOption.Formatter
                        let valueRepresentation = cellFormatter row
                        let classNames = cellOption.ClassNames
                        let className = 
                            classNames
                            |> classNamesFromOption "table-cell"

                        Bulma.column [
                            prop.className className
                            valueRepresentation
                        ]
                    )
                Bulma.columns [
                    yield prop.className ("table-row " + if options.RowClass.IsSome then options.RowClass.Value else "")
                    if options.RowSelected.IsSome then yield prop.onClick(fun _ -> options.RowSelected.Value row)
                    yield prop.children cells
                ]
            )
        let icon = 
            options.Icon
            |> Option.map(fun icon -> 
                Bulma.media [
                    Bulma.mediaLeft [
                        Bulma.image [
                            sprintf "%s icon %s" (icon.Size.ToString()) icon.Name |> prop.className 
                        ]
                    ]
                ]
            )
        let content = 
            [
                if options.Title.IsSome then
                    yield Bulma.title [
                        prop.text options.Title.Value
                    ]
                yield header
            ]@rows
            |> Bulma.content
        Bulma.card [
            prop.style[
                style.boxShadow.none
                style.backgroundColor.white
            ]
            prop.children [
                Bulma.cardContent [
                    if icon.IsSome then yield icon.Value
                    yield content
                    
                ]
            ]
        ]