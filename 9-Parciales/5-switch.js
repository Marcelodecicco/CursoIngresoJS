//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	alert("Funciona 5-Switch");

	/*
	var mes;

	mes=prompt("ingrese el mes");

	if(mes=="enero" || mes=="febrero")
	{
		alert("veranito");
	}
	else
	{
		alert("extraño enero y febrero");
	}

*/

	var mes;
	mes=prompt("ingrese el mes");

	switch(mes)
	{
	   case "Enero":
	   case "febrero":
	   alert("veranito");
	   break;

	   default:
	   alert("extraño");

	}


 



	
}

