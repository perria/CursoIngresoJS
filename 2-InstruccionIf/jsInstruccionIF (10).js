function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numero=Math.floor((Math.random()*10)+1);

	alert(numero);

	if(numero<4)
	{
		alert("Otra vez sera");
	}
	else
	{
		if(numero>=4 && numero<9)
		{
			alert("Aprobado");
		}
		else
		{
			alert("Excelente");
		}
	}

}//FIN DE LA FUNCIÓN