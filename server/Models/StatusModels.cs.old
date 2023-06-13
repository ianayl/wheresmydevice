namespace Server;

public class StatusResponse
{
    public DateTime timestamp { get; set; }

    /* Network Information */

    public string? publicIP { get; set; }

    public string? privateIP { get; set; }

    public string? currentNetworkSSID { get; set; }

    /* Battery information */
    
    public int? batteryPercentage { get; set; }

    public bool? isCharging { get; set; }

    /* Location information */

    // TODO eventually change this to location using WiGLE api
    // TODO should I be including connection strength?
    //public List<string> nearbySSIDs { get; set; }

    public (double, double)? GPSLocation { get; set; }

    // public StatusResponse(DateTime time, string? publicIP, string? privateIP,
    //                       string? currentSSID, int? battery, bool? isCharging,
    //                       (double, double)? location)
    // {
    //     this.timestamp = time;
    //     this.publicIP = publicIP;
    //     this.privateIP = privateIP;
    //     this.currentNetworkSSID = currentSSID;
    //     this.batteryPercentage = battery;
    //     this.isCharging = isCharging;
    //     this.GPSLocation = location;
    // }
}
