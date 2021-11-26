module Main

open Feliz
open App
open Browser.Dom
open Fable.Core.JsInterop

importSideEffects "./styles/global.scss"

Browser.Dom.document.title <- "%NAME% Bank"

ReactDOM.render(
    Components.Layout(),
    document.getElementById "app"
)