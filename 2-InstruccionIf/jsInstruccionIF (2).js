function Mostrar()
{
//tomo la edad  

var edad;

edad=document.getElementById('edad').value;

if( edad > 17){

	alert("es mayor de edad, su edad es:" + edad);

}
else{
	alert("usted no es mayor de edad");
}

}//FIN DE LA FUNCIÓN