# samples
A container for samples on how to use Criipto products

# Contributing
The samples project consists of two "packages" of sampels. On in the `./Bank/` folder and one in the `Signing` folder. Under each folder there will be a set of samples. The subfolder shuold be named after the tach stack of the sample. Ie a vanilla `nodejs`sample would be found in a folder named `nodejs` whereas a sample using FSharp and dotnet could be found in `FSharp`

When the sample is ready to be released a .template.config folder should be included and have one simgle filed called template.json for the structure of the file see [this tutorial](https://docs.microsoft.com/en-us/dotnet/core/tutorials/cli-templates-create-project-template). The template packaging requires the consumer to have dotnet installed but can be used for any platform. However if we for some reason find the above not to be a feasible way to distribute the sample. This step can be omitted and another way of setting the sample up via a command line tool should be used. This is important in relation to our onboarding.

When a sample is made ready for distribution we should use this distribution mechanism as part of the actions workflow for that particular sample, this way making sure that the distribution package works and that the newly created sample project can be compiled and run.


# Other material
- https://docs.microsoft.com/en-us/dotnet/core/tools/custom-templates