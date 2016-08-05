//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostar()
{

	var contador=0;
	var contadorDos=0;
	var contadorTres=0;
	var contadorCuatro=0;
	var contadorCinco=0;
	var promedio=0;
	var promedioDos=0;
	var promedioTres=0;
	var nombre;
	var nota;
	var edad;
	var sexo;
	var minimo;
	var maximo;
	var respuesta='si';
	var maxNom;

	while(contador<15 && respuesta=='si')
		{
			contador++;
			nombre=prompt("Ingrese nombre");

			edad=prompt("Ingrese edad");
			edad=parseInt(edad);
			while(isNaN(edad) || edad<0 || edad>100)
			{
				edad=prompt("Ingrese edad valida");
			}

			sexo=prompt("Ingrese sexo f o m");
			while(sexo!="m" && sexo!="f")
			{
				sexo=prompt("Ingrese sexo valido por favor");
			}

			nota=prompt("Ingrese nota");
			nota=parseInt(nota);
			while(isNaN(nota) || nota<0 || nota>10)
			{
				nota=prompt("Ingrese nota valida");
			}

			if(sexo=="m" && edad>18)
			{
				contadorDos++;
			}

			if(sexo=="f" && nota>5)
			{
				contadorTres++;
			}

			promedio=parseInt(promedio)+parseInt(nota);

			if(sexo=="m")
			{	
				promedioDos=parseInt(promedioDos)+parseInt(edad);
				contadorCuatro++;
		
			}

			if(sexo=="f")
			{
				promedioTres=parseInt(promedioTres)+parseInt(edad);
				contadorCinco++;
			}

			if(contador==1)
			{
				minimo=edad;
			}
			if(edad<minimo)
			{
				minimo=edad;
			}

			if(contador==1)
			{
				maximo=nota;
			}
			if(nota>maximo)
			{
				maximo=nota;
				maxNom=nombre;
			}

			respuesta=prompt("quiere seguir ('si/no')");

		}

		alert("datos ingresados: "+contador);
		alert("hombres mayores "+contadorDos);
		alert("mujeres mayores, nota mayor a 5 "+contadorTres);
		alert("promedio notas "+promedio/contador);
		alert("promedio edad varones "+promedioDos/contadorCuatro +"promedio mujeres "+promedioTres/contadorCinco);
		alert("edad minima "+minimo);
		alert("la nota maxima es "+maximo+"nombre"+maxNom);
	
}

