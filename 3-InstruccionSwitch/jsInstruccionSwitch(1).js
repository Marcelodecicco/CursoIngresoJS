function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

// una variable: o numero o texto
//cada uno de los casos va a tener un valor 
// no condiciones logicas
// VA VARIABLE, SIEMPRE CARGADA ANTES
// NO olvidar el break
// el DEFAULT se ejecuta cuando no se ejecutaron los demas pasos

console.log(mesDelAño);
// me sirve para ver si funciona
switch(mesDelAño)
{

   
   case "Enero":
   alert("comienzo año");
   break;

   case "Marzo":
   alert("a clases");
   break;

   case "Julio":
   alert("vacaciones");
   break;

   case "Diciembre":
   alert("Felices fiestas");
   break;











}
     

    



}//FIN DE LA FUNCIÓN