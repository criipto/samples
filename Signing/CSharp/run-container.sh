# requires that user-secrets signing:ClientSecret and signing:ClientId are set
# if running on a mac remember to port forward from the virtual box 
function start_api() {
    local port="$1"
    if [ -z $port ]; then
        port=7110
    fi
    local secret=$(dotnet user-secrets list | grep signing:ClientSecret | cut -c 24-)
    if [ -z $secret ]; then
        exit 1;
    fi
    local clientid=$(dotnet user-secrets list | grep signing:clientid | cut -c 20-)
    if [ -z $clientid ]; then
        exit 1;
    fi
    docker run -p $port:80 -e signing__ClientID=$clientid -e signing__ClientSecret=$secret -it signing
}