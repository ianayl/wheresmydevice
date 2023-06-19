# Sentinel

A server (and respective hooks) to track and sync device information across all your internet-connected devices.

## Why?

This all started out with location: I want to keep track of where my devices are and how to access them. I think that's a very reasonable thing to want.

I also want to keep track of where my non GPS enabled devices, e.g. laptop, is.

Unfortunately, if I want to use Google's geolocation API, I have to shell out **200 USD** a month. Mozilla's API is also an option, but it is not as ~~draconian~~ robust as Google's API, and fails in remote locations. Thus, I am trying to create my own system to keep track of location so I don't have to bleed 200 USD a month to know where my devices are.

### Figuring out the location

> **Help!**
>
> Currently, all ways of figuring out location is rough, and will be nowhere as near as accurate as a GPS. **If you have any ideas on ways to increase the accuracy of location estimates, please reach out to me!**
> I have contemplated trilateration before, but due to limitations of Android and iOS API's on triggering and accessing WiFi scan results, I will be unable to trilaterate.

Since your non GPS enabled devices, such as your laptop will probably have been where your phone has been anyways, I want to use my phone to keep track of all of the WiFi AP's it has encountered to a central server (that you will host yourself). Then, you can determine the _very rough_ location of your non GPS-enabled devices by looking at what WiFi AP's it is nearby.

In fact, this is how popular geolocation API's like Mozilla or Google functions. I plan on also adding an option to try for Mozilla's location API as well in order to provide better estimates, although it is worth noting that these geolocation API's often fail outside of downtown areas.

## Perhaps in the future

I'd like to maybe expand this in the future to include extra functionalities such as:

- Pinging devices from the central server
- Ability to share notifications, files, links, clipboards, etc. across devices
