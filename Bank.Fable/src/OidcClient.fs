module Oidc

open Fable.Core

type StorageOptions = 
   {
     store : string
   }

[<Import("WebStorageStateStore", from="oidc-client")>]
type WebStorageStateStore(opts: StorageOptions) = 
    class end

type Options =
    {
      authority               : string
      client_id               : string
      redirect_uri            : string
      responseType            : string
      post_logout_redirect_uri: string
      acr_values              : string
    }

[<Import("UserManager", from="oidc-client")>]
type UserManager (opts : Options) =
    member __.signinRedirect() = jsNative 
    member __.signoutRedirect() = jsNative 
    
