using ApiClientes.Models;
using Microsoft.EntityFrameworkCore;

namespace ApiClientes.Config
{
    public class Contexto : DbContext
    {

        public Contexto(DbContextOptions<Contexto> options) : base(options)
        {
           //Database.EnsureCreated();
        }

        public DbSet<Cliente> Cliente { get; set; }

    }
}

