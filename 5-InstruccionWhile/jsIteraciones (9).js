function Mostrar()
{

	var contador=0;
	// declarar variables
	var numero=prompt("Ingrese un numero");
	var respuesta='si';
	//var respuesta='no';
	

	while(respuesta=='si')
	{
		numero=prompt("Ingrese un numero");
		while(isNaN(numero))
		{
			numero=prompt("Ingrese un numero");
		}
	}

	/*while(respuesta!='no')
	{
		alert("blabla")
	}*/


document.getElementById('maximo').value=mayor;
document.getElementById('minimo').value=menor;

}//FIN DE LA FUNCIÓN