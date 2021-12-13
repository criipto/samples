namespace Criipto.NugetSample.Controllers

open System.Diagnostics
open Microsoft.AspNetCore.Authorization

open Microsoft.AspNetCore.Mvc
open Microsoft.Extensions.Logging

open Criipto.NugetSample.Models

type HomeController (logger : ILogger<HomeController>) =
    inherit Controller()

    
    member this.Index () =
        this.View()
        
    [<Authorize>]
    member this.Overview(string accountName) =
        this.View()

    [<Authorize>]
    member this.Transactions(string accountName) =
        this.View()

    [<Authorize>]
    member this.Messages(string accountName) =
        this.View()

    [<ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)>]
    member this.Error () =
        let reqId = 
            if isNull Activity.Current then
                this.HttpContext.TraceIdentifier
            else
                Activity.Current.Id

        this.View({ RequestId = reqId })
