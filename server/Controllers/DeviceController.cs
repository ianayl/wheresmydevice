using Microsoft.AspNetCore.Mvc;

namespace Server.Controllers;

[ApiController]
[Route("Device")]
public class DeviceController : ControllerBase
{
    private List<Device> devices { get; set; }

    private readonly ILogger<DeviceController> _logger;

    public DeviceController(ILogger<DeviceController> logger)
    {
        _logger = logger;
        devices = new List<Device>();
        devices.Add(new Device("12345", "bob", true, false));
        devices[0].pushStatus(new Status(new DateTime(2000, 1, 1, 1, 1, 1), "127.0.0.1", "127.0.0.1", "cum", 40, true, null, (1, 2)));
        devices.Add(new Device("45678", "john", false, true));
    }

    // Question: Why doesn't this show status on API call??
    // [HttpGet("GetDevices")]
    // public IEnumerable<Device> Get()
    // {
    //     return devices;
    // }
    
    [HttpGet("GetAll")]
    public IEnumerable<SingleDeviceResponse> GetDevices()
    {
        List<SingleDeviceResponse> res = new List<SingleDeviceResponse>();
        foreach (Device d in devices) {
            res.Add((SingleDeviceResponse) d);
        }
        return res;
    }

    [HttpPost("New")]
    public string CreateDevice(Device d)
    {
        Console.WriteLine($"before {devices.Count}");
        this.devices.Add(d);
        Console.WriteLine($"after {devices.Count}");
        return d.id;
    }

}
