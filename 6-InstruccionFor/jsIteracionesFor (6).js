function Mostrar()
{

/* realizar el algoritmo que pida el importe de las ventas (validar que sea mayor a 0,”cero”) de los 24 días
hábiles del mes por prompt (una por día), e informar cual fue el mayor importe y cuál fue el menor
importe de venta.
*/

var contadorDeDias=0;
var importe;
var max;
var min;

while(contadorDeDias<5)
{

	console.log(contadorDeDias);
	contadorDeDias=contadorDeDias+1;
	importe=prompt("ingrese importe");
	importe= parseInt(importe);
	while(importe<0) //esto es para el error
	{
    importe=prompt("ingrese importe");
	importe= parseInt(importe);


	}
	// aca estoy seguro que es positivo
	if(contadorDeDias==1) //solo cuando es la primera vez
	 {

		min=importe;
		max=importe;
	}
	else  {
		if(importe>max)
		{
			max=importe
		}
	if(importe<min)
	{
		min=importe

	
	}
}


}



}//FIN DE LA FUNCIÓN





























    //var contador=0;
	//var acumulador=0;
	//var numeroIngresado;




	//while(contador<5)
	//{
   // contador++; // hasta aca el contador va a contar hasta 5 veces
    //numeroIngresado=prompt("ingrese el numero");
   // console.log(contador); // para verificar

    //acumulador= acumulador+parseInt(numeroIngresado);
