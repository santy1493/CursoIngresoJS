/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	var nombre=document.getElementById("txtIdNombre").value;
	var edad=document.getElementById("txtIdEdad").value;
	alert(`Usted se llama ${nombre} y tiene ${edad} años`);
}

