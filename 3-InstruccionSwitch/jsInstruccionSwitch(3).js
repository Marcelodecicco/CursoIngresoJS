function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
	
	console.log(mesDelAño);

	switch(mesDelAño){


		case "Enero":
		
		case "Marzo":
		case "Abril":
		case "Mayo":
		case "Junio":
		case "Julio":
		case "Agosto":
		case "Setiembre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre":

		alert("tiene mas de 30 dias");
		break;



		case "Febrero":
		alert("tiene menos de 29");
		break;



	}

	


}//FIN DE LA FUNCIÓN