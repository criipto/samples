# The bank app

This folder contains the same app implemented with various tech stacks. Each project will become part of the dotnet template package and the documentation as well. To make both objectives possible there're a few rules for contribution to consider.

# Template project

## template config

Each project should have a .template.config/template.json file. The content of the file depends on the project and more information can be found in this tutorial for [dotnet template projects](https://docs.microsoft.com/en-us/dotnet/core/tutorials/cli-templates-create-project-template).

## template.csproj

Each project needs a Content tag in the tempalte.csproj file that specifies which files to include in the project template and which to exclude.

## .github/workflows/build.pipeline.yml

There's two jobs pr project in the build pipelie. One that builds the project and one that installs the project and builds based on the newly created project. A third section of testing could be included. If the build of the template results in a SPA the static files should be copied to releases/<techstackname> and be included in the publish-demo-sites job. That way the demo will be available on the demo site.

## available-teckstacks.json

When an example using a new tech stack is made available, the available-teckstack.json should be updated. This will make the project available from the onboarding site.

## Structuring the code

Because we are going to use the examples as part of online documentation, we need a few conventions for how the code is structured. Code related to Criipto verify is in a folder called `src/Authentication` and code related to Signatures is located in `src/Signatures`.
