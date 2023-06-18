using System.ComponentModel.DataAnnotations;

namespace Server.Data;

public enum DeviceType
{
    Unknown,
    Phone,
    Laptop,
    Desktop,
}

public class Device
{
    // TODO change this to a string
    [Key]
    public int id { get; set; } = -1;

    [Required]
    public string name { get; set; } = string.Empty;

    [Required]
    public DeviceType type { get; set; } = DeviceType.Unknown;

    public bool hasCellular { get; set; } = false;

    public bool hasGPS { get; set; } = false;

    // TODO keep track of hotspot?

    public DateTime? lastSeen { get; set; }

    /**
     * Copy information from one Device instance to another Device instance.
     * Does not copy device id's, for those are unique!
     */
    public void Copy(Device src)
    {
        this.name = src.name;
        this.type = src.type;
        this.hasCellular = src.hasCellular;
        this.hasGPS = src.hasGPS;
        // TODO should I copy lastSeen?
        this.lastSeen = src.lastSeen;
    }
}
