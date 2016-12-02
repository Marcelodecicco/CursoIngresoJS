function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
	
	console.log(mesDelAño);

	switch(mesDelAño){


		case "Febrero":
		alert("28 dias");
		break;


		
		case "Abril":
		case "Junio":
		case "Agosto":
		case "Octubre":
	
		alert("30 dias");
		break;
		default:
		alert("tiene 31");

	}





		//case "Enero":
		//case "Marzo":
		//case "Mayo":
		//case "Julio":
		//case "Agosto":
		//case "Octubre":
		//case "Diciembre":
		//alert("31 dias")






		







}//FIN DE LA FUNCIÓN