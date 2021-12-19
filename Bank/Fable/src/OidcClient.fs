module Oidc

open Fable.Core

type private _UserInfo = Fable.JsonProvider.Generator<"""{
            "code" : "some string",
            "id_token": "some string",
            "access_token" : "some string",
            "token_type" : "some string",
            "scope" : "some string",
            "profile" : {
                "identityscheme" : "some string",
                "authenticationtype" : "some string",
                "authenticationmethod" : "some string",
                "authenticationinstant" : "some string",
                "nameidentifier" : "some string",
                "sub" : "some string",
                "sessionindex" : "some string",
                "loA" : "some string",
                "ial" : "some string",
                "aal" : "some string",
                "fal" : "some string",
                "uuid" : "some string",
                "cprNumberIdentifier" : "some string",
                "birthdate" : "some string",
                "dateofbirth": "some string",
                "age" : 52,
                "name" : "some string",
                "country" : "some string"
            },
            "expires_at" : 0
    }""">
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
      expires_at : float
    } with static member Parse json =             
            let info = _UserInfo(json)
            let p = info.profile
            let profile = 
                {
                    identityscheme = p.identityscheme
                    authenticationtype = p.authenticationtype
                    authenticationmethod = p.authenticationmethod
                    authenticationinstant = p.authenticationinstant
                    nameidentifier = p.nameidentifier
                    sub = p.sub
                    sessionindex = p.sessionindex
                    loA = p.loA
                    ial = p.ial
                    aal = p.aal
                    fal = p.fal
                    uuid = p.uuid
                    cprNumberIdentifier = p.cprNumberIdentifier
                    birthdate = p.birthdate
                    dateofbirth = p.dateofbirth
                    age = int p.age
                    name = p.name
                    country = p.country
                }
            {
                code = info.code
                id_token = info.id_token
                access_token = info.access_token
                token_type = info.token_type
                scope = info.scope
                profile = profile
                expires_at = float info.expires_at
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
