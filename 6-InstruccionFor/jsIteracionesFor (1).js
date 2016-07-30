function Mostrar()
{
	var contador=0; 
	var contadorUno=0;
	var contadorDos=0;
	var contadorTres=0;
	var contadorCuatro=0;
	var contadorCinco=0;
	var contadorSeis=0;
	var contadorSiete=0;
	var contadorOcho=0;
	var contadorNueve=0;
	var contadorDiez=0;
	var limite=100000;

	for(;contador<=limite;)
	{
		//console.log(contador);
		contador++;

		var numero=Math.floor((Math.random()*10)+1);

		while(numero==5 && (contadorCinco)>(limite*0.05))
		{
			numero=Math.floor((Math.random()*10)+1);
		}

		while(numero==3 && (contadorTres)<(limite*0.08))
		{
			numero=Math.floor((Math.random()*10)+1);
		}

		switch(numero)
		{
			case 1:
			contadorUno++;
			break;

			case 2:
			contadorDos++;
			break;

			case 3:
			contadorTres++;
			break;

			case 4:
			contadorCuatro++;
			break;

			case 5:
			contadorCinco++;
			break;

			case 6:
			contadorSeis++;
			break;

			case 7:
			contadorSiete++;
			break;

			case 8:
			contadorOcho++;
			break;

			case 9:
			contadorNueve++;
			break;

			case 10:
			contadorDiez++;
			break;
		}

	}

        console.log("Numero uno: "+parseInt(contadorUno*100/limite)+"%");
		console.log("Numero dos: "+parseInt(contadorDos*100/limite)+"%");
		console.log("Numero tres: "+parseInt(contadorTres*100/limite)+"%");
		console.log("Numero cuatro: "+parseInt(contadorCuatro*100/limite)+"%");
		console.log("Numero cinco: "+parseInt(contadorCinco*100/limite)+"%");
		console.log("Numero seis: "+parseInt(contadorSeis*100/limite)+"%");
		console.log("Numero siete: "+parseInt(contadorSiete*100/limite)+"%");
		console.log("Numero ocho: "+parseInt(contadorOcho*100/limite)+"%");
		console.log("Numero nueve: "+parseInt(contadorNueve*100/limite)+"%");
		console.log("Numero diez: "+parseInt(contadorDiez*100/limite)+"%");
}