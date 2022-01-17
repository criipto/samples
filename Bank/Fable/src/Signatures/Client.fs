namespace Signatures
open Fable.Core

module Client = 
    [<Import("DocumentInfo", from="@criipto/signatures/Client.js")>]
    type DocumentInfo = 
        {
            Title : string
            Content : string
            Reference : string option
        }

    [<Import("IClient", from="@criipto/signatures/Client.js")>]
    type IClient = 
        abstract member createSignatureOrder : string * DocumentInfo [] -> JS.Promise<int*string>
        abstract member addSignatory : string * string -> JS.Promise<int*string>
        abstract member cancelSignatureOrder : string -> JS.Promise<int*string>
    

    [<Import("Client", from="@criipto/signatures/Client.js")>]
    let Client (apiRoot, token) : IClient = jsNative