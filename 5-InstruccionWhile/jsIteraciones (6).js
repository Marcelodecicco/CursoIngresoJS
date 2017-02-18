function Mostrar()
{
	/*var contador=0;
	var acumulador=0;
	var numeroIngresado;

	while(contador<5)
	{
		contador++;
		numeroIngresado=prompt("ingrese numero " + contador);
		numeroIngresado=numeroIngresado;
		acumulador=acumulador+parseInt(numeroIngresado);
	}

	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/5;
*/

	var contador=0;
	var numero;
	var acumulador=0;
	while(contador<5)
	{
		
		console.log(contador);
		contador=contador+1;
		numero=prompt("ingrese un numero entre 0 y 9");
		numero=parseInt(numero);
		acumulador=acumulador+numero;



	}
	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/5;

// 1-declarar
//2-condicion
//3-modificar contador

}//FIN DE LA FUNCIÓN