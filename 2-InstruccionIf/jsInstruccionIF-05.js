function mostrar()
{
	//tomo la edad
	let edad=document.getElementById("txtIdEdad").value;
	
	if(edad<13 || edad>17) {
	
		alert("No es adolescente");
	}
}//FIN DE LA FUNCIÓN