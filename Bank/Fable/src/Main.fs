module Main

open Feliz
open Browser.Dom
open Fable.Core.JsInterop
open App.Components

importSideEffects "./styles/global.scss"

document.title <- "%APPNAME% Bank"

ReactDOM.render(
    Page.Layout(),
    document.getElementById "app"
)