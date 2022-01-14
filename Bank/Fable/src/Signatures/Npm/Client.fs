namespace Signatures

module Client =    
    open Fable.Core
    //Fable preserves names of record members
    type IClient = {
        createSignatureOrder : string * Types.DocumentInfo [] -> JS.Promise<int*string>
        addSignatory : string * string -> JS.Promise<int*string>
        cancelSignatureOrder : string -> JS.Promise<int*string>
    }

    //Expose a function with a propper name to be consumed from JS
    let Client(apiRoot,token) = 
        let client = Implementation.Client(apiRoot,token)
        {
            createSignatureOrder = client.CreateSignatureOrder
            addSignatory = client.AddSignatory
            cancelSignatureOrder = client.CancelSignatureOrder
        }