//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	alert("Funciona 6-iteraciones");

var importe;

contador=0;


while(contador<7)
{
	contador++;
	importe=prompt("ingrese importe numero "+contador);
	while(importe<1)
	{
		importe=prompt("error, ingrese importe numero "+contador);
	}

	if(contador==1)
	{
		maximo=importe;
	}
	if(importe>maximo)
	{
		maximo=importe;
		
	}



}



	
}

