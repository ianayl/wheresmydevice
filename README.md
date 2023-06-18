# Sentinel

A server (and hooks) to sync device information (public ip, location, etc.) whenever your device connects to the internet.

## Why?

I want to keep track of where my devices are and how to access them. I think that's a very reasonable thing to want.

I also want to keep track of where my non GPS enabled devices, e.g. laptop, is.

Unfortunately, if I want to use Google's geolocation API, I have to shell out 200 USD a month. Mozilla's API is also an option, but it is not as ~~draconian~~ robust as Google's API, and fails in remote locations. Thus, I am trying to create my own system to keep track of location so I don't have to bleed 200 USD a month to know where my devices are.

## For Linux users

I didn't want to install .NET as a global user program. Plus, a bunch of distros don't have .NET as a package anyways. Instead I wrote a "bootstrap" script, that "sets up" a local .NET environment for Sentinel specifically. To use, run:

```shell
. ./bootstrap.sh     # Source the script so we can obtain the proper environment variables
```

I plan on putting the entire server API into a docker image eventually, so I never actually have to have .NET on my system, plus it'll be cleaner than the bootstrap script.
