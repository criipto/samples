# ATTEBTION: This should be build from the root of the repo
# $ docker build -f Signing/CSharp/Dockerfile -t signing .

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
copy .paket/ /.paket/

WORKDIR /source

RUN dotnet tool install --global paket
RUN dotnet tool install --global snowflaqe

ENV PATH="C:\Windows\system32;C:\Windows;C:\Program Files\dotnet;C:\Program Files\powershell;C:\Users\ContainerUser\.dotnet\tools"

COPY paket.dependencies .
COPY ./Signing/CSharp/Signing.csproj ./main/
USER ContainerAdministrator
RUN icacls ./main/Signing.csproj /t /grant Users:M
COPY ./Signing/CSharp/paket.references ./main/

COPY ./Signing/signatures/Signatures.fsproj ./signatures/

RUN icacls ./signatures/Signatures.fsproj /t /grant Users:M
COPY ./Signing/signatures/paket.references ./signatures/

USER ContainerUser
RUN paket update


# copy everything else and build app
COPY ./Signing/CSharp/. ./main/
COPY ./Signing/signatures/. ./signatures/

WORKDIR /source/signatures
RUN snowflaqe --generate

WORKDIR /source/main
RUN dotnet publish -c debug -o /app

# final stage/image
FROM mcr.microsoft.com/dotnet/aspnet:6.0
WORKDIR /app
COPY --from=build /app ./
ENTRYPOINT ["dotnet", "signing.dll"]