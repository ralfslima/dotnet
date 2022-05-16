using System;
using Oracle.ManagedDataAccess.Client;

namespace OrientacaoObjetos
{
class Program
{

static void Main(String[] args)
{

// Tentativa
try
{
    // Acesso ao banco de dados
    string dadosAcesso = "user id=system;password=admin;data source=localhost";

    // Efetuar a conexão
    OracleConnection con = new OracleConnection(dadosAcesso);
                
    // Abrir conexão
    con.Open();

    // Objeto contendo o comando SQL
    OracleCommand sql = new OracleCommand("DELETE FROM clientes WHERE nome = :nome", con);
    sql.Parameters.Add(new OracleParameter("nome", "Ralf"));

    // Executa o comando SQL, e retorna quantas linhas foram afetadas
    if(sql.ExecuteNonQuery() > 0)
    {
        Console.WriteLine("Alteração realizada com sucesso");
    }
    else
    {
        Console.WriteLine("Falha ao realizar a alteração.");
    }

    // Fechar conexão e query SQL
    sql.Dispose();
    con.Dispose();
}
catch (Exception ex)
{
    Console.WriteLine("Error : {0}", ex);
}


        }

    }
}


