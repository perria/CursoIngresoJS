function Mostrar()
{

/*var sexo=prompt("ingrese f ó m .");

while(sexo!="f" || sexo!="m")
{
	sexo=prompt("ingrese f ó m .");

	if(sexo=="f" || sexo=="m")
	{
		alert("Su sexo es: "+sexo);
		break;
	}
}



document.getElementById('Sexo').value=sexo;*/

var sexo = prompt("ingrese f ó m .");

	while(sexo != "f" && sexo != "m" && sexo != null){
		sexo = prompt("ingrese f ó m .");
	}

	document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN


//primero el 12, despues 5, 7, 9, 11. Si se logran hacer esos, se pasa a los otros.