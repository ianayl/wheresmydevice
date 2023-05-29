namespace Server;

public class Status
{
    private string deviceId { get; }
    private DateTime timestamp { get; }
    private string publicIp { get; }
    private string privateIp { get; }

    public Status(string id, DateTime time, string publicIp, string privateIp)
    {
        deviceId = id;
        timestamp = time;
        this.publicIp = publicIp;
        this.privateIp = privateIp;
    }

}
