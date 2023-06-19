# Server

The central Sentinel server, written in ASP.NET core.

## For Linux users

I didn't want to install .NET as a global user program. Plus, a bunch of distros don't have .NET as a package anyways. Instead I wrote a "bootstrap" script, that "sets up" a local .NET environment for Sentinel specifically. To use, run:

```shell
. ./bootstrap.sh     # Source the script so we can obtain the proper environment variables
```

I plan on putting the entire server API into a docker image eventually, so I never actually have to have .NET on my system, plus it'll be cleaner than the bootstrap script.
