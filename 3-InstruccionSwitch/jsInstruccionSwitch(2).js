function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

alert (mesDelAño);

console.log(mesDelAño);

switch(mesDelAño)
{
	case "Enero":
	case "Febrero":
	case "Marzo":
	case "Abril":
	case "Mayo":
	case "Junio":


	alert("Falta para el invierno.");
	break

	case "Julio":
	case "Agosto":
	alert("es invierno.");
	break;
	default:

	alert("ya paso");
	alert("noooo");
	break;




}

// esto es el resumen de poner los meses 
// case "Enero":  
//	alert("Falta para el invierno.enero");
//	break
//  y asi con los meses que me pide
// la difererncia es que si quiero cambiar para los primeros meses el alert
// "falta para el invierno" lo tengo que corregir a todos los meses.
// con el paso de arriba lo puedo modificar una sola vez
}//FIN DE LA FUNCIÓN