

function testTemplate() {
    dotnet pack -o build
    local res=$?

    if [ "$res" -eq "0" ]; then
        # if this fails it's likely just because the template isn't installed
        dotnet new -u Criipto.Templates
        templateProject=$(ls ./build/*.* | grep Criipto)
        res=$?
    else
        echo "pack failed"
    fi

    if [ "$res" -eq "0" ]; then
        dotnet new -i $templateProject
        res=$?
    fi

    name=$1
    if [ -z "$name" ]; then
        name="Feliz"
    fi

    if [ "$res" -eq "0" ]; then
        templateDir="deployment-"$name"-source"
        mkdir $srcDir
        cd $srcDir
        dotnet new "Criipto${name}Sample" --force
        res=$?
        cd -
    fi
    
    if [ "$res" -eq "0" ]; then
        cd $srcDir/src
        dotnet paket update
        res=$?
        cd -
    fi

    if [ "$res" -eq "0" ]; then
        cd $srcDir
        npm install
        res=$?
        cd -
    fi

    if [ "$res" -eq "0" ]; then
        cd $srcDir
        npm run build
        res=$?
        cd -
    fi
}