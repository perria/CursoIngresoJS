function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	
	var respuesta='si';

	while(respuesta=='si')
	{
		var numero=prompt("Ingrese un numero");
		while(isNaN(numero))
		{
			numero=prompt("Ingrese un numero");
		}
		if(numero<0)
		{
			negativo *= parseInt(numero);
		}
		else
		{
			positivo += parseInt(numero);
		}
		
		respuesta=prompt("Quiere seguir agregando numeros ('si/no')");
	}


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN