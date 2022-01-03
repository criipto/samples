# ATTEBTION: This should be build from the root of the repo
# $ docker build -f Signing/CSharp/Dockerfile -t signing .

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build

WORKDIR /source

ENV PATH="C:\Windows\system32;C:\Windows;C:\Program Files\dotnet;C:\Program Files\powershell;C:\Users\ContainerUser\.dotnet\tools"

COPY Signing.csproj ./
RUN dotnet restore

# copy everything else and build app
COPY . ./

WORKDIR /source
#USER ContainerAdministrator
#RUN icacls ./ /t /grant Users:M

# USER ContainerUser
RUN dotnet publish -c Release -o /app

# final stage/image
FROM mcr.microsoft.com/dotnet/aspnet:6.0
WORKDIR /app
COPY --from=build /app ./

ENV ASPNETCORE_ENVIRONMENT="Development"
ENV ASPNETCORE_URLS="http://+:80"
ENTRYPOINT ["dotnet", "signing.dll"]