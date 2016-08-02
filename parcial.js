function mostrar(){

	var base;
	base=document.getElementById('Base').value;
	var resultado;

	resultado=parseInt(base)*4;

	alert("El perimetro es: "+resultado);

}

function mostrar(){

	var importe=prompt("Ingrese importe", "20");

	resultado=parseInt(importe)*0.21+parseInt(importe);

	alert("El importe es: "+resultado);

}

function mostrar(){

	var largo;
	largo=document.getElementById('Largo').value;
	var ancho;
	ancho=document.getElementById('Ancho').value;
	var resultadoDos;

	resultado=parseInt(largo)*2+parseInt(ancho)*2;
	resultadoDos=parseInt(resultado)*3;

	alert("El resultado es: "+resultadoDos);
}

//Nivel 2 if switch

function mostrar(){

	var numUno=prompt("Ingrese un numero", "1,2...");
	var numDos=prompt("Ingrese un numero", "1,2...");
	var resultado;

	if(numUno==numDos)
	{
		resultado=parseInt(numUno)*parseInt(numDos);
	}
	else
	{
		if(numUno>numDos)
		{
			resultado=parseInt(numUno)-parseInt(numDos);
		}
		else
		{
			resultado=parseInt(numUno)+parseInt(numDos);
		}
	}

	document.getElementById('Resultado').value=resultado;
}

function diaDeLaSemana(){

	 var dia=prompt("Ingrese un día", "Lunes, martes...");

	 switch(dia)
	 {
	 	case "sabado":
	 	case "domingo":

	 	alert("Es fin de semana");
	 	break;

	 	default:
	 	alert("A trabajar");

	 }
}

//Nivel 3

function MayorMenos(){
	var contador=0
	var maximo;
	var minimo;

	while(contador<5)
	{	 
		contador++;
	 	var importe=prompt("Ingrese importe");
	 	while(isNaN(importe) && importe<0)
	 	{
	 		importe=prompt("Ingrese importe valido");
	 	}

		if(importe==1)
		{
			maximo=numero;
			minimo=numero;
		}
		else
		{		
		if(numero>maximo)
		{
			maximo=numero;
		}
	    if(numero<minimo)
		{
			minimo=numero;
		}
		}
 	}

 	document.write("El numero máximo es: "+maximo);
 	document.write("El numero minimo es: "+minimo);
}


//ejercicio 7

function mostrar(){

	var contador=0;
	var acumulador=0;
	var maxima;
	var minima;
	var nota=prompt("Ingrese nota");
	var sexo=prompt("Ingrese sexo f o m");

	while(contador<100)
	{
		contador++;
		nota=prompt("Ingrese nota");
		while(isNaN(nota) && nota>0 && nota<=10)
		{
			nota=prompt("Ingrese nota");
		}

		while(sexo!=f && sexo!=m)
		{
			sexo=prompt("Ingrese sexo");
		}

		if(nota==10)
		{
			minima=nota;
		}
		if(nota<10)
		{
			minima=nota;
		}

		while(sexo==m && nota>=6)
		{
			alert("Masculino y nota mayor o igual a 6");
		}

		acumulador+=parseInt(nota);
		var promedio=acumulador/100
	}

	alert("El promedio es: "+promedio);
	alert("La nota más baja es: "+minima);
  

}

