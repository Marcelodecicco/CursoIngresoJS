/*Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'MOSTRAR'*/
function Mostar()
{
	 var miVariable;

	 //var estaEsMiVariable;

	 var miVariable = document.getElementById('elNombre').value;
	 //var miVariable = document.getElementById('elNombre').value;

	 // si me aparece objectHTMLInputElement es porque me olvide el .value

	 alert(miVariable);
}


