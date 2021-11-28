module Identity

open Browser

let inline private split (delim : string) (s:string)  = 
    s.Split delim

type User = Fable.JsonProvider.Generator<"""{"iss":"https://test.criipto.id",
    "aud":"urn:my:application:identifier:1744",
    "nonce":"1f13d61bbe184b508cae4b83664df39e",
    "identityscheme":"dkmitid",
    "authenticationtype":"urn:grn:authn:dk:mitid:low",
    "authenticationmethod":
    "pwd:1636706971608:LOW:SUBSTANTIAL:LOW:LOW",
    "authenticationinstant":"2021-11-12T08:50:09.107Z",
    "nameidentifier":"2b14b40488f448c799484afd773393e5",
    "sub":"{2b14a404-88f4-48c7-9948-4afd773393e5}",
    "sessionindex":"dba07795-49de-46c6-a0af-785dcee737c2",
    "loA":"LOW",
    "ial":"SUBSTANTIAL",
    "aal":"LOW",
    "fal":"HIGH",
    "uuid":"47842aeb-033b-4845-99f9-c374c6857103",
    "cprNumberIdentifier":"111111118",
    "birthdate":"1971-01-14",
    "dateofbirth":"1971-01-14",
    "age":"50",
    "name":"name",
    "country":"DK",
    "iat":1636707009,
    "nbf":1636707009,
    "exp":1636724971
}""">

let tryReadIdToken () = 
    match window.location.href with
    href when href.Contains("#") ->
        href
        |> split "#id_token=" 
        |> Array.last
        |> split "."
        |> Array.skip 1
        |> Array.head
        |> System.Convert.FromBase64String 
        |> System.Text.Encoding.UTF8.GetString
        |> User
        |> Some
    | _ -> None

        
let private userManager = 
    let options : Oidc.Options = 
        let url = 
            window.location.href.Split([|'?';'#'|]) 
            |> Array.head
        {
            authority = "https://fablecriipto-test.criipto.id"               
            client_id = "urn:my:application:identifier:1744"               
            redirect_uri = url            
            responseType = "id_token" 
            post_logout_redirect_uri = url           
            acr_values = "urn:grn:authn:dk:mitid:low"
        } 
    Oidc.UserManager(
        options
    )

let logOut () = 
    try
        userManager.signoutRedirect()
         |> Async.StartImmediate
    with e ->
        eprintfn "Eror when logging out: %s" e.Message
let logIn () =
    userManager.signinRedirect()
    |> Async.StartImmediate