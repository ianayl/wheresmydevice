using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Server.Data;

namespace Server.Controllers;

[ApiController]
[Route("devices")]
public class DeviceController : ControllerBase
{
    private readonly DataContext context;

    public DeviceController(DataContext ctx)
    {
        this.context = ctx;
    }

    [HttpGet]
    public async Task<ActionResult<List<Device>>> GetDevices()
    {
        return Ok(await context.Devices.ToListAsync());
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Device>> GetDevice(int id)
    {
        Device? res = await context.Devices.FindAsync(id);
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
        else if ((await context.Devices.FindAsync(d.id)) != null)
            return BadRequest($"Device with id {d.id} already exists!");
        context.Devices.Add(d);
        await context.SaveChangesAsync();
        return Ok(await context.Devices.ToListAsync());
    }

    [HttpPut]
    public async Task<ActionResult<List<Device>>> UpdateDevice(Device req)
    {
        var target = await context.Devices.FindAsync(req.id);
        if (target == null) return NotFound($"No device with id {req.id}!"); 
        target.Copy(req);
        await context.SaveChangesAsync();
        return Ok(await context.Devices.ToListAsync());
    }

    [HttpDelete("{id}")]
    public async Task<ActionResult<List<Device>>> DeleteDevice(int id)
    {
        var res = await context.Devices.FindAsync(id);
        if (res == null) return NotFound($"No device with id {id}!"); 
        context.Devices.Remove(res);
        await context.SaveChangesAsync();
        return Ok(await context.Devices.ToListAsync());
    }
}
