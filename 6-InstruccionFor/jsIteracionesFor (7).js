function Mostrar()
{
var numeroRandom; //no necesita inicializacion
var iteraciones=0;
var cont1=0;
var cont2=0;
var cont3=0;
var cont4=0;
var cont5=0;
var cont6=0;
var cont7=0;
var cont8=0;
var cont9=0;
var cont10=0;
var total;
var cantpares=0;
var cantimpares=0;

while(iteraciones<1000)

//for(iteraciones=0;iteraciones<10;iteraciones++)
{
	iteraciones++;
numeroRandom=Math.floor((Math.random()*10)+1);
/*if(numeroRandom&2==0)
	{
		cantpares++
	}
else
	{
		cantimpares++;
	}*/	
//alert(numeroRandom);
//console.log("numero :"+numeroRandom);
switch(numeroRandom)
	{
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

			if((cont5/total*100)<7)
				{
				cont5++;
				}
			else
			{
				iteraciones--;
				continue;
			}
			
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





	}//fin del switch

	if(numeroRandom%2==0)
	{
		cantpares++;
	}
else
	{
		cantimpares++;
	}	



}//fin del while hasta ??

total=cont1+cont2+cont3+cont4+cont5+cont6+cont7+cont8+cont9+cont10;
console.log("el total es :" + total);
console.log("la cantidad de pares es: "+cantpares);
console.log("la cantidad de impares es:"+cantimpares);
console.log("% de pares : "+(cantpares/total*100));
console.log("% de impares : "+(cantimpares/total*100));

console.log("el numero 1 salio: " +cont1+" veces "+ (cont1/total*100)+"%");
console.log("el numero 2 salio: " +cont2+" veces "+(cont2/total*100)+"%");
console.log("el numero 3 salio: " +cont3+" veces "+(cont3/total*100)+"%");
console.log("el numero 4 salio: " +cont4+" veces "+(cont4/total*100)+"%");
console.log("el numero 5 salio: " +cont5+" veces "+(cont5/total*100)+"%");
console.log("el numero 6 salio: " +cont6+" veces "+(cont6/total*100)+"%");
console.log("el numero 7 salio: " +cont7+" veces "+(cont7/total*100)+"%");
console.log("el numero 8 salio: " +cont8+" veces "+(cont8/total*100)+"%");
console.log("el numero 9 salio: " +cont9+" veces "+(cont9/total*100)+"%");
console.log("el numero 10 salio: " +cont10+" veces "+(cont10/total*100)+"%");




}//FIN DE LA FUNCIÓN