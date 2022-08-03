# Use Criipto Verify from ASP.Net Core v6.x

This is the slimmest of samples, created on a `dotnet new mvc` base just showing how to configure and enable OpenID Connect middelware in an ASP.NET Core 6.x web application to authentication using Criipto Verify brokered e-ID login.

## Runing the sample

`dotnet run`

## Test users

Read more about test users in the [Criipto Documentation](https://docs.criipto.com/verify/e-ids/)

## Points of interest

You may read a more detailed description of the steps in the Criipto documentation, but the key points of interest is the wiring up of Criipto Verify are:

1. Wire up the middelware in `Program.cs`. 
2. Change the Criipto settings in `appsettings.json`. Note though that it already includes values you may use to simply test the code and the login process. These values may be replaced with those from your own Criipto Verify tenant.
3. Add Login and Logout logic to the home controller, `/Controllers/HomeController.cs.` (Login logic is simply adding the `[Authorize]` to the route)
4. Add a page to be shown once authenticatedd, `/Views/Home/Protected.cshtml`. This page simply lists all the attriutes received from Criipto Verify.
