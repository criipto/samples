# Criipto Verify 

This template gets you up and running with a simple demo bank using criipto verify for authentication. The application uses a few other libraries

One npm package is highly relevant for the authentication flow this is:
- [oidc-client](https://www.npmjs.com/package/oidc-client)

In addition we use a few other packages that are not relevant for the authentication flow but are used to build the application
- [Fable](http://fable.io/)
A F# to JS transpiler, providing the ability to write a SPA in F#
- [Feliz](https://github.com/Zaid-Ajaj/Feliz)
A library leveraging both Fable and React
- [Bulma](http://bulma.io/)
CSS tool box

## Requirements

* [dotnet SDK](https://www.microsoft.com/net/download/core) 6.0.0 or higher
* [node.js](https://nodejs.org) 10.0.0 or higher


## Editor

To write and edit your code, you can use either VS Code + [Ionide](http://ionide.io/), Emacs with [fsharp-mode](https://github.com/fsharp/emacs-fsharp-mode), [Rider](https://www.jetbrains.com/rider/) or Visual Studio.


## Development

To start with development you shuold install a few tools. This can be done with the dotnet cli

```bash
dotnet tool restore
```

with the tools installed you should install the required dependencies

```bash
dotnet paket restore
npm install
```

Then to start development mode with hot module reloading, run:
```bash
npm start
```

This will start the development server after compiling the project, once it has finished, navigate to http://localhost:8080 to view the application .

To build the application and make ready for production:
```
npm run build
```

This command builds the application and puts the generated files into the `dist` directory (can be overwritten in webpack.config.js or using an env var called `WEBPACK_OUT_DIR`).
