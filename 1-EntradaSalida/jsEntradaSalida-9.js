/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{

	var sueldo;
	sueldo=document.getElementById('sueldo').value;
	var resultado;

	resultado=parseInt(sueldo)*0.1+parseInt(sueldo);
	document.getElementById('resultado').value=resultado;
	alert(resultado);

	
}
