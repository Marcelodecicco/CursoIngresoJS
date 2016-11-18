/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()


{	var numeroUno=33;
var numeroDos="33";
var suma;
numeroUno=document.getElementById('numeroUno').value;
numeroDos=document.getElementById('numeroDos').value;
numeroUno= parseInt(numeroUno);
numeroDos= parseInt(numeroDos);
suma=numeroUno+numeroDos;

suma=parseInt(numeroUno)+(numeroDos);
alert(numeroUno+numeroDos);

alert("la suma es"+suma);
	
}

function restar()
{   var numeroUno;
	var numeroDos;
	var restar;

	numeroUno=document.getElementById('numeroUno').value;
	numeroDos=document.getElementById('numeroDos').value;
numeroUno=(numeroUno);
numeroDos=(numeroDos);
resta=numeroUno-numeroDos;



alert("la resta es" +resta); 
// en el alert siempre va el mas, no cumple funcion de sumar
}

// ATENCION: el ParseInt solo sirve para SUMAR PORQUE LA SUMA CONTATENAR Y LOS OTROS SOLO OPERACION MATEMATICA
function multiplicar()
{ 
	var numeroUno;
	var numeroDos;
	var multiplicar;

	numeroUno=document.getElementById('numeroUno').value;
	numeroDos=document.getElementById('numeroDos').value;
numeroUno=(numeroUno);
numeroDos=(numeroDos);
multiplicar=numeroUno*numeroDos;



alert("la multiplicacion es" +multiplicar);
	
}

function dividir()

{
    var numeroUno;
	var numeroDos;
	var dividir;

	numeroUno=document.getElementById('numeroUno').value;
	numeroDos=document.getElementById('numeroDos').value;
numeroUno= parseInt(numeroUno);
numeroDos= parseInt(numeroDos);
dividir=numeroUno/numeroDos;



alert("la division es" +dividir);	
}

