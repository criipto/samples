namespace Criipto.NugetSample.Controllers

open System.Diagnostics
open Microsoft.AspNetCore.Authorization

open Microsoft.AspNetCore.Mvc
open Microsoft.Extensions.Logging

open Criipto.NugetSample.Models

type MessagesController (logger : ILogger<MessagesController>) =
    inherit Controller()

    [<Authorize>]
    member this.Index () =
        this.View()
        
    [<ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)>]
    member this.Error () =
        let reqId = 
            if isNull Activity.Current then
                this.HttpContext.TraceIdentifier
            else
                Activity.Current.Id

        this.View({ RequestId = reqId })
