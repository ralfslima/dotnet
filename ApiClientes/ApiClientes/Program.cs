using Microsoft.EntityFrameworkCore;
using ApiClientes.Config;

var MyAllowSpecificOrigins = "_myAllowSpecificOrigins";

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: MyAllowSpecificOrigins,
                      policy =>
                      {
                          policy.WithOrigins("http://localhost:1337")
                          .AllowAnyHeader()
                          .AllowAnyMethod();
                      });
});

builder.Services.AddControllers();

builder.Services.AddSwaggerGen();

var stringConexao = "User Id=system;Password=admin;" +
                    "Data Source=(" +
                    "DESCRIPTION=(" +
                    "ADDRESS_LIST=(" +
                    "ADDRESS=(PROTOCOL=TCP)" +
                    "(HOST =localhost)" +
                    "(PORT=1521)))" +
                    "(CONNECT_DATA=(SERVICE_NAME=XE)))";

builder.Services.AddDbContext<Contexto>
(options => options.UseOracle(stringConexao));

var app = builder.Build();

app.UseSwagger();
app.UseSwaggerUI();

app.UseCors(MyAllowSpecificOrigins);

app.MapControllers();

app.Run();


