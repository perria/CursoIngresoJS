function Mostrar()
{
//tomo la edad  
var edad;
edad=document.getElementById('edad').value;
/*if(edad>12)
{
	if(edad<18)
	{
		
	}
	else{
			alert("Es.");
		}






	else{
		alert("No es.");
	}
}*/

if(edad<12)
{
	alert("No es adolescente");
}
else
{
	if(edad>18)
	{
		alert("	No es adolescente");
	}
}

}//FIN DE LA FUNCIÓN