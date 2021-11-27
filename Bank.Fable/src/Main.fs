module Main

open Feliz
open App
open Browser.Dom
open Fable.Core.JsInterop
open App.Components

importSideEffects "./styles/global.scss"

Browser.Dom.document.title <- "%NAME% Bank"

ReactDOM.render(
    Page.Layout(),
    document.getElementById "app"
)