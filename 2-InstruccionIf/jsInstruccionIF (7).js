function Mostrar()
{
//tomo la edad  
var edad;
edad=document.getElementById('edad').value;
var estadoCivil=document.getElementById('estadoCivil').value;

if(edad < 18 && estadoCivil != "soltero")
{
	alert("Es muy pequeño");
}
	


}//FIN DE LA FUNCIÓN