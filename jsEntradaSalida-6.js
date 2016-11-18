/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{

var numeroUno=33;
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

