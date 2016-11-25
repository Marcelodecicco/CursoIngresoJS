/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
var numeroUno=33;
var numeroDos=33;
var sumar;

numeroUno=document.getElementById('numeroUno').value;
numeroDos=document.getElementById('numeroDos').value;

numeroUno=parseInt(numeroUno);
numeroDos=parseInt(numeroDos);


sumar= numeroUno+numeroDos;

alert("la suma es"+suma);


}

