function Mostrar()
{
//tomo la edad  

var edad;
edad=document.getElementById("edad").value;
if (edad>18) {alert("es mayor de edad"+ edad);}
if (edad>=13 && edad<=17) {alert("adolecente");}
else{if(edad<=13){alert("es menor");}}








































/*var laEdad;

laEdad=document.getElementById("edad").value;

if (laEdad>=13 && laEdad<=17) {
	alert("adolecente");}

if(laEdad>=18){
	alert("mayor");


}
else{

if(laEdad<13)
{
	alert("usted es un niño y su edad es: " +laEdad);
}
}
*/

}//FIN DE LA FUNCIÓN