function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';

	while(respuesta=='si')
	{
		var numero=prompt("Ingrese numero");
		while(isNaN(numero))
		{
			numero=prompt("Ingrese numero");
		}

		acumulador += parseInt(numero);
		contador++;

		respuesta = prompt("Quiere seguir ingresando numeros? ('si/no')");
	}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN