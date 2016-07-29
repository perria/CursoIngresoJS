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
	var contador=24
	var acumulador=0
	var importe=prompt("Ingrese importe");

	while(importe<0)
	{
		importe=prompt("Ingrese importe valido");
	}
}

