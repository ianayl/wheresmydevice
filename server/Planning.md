# Planning

Moment

## What do I need to track?

I try to keep everything normalized, might be problematic without an overview diagram (think UML/ER, etc) though

- Device -- we need device information
  - device ID (primary key)
  - has cellular
  - has gps

- Statuses:
  - status ID (primary key)
  - device ID (foreign key)
  - timestamp
  - public and private IP
  - GPS lat/lon
  - estimated device lat/lon
  - Current (B)SSID (foreign key)
  - Current (B)SSID strength
  - battery
  - is charging?
  
- Known WIFI SSID's
  - SSID name
  - BSSID (primary key)
  - estimated AP lat/lon

- GPS Samples (**)
  - connection strength (sorted by this)
  - harvest status ID (keep a foreign key index on this)

(**) could still technically be used with mozilla's api, but this should technically only be used when results are close to my GPS triangulation
