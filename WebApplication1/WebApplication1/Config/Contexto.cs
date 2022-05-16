using Microsoft.EntityFrameworkCore;
using WebApplication1.Models;

namespace WebApplication1.Config
{
    public class Contexto : DbContext
    {

        public Contexto(DbContextOptions<Contexto> options) : base(options)
        {
            //Database.EnsureCreated();
        }

        public DbSet<Produto> Produto { get; set; }
    }
}
