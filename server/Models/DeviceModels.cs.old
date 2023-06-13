namespace Server;

/* Response for a single device in a device list */
public class SingleDeviceResponse
{
    public string name { get; set; }

    public string id { get; set; }

    public Status? lastUpdate { get; set; }

    public bool hasCellular { get; set; }

    public bool hasGPS { get; set; }

    public SingleDeviceResponse(string name, string id, 
                                Status? lastUpdate, bool hasCellular,
                                bool hasGPS)
    {
        this.name = name;
        this.id = id;
        this.lastUpdate = lastUpdate;
        this.hasCellular = hasCellular;
        this.hasGPS = hasGPS;
    }

}
