

using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Hosting;
using Microsoft.AspNetCore.Mvc.NewtonsoftJson;

public class Startup
{
    public IConfigurationRoot Configuration { get; set; }

    public Startup(IConfigurationRoot configuration)
    {
        Configuration = configuration;
    }

    public void ConfigureServices(IServiceCollection services)
    {
        services.AddOptions()
                .Configure<SigningConfig>(Configuration.GetSection("signing"));
    }
}