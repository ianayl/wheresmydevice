# Planning

- Central server behind a vpn with a dashboard to control server things
    - server also stores wifi ap's and associates location with wifi ap
- Devices connect to vpn which then connect to server
    - devices themselves are servers, periodically sends signals to the central server 
    - allows me to do kdeconnect-y things, because everybody likes kdeconnect
- Because device themselves are servers, have some sort of internal way to request data from our own local server?
    - allows multiple frontends, e.g. webapp can be included as default, maybe also TUI, as long as there's a good way to async
- A cli client that lets you ssh into sentinel devices easier
