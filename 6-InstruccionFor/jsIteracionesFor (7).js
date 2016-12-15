function Mostrar()
{

	//necesitan inicializar como los contadores
	var iteraciones=0;

	//random no necesita inicializar porque sobre escribo 

	var numeroRandom;

	var cont1=0;
	var cont2=0;
	var cont3=0;
	var cont4=0;
	var cont5=0;
	var cont6=0;
	var cont7=0;
	var cont8=0;
	var cont9=0;
	var cont10=10;
	var contPar=0;
	var contImpar=0;

	while(iteraciones<1000){

		iteraciones=iteraciones+1;
		numeroRandom=Math.floor((Math.random() * 10)+1);
		//console.log("numero :"+numeroRandom);

		switch(numeroRandom){

			case 1:

		cont1++;
		break;

            case 2:

		cont2++;
		break;

		case 3:

		cont3++;
		break;

            case 4:

		cont4++;
		break;

		case 5:

		total=cont1+cont2+cont3+cont4+cont5+cont6+cont7+cont8+cont9+cont10;
        porc=cont5/total*100;

        if(porc<7){
        	cont5++;

        }




		cont5++;
		break;

		case 6:

		cont6++;
		break;

		case 7:

		cont7++;
		break;

		case 8:

		cont8++;
		break;

		case 9:

		cont9++;
		break;

		case 10:

		cont10++;
		break;



		}// fin del swicth

		if(numeroRandom%2==0){

			contPar++;

		} else{

			contImpar++;
		}

	}// del while hasta ...?

    total=cont1+cont2+cont3+cont4+cont5+cont6+cont7+cont8+cont9+cont10;
    console.log("el total es: " +total);

    console.log("% de pares :"+(contPar/total*100));
    console.log("% de impares :"+(contImpar/total*100));


    console.log("el numero 1 salio :"+ cont1+"veces"+ partseInt(cont1/total*100)+"%");
	console.log("el numero 2 salio :"+ cont2+"veces"+ partseInt(cont2/total*100)+"%");
	console.log("el numero 3 salio :"+ cont3+"veces"+ partseInt(cont3/total*100)+"%");
	console.log("el numero 4 salio :"+ cont4+"veces"+ partseInt(cont4/total*100)+"%");
	console.log("el numero 5 salio :"+ cont5+"veces"+ partseInt(cont5/total*100)+"%");
	console.log("el numero 6 salio :"+ cont6+"veces"+ partseInt(cont6/total*100)+"%");
	console.log("el numero 7 salio :"+ cont7+"veces"+ partseInt(cont7/total*100)+"%");
	console.log("el numero 8 salio :"+ cont8+"veces"+ partseInt(cont8/total*100)+"%");
	console.log("el numero 9 salio :"+ cont9+"veces"+ partseInt(cont9/total*100)+"%");
	console.log("el numero 10 salio :"+ cont10+"veces"+ partseInt(cont10/total*100)+"%");

	
	


//alert("numeroRandom");




// generar un numero random del 1 al 10


}//FIN DE LA FUNCIÓN



//for(iteraciones=0;iteraciones<10 ;iteraciones++ )





 
