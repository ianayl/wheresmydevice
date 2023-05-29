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
        devices.Add(new Device("12345", "bob"));
        devices[0].pushStatus(new Status("777", new DateTime(2000, 1, 1, 1, 1, 1), "127.0.0.1", "127.0.0.1"));
        devices.Add(new Device("45678", "john"));
    }

    // Question: Why doesn't this show status on API call??
    // [HttpGet("GetDevices")]
    // public IEnumerable<Device> Get()
    // {
    //     return devices;
    // }
    
    [HttpGet("GetDevices")]
    public IEnumerable<Device> Get()
    {
        return devices;
    }
}
