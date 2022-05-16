using Microsoft.EntityFrameworkCore;
using TesteApi.Models;

namespace TesteApi.Config
{
    public class Contexto : DbContext
    {

        public Contexto(DbContextOptions<Contexto> options) : base(options)
        {
           // Database.EnsureCreated();
        }

        public DbSet<Produto> Produto { get; set; }

    }
}
