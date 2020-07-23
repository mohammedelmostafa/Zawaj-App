using System;
using Microsoft.EntityFrameworkCore;

namespace ZawajApp.API
{
    public class DataContext : DbContext
    {
        public DbSet<Weather> Weathers { get; set; }
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }
    }
}