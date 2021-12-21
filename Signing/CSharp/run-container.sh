# requires that user-secrets signing:ClientSecret and signing:ClientId are set
function start_api() {
    local secret=$(dotnet user-secrets list | grep signing:ClientSecret | cut -c 24-)
    local clientid=$(dotnet user-secrets list | grep signing:clientid | cut -c 20-)
    
    docker run -p 8080:80 -e signing__ClientID=$clientid -e signing__ClientSecret=$secret -it signing 
}