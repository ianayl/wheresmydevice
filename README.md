# Where's my device?

A server (and hooks) to sync device information (public ip, location, etc.) whenever your device connects to the internet.

## Why?

I'm lazy. Say my laptop is in the bedroom and I'm in the kitchen on my phone, and I want to access my laptop from my phone without walking upstairs. Knowing the IP of my laptop upstairs at all times would allow me to connect to the device directly, ~~saving me all that gross and exhausting cardio that doesn't even help with muscle hypertrophy. Yuck!~~

Also, if you don't like services like Findmydevice, this is a decent, but not perfect alternative: If you left your device at a wifi connected place, you now know where it is. This feature may be expanded on in the future

### Why not just have static IPs on all your devices?

You can't have your device use a static IP on a network you don't own. Plus, who remembers the IP addresses for all their devices anyways?

If you never leave your house, static IP's on your devices are plenty sufficient provided you write them down somewhere. But this is a more universal solution.

## For Linux users

I didn't want to install .NET as a global user program. Plus, a bunch of distros don't have .NET as a package anyways. Instead I wrote a "bootstrap" script, that "sets up" a local .NET environment for Wheresmydevice specifically. To use, run:
```shell
. ./bootstrap.sh     # Source the script so we can obtain the proper environment variables
```
