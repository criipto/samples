# Criipto Verify 

This template gets you up and running with a simple demo bank using criipto verify for authentication. The intention of the application is to show you how to integrate Criipto Verify into an application. This guide will show you how the integration is configured and used. For how to build and run the application please see [DEVELOPMET](/DEVELOPMENT.md)

## Configuration

The integration to Criipto verify is setup up in the file Identity.fs. THe important part is this block of code


SOMETHING ABOUT REQUIRING response strategy plainJson

```F#
{
    authority = "https://fablecriipto-test.criipto.id"               
    client_id = "urn:my:application:identifier:1744"               
    redirect_uri = url            
    responseType = "id_token" 
    post_logout_redirect_uri = url           
    acr_values = "urn:grn:authn:dk:mitid:low"
} 
```

All the values in this block are in pne way or another reflected in the [Criipto management UI][https://manage.criipto.id/]

![](domain.png)