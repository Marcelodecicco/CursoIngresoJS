/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var numeroUno;
	var numeroDos;
	var suma;

    numeroUno=document.getElementById('numeroUno').value; 
    numeroDos=document.getElementById('numeroDos').value;
    numeroUno=parseInt(numeroUno);
    numeroDos=parseInt(numeroDos);
    suma= numeroUno+numeroDos
    alert("la suma es"+suma);
	//el parseInt sirve solo en la suma poruqe la suma concatenan y hace la operación matemática. En cambio el resto de los signos cumplen la funcion de operar
}

function restar()
{
	var numeroUno;
  var numeroDos;
  var resta;

  numeroUno=document.getElementById('numeroUno').value;
  numeroDos=document.getElementById('numeroDos').value;
  numeroUno=(numeroUno);
  numeroDos=(numeroDos);
  resta=numeroUno-numeroDos;
  alert("la resta es" +resta);
}

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
	var num1;
	var num2;
	var dividir;

	num1=document.getElementById('numeroUno').value;
	num2=document.getElementById('numeroDos').value;

	//num1=parseInt(num1);
	//num2=parseInt(num2);

	dividir=num1/num2;

	alert("La division es: "+dividir);
	
}

//parseInt solo sirve para la SUMA!!!!!!!!
// otra opción --
//alert( "la suma es: "+parseInt(document.getElementById('numeroUno').value)+parseInt(document.getElementById('numeroDos').value));




