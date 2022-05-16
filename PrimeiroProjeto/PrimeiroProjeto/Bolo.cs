namespace OrientacaoObjetos
{
    class Bolo
    {

        // Atributos
        public string sabor;
        public int camadas;
        public double peso;

        // Método para exibir uma mensagem
        public void mensagem()
        {
            Console.WriteLine("O bolo tem sabor de " + sabor + ".");
            Console.WriteLine("Nesse bolo há " + camadas + " camada(s).");
            Console.WriteLine("O peso do bolo é " + peso + "kg.");
        }

    }
}


