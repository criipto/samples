module Identity

open Browser
open Oidc

let inline private split (delim : string) (s:string)  = 
    s.Split delim

let private options : Options = 
        let url = 
            window.location.href.Split([|'?';'#'|]) 
            |> Array.head
        {
            authority = "https://fablecriipto-test.criipto.id"               
            client_id = "urn:my:application:identifier:1744"               
            redirect_uri = url            
            response_type = "code" 
            post_logout_redirect_uri = url           
            acr_values = "urn:grn:authn:dk:mitid:low"
        }         
let private userManager = 
    UserManager(
        options
    )

let storageKey = sprintf "oidc.user:%s:%s" options.authority options.client_id
let storage = sessionStorage

let tryGetUserProfileFromStorage() = 
    let userInfo = storage.getItem storageKey
    if  userInfo |> isNull then 
        None
    else
        userInfo |> UserInfo.Parse |> Some

let tryGetUserProfile(cont) =
    match tryGetUserProfileFromStorage() with
    None -> 
        userManager.processSigninResponse().``then``(fun userInfo -> 
            let json = Fable.Core.JS.JSON.stringify userInfo
            storage.setItem(storageKey, sprintf "%A" json)
            userInfo |> Some |> cont
        ).catch(fun err ->
            console.error("Error processing signin:", err)
            None |> cont
        ) |> ignore
    | userInfo -> userInfo |> cont

let hasRequestedAuthentication() = 
    let href = window.location.href
    href.Contains "code="

let isAuthenticated(updateUserProfile) = 
    let hasExpired (userProfile : UserInfo) = 
        userProfile.expires_at > (System.DateTime.Now - System.DateTime(1970,1,1,0,0,0,0)).TotalSeconds

    tryGetUserProfile(
        Option.bind(fun userProfile ->  
            printfn "Expires at: %A" userProfile.expires_at
            if userProfile |> hasExpired then
                storage.removeItem storageKey
                None
            else
                //validation of the profile is handled by oidc-client
                //if it exists in storage and hasn't expired we are good to go
                Some userProfile
        ) >> updateUserProfile
    )

        
let logOut () = 
    try
        storage.removeItem storageKey
        userManager.signoutRedirect()
    with e ->
        eprintfn "Eror when logging out: %s" e.Message
let logIn () =
    userManager.signinRedirect()
    