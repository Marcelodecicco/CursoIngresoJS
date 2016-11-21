/*Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'MOSTRAR'*/
function Mostar()
{ var nombre;
	var apellido = "De Cicco"
	nombre="marcelo";
	nombre = prompt("ingrese su nombre","nn");

	//con el Prompt se pueden poner mas parametros
	//otra opcion nombre = prompt("ingrese su nombre");
	alert("nombre");
//alert("nombre"); me pedira la palabra nombre

// estamos concatenando con el +
//alert( "mi nombre es:" + nombre + "" + apellido);

alert( "mi nombre es: " + nombre + " y mi apellido es " + apellido);


	
} 

