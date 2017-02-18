function Mostrar()
{

	//var numero = prompt("ingrese un número entre 0 y 9.");

	var numero;
	numero=prompt("ingrese un numero entre 0 y 9");
	numero=parseInt(numero);


// siempre va lo malo 
	while(numero<0 || numero>10)
	{	//estas dos lineas van igual que las dos de arriba
		numero=prompt("ingrese un numero entre 0 y 9");
		numero=parseInt(numero);
	}
	alert("ok"+numero);













	
	
}//FIN DE LA FUNCIÓN