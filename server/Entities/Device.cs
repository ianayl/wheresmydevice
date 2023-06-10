namespace Server;

public class Device
{
    public string id { get; }
    public string name { get; set; }
    private List<Status> log { get; set; }
    public bool hasCellular { get; set; }
    public bool hasGPS { get; set; }

    public Device(string id, string name, bool hasCellular, bool hasGPS)
    {
        this.id = id;
        this.name = name;
        this.hasCellular = hasCellular;
        this.hasGPS = hasGPS;
        log = new List<Status>();
    }

    public Status pushStatus(Status s)
    {
        log.Add(s);
        return s;
    }

    public static explicit operator SingleDeviceResponse(Device d)
    {
        return new SingleDeviceResponse(d.name, d.id,
                                        (d.log.Count > 0) ? d.log.Last() : null,
                                        d.hasCellular, d.hasGPS);
    }

}
