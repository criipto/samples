using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authentication.OpenIdConnect;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllersWithViews();

builder.Services.Configure<CookiePolicyOptions>(options =>
{
    // This lambda determines whether user consent for non-essential cookies is needed for a given request.
    options.CheckConsentNeeded = context => true;
    options.MinimumSameSitePolicy = SameSiteMode.None;
});

builder.Services.AddAuthentication(options => {
    options.DefaultScheme = CookieAuthenticationDefaults.AuthenticationScheme;
    options.DefaultChallengeScheme = OpenIdConnectDefaults.AuthenticationScheme;
})
.AddCookie()
.AddOpenIdConnect(options => {
    options.ClientId = builder.Configuration["Criipto:ClientId"]; // ClientID from application registration
    options.ClientSecret = builder.Configuration["Criipto:ClientSecret"]; // Client from application registration
    options.Authority = $"https://{builder.Configuration["Criipto:Domain"]}/"; // Domain from application registration
    options.ResponseType = "code";
    options.AccessDeniedPath = new PathString("/Home/Error");

    // The next two settings must match the Callback URLs in Criipto Verify
    options.CallbackPath = new PathString("/callback"); 
    options.SignedOutCallbackPath = new PathString("/signout");

    // Add a login_hint with message if requested
    // You can test this by navigating to /Home/Protected?message=test%20message
    options.Events.OnRedirectToIdentityProvider = async context => 
    {
        var message = context.Request.Query["message"];
        if (!String.IsNullOrWhiteSpace(message)) {
            var bytes = System.Text.Encoding.UTF8.GetBytes(message);
            context.ProtocolMessage.LoginHint = $"message:{System.Convert.ToBase64String(bytes)}";
        }
        await Task.FromResult(0);
    };
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthentication();
app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.Run();
