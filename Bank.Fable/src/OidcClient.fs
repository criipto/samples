module Oidc

open Fable.Core

type UserProfile = 
    {
        identityscheme : string
        authenticationtype : string
        authenticationmethod : string
        authenticationinstant : string
        nameidentifier : string
        sub : string
        sessionindex : string
        loA : string
        ial : string
        aal : string
        fal : string
        uuid : string
        cprNumberIdentifier : string
        birthdate : string
        dateofbirth: string
        age : int
        name : string
        country : string
    }

type UserInfo = 
    {
      code : string
      id_token: string
      access_token : string
      token_type : string
      scope:string
      profile : UserProfile
      expires_at : int
    }

[<Import("WebStorageStateStore", from="oidc-client")>]
type WebStorageStateStore() = 
    class end

type Options =
    {
      authority               : string
      client_id               : string
      redirect_uri            : string
      response_type           : string
      post_logout_redirect_uri: string
      acr_values              : string
    }

type GetUserPromise = JS.Promise<UserInfo> 

[<Import("UserManager", from="oidc-client")>]
type UserManager (opts : Options) =
    member __.signinRedirect() = jsNative 
    member __.signinRedirectCallback() : GetUserPromise = jsNative 
    member __.signoutRedirect() = jsNative 
    member __.processSigninResponse() : GetUserPromise = jsNative 
    member __.getUser() : GetUserPromise = jsNative 
