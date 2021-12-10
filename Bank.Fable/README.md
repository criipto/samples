# Criipto Verify 

This template gets you up and running with a simple demo bank using criipto verify for authentication. The intention of the application is to show you how to integrate Criipto Verify into an application. This guide will show you how the integration is configured and used. For how to build and run the application please see [DEVELOPMET](/DEVELOPMENT.md)

## Configuration

The integration to Criipto verify is setup up in the file Identity.fs. THe important part is this block of code

We want' dive into configuring an application using the Criipto Management UI in this document. For the sample to run you do not need to register an application. To use Criipto Verify in production you will need to register. When doing so it's important to note that for this sample application to work, you will need to specify `plainJson`as the response strategy

```F#
{
    authority = "https://fablecriipto-test.criipto.id"               
    client_id = "urn:my:application:identifier:1744"               
    redirect_uri = url            
    responseType = "code" 
    post_logout_redirect_uri = url           
    acr_values = "urn:grn:authn:dk:mitid:low"
} 
```

All the values in this block are in one way or another reflected in the [Criipto management UI][https://manage.criipto.id/]

![](domain.png)