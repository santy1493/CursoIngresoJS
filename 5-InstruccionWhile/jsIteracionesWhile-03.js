/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	let claveIngresada;

	claveIngresada = prompt("Ingrese clave...");
	
	while(claveIngresada!="utn750") {

	claveIngresada = prompt("Clave incorrecta. Ingrese clave nuevamente...");
	}
}//FIN DE LA FUNCIÓN
