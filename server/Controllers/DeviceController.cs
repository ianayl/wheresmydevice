using Microsoft.AspNetCore.Mvc;

namespace Server.Controllers;

[ApiController]
[Route("devices")]
public class DeviceController : ControllerBase
{
    private static List<Device> tmpDevices = new List<Device>
    {
        new Device {
            id = 1,
            name = "iphone",
            lastSeen = new DateTime(),
        }
    };

    [HttpGet]
    public async Task<ActionResult<List<Device>>> GetDevices()
    {
        return Ok(tmpDevices);
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Device>> GetDevice(int id)
    {
        var res = tmpDevices.Find(d => d.id == id);
        if (res != null) return Ok(res);
        return NotFound($"No device with id {id}!"); 
    }

    [HttpPost]
    public async Task<ActionResult<List<Device>>> CreateDevice(Device d)
    {
        if (d.id < 0)
            return BadRequest($"Cannot have negative device id's!");
        else if (d.name == string.Empty)
            return BadRequest("Device name is empty!");
        else if (tmpDevices.Find(e => e.id == d.id) != null)
            return BadRequest($"Device with id {d.id} already exists!");
        tmpDevices.Add(d);
        return Ok(tmpDevices);
    }

    [HttpPut]
    public async Task<ActionResult<List<Device>>> UpdateDevice(Device req)
    {
        var target = tmpDevices.Find(d => d.id == req.id);
        if (target == null) return NotFound($"No device with id {req.id}!"); 
        target.Copy(req);
        return Ok(tmpDevices);
    }

    [HttpDelete("{id}")]
    public async Task<ActionResult<List<Device>>> DeleteDevice(int id)
    {
        var res = tmpDevices.Find(d => d.id == id);
        if (res == null) return NotFound($"No device with id {id}!"); 
        tmpDevices.Remove(res);
        return Ok(tmpDevices);
    }
}
