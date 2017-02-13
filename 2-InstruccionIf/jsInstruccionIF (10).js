function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 

	

	var random;
	random=Math.floor((Math.floor()*10+1));
	if (random>8) {alert(+random+"excelente");}
	else{if (random<4) {alert(+random+"vamos");}
	else{alert(+random+"APROBO");}}


	

	/*
	





var nrorandom;
	nrorandom=Math.floor((Math.random() * 10) + 1);

	if ( nrorandom == 9 || nrorandom == 10 )
	{
		console.log(nrorandom);
		alert( "Excelente");
	}
	else
	{
		if ( nrorandom > 4 )
		{
			console.log(nrorandom);
			alert( "APROBO" );
		}
		else
		{
			console.log(nrorandom);
			alert("Vamos, la proxima se puede");
		}
	}
	



























	


*/
/*

	var random;
	random=Math.floor((Math.random()*10+1));
	if (random>8) 
	{
		alert (+random+' Excelente');
	}
		else 
		{
			if (random<4)
	 		{alert (+random+' Vamos la proxima se puede')}
	 		else
	 		{
	 			alert (+random+' APROBÓ');
	 		}}
	
*/
}//FIN DE LA FUNCIÓN