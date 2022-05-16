namespace OrientacaoObjetos
{
    class Celular : Eletronico
    {
        public double ImpostoFederal(double valor)
        {
            return valor * 0.05;
        }
    }
}


