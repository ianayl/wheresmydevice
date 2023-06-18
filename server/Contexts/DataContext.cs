using Microsoft.EntityFrameworkCore;

namespace Server.Data;

public class DataContext : DbContext
{
    public DbSet<Device> Devices { get; set; }

    public DataContext(DbContextOptions<DataContext> options) : base(options)
    { 
    }
}
