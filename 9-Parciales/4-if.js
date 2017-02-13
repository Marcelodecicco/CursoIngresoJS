//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	alert("Funciona 4-if");
	/*

	var num1;
	var num2;
	var resultado;

	num1=prompt("ingrese el primer nro");
	num2=prompt("ingrese el segundo nro");

	num1=parseInt(num1);
	num2=parseInt(num2);
	// solo donde hay suma se usa el parseint
	// la regla es 1) las variables
	// 2) leer
	// 3) 

	if (num1==num2)
	 {
	 	resultado=num1*num2

	 }
	 else
	 {
	 	if (num1>num2) 
	 	{
	 	resultado=num1-num2;	
	 	}
	 	else
	 	{
	 	resultado=num1+num2;
	 	}
	 }
	 */

	 //si edad es 12 o menor es un niño
	 //si es entre 13 y 17 es un adolecente
	 //si es de 18 en adelante es mayor

	 var edad;

	 edad=prompt("ingrese la edad");

	 if(edad<13)
	 {
	 	alert("es un niño");
	 }
	 else
	 {
	 	if(edad>17)
	 	{
	 		alert("es mayor de edad");
	 	}
	 	else
	 	{
	 		alert("es adolecente");

	 	}
	 }










	 document.write(resultado);


	
}

