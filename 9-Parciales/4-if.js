//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	alert("Funciona 4-if");

	var numeroUno;
	var numeroDos;
	var resultado;
	

	numeroUno=prompt("ingrese numeroUno");
	numeroDos=prompt("ingrese numeroDos");
	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);



	/*multiplicar=numeroUno*numeroDos;
	resta=numeroUno-numeroDos;
	suma=numeroUno+numeroDos;*/

	if (numeroUno==numeroDos) 
	{
	   resultado=numeroUno*numeroDos;
	}
	else
	{
		if(numeroUno>numeroDos)
		{
			resultado=numeroUno+numeroDos;
		}
		else
		{
			resultado=numeroUno-numeroDos;
		}
	} 
		



	/*if (numeroUno==numeroDos) 
	{
	   resultado=numeroUno*numeroDos;
	}
	if (numeroUno>numeroDos) 
		{
	    resultado=numeroUno+numeroDos

		}
	if(numeroUno<numeroDos)
	{
		resultado=numeroUno-numeroDos

	}	*/ 	
		document.write(resultado);


	
}

