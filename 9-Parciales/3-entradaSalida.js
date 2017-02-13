//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	alert("Funciona 3-EntradaSalida");

	var largo;
	var ancho;
	var perimetro;

	largo=document.getElementById("largo").value;
	ancho=document.getElementById("ancho").value;

	perimetro=(ancho*2)+(largo*2);
	perimetro=perimetro*6;


	alert("la cantidad de alambre que se necesitan son metros"+ perimetro);











	
}

