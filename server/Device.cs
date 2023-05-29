namespace Server;

public class Device
{
    public string id { get; }
    public string name { get; set; }
    private List<Status> log { get; set; }

    public Device(string id, string name)
    {
        this.id = id;
        this.name = name;
        log = new List<Status>();
    }

    public Status pushStatus(Status s)
    {
        log.Add(s);
        return s;
    }

}
