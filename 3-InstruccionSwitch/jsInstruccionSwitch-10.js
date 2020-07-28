function mostrar()
{
	let estacion=document.getElementById("txtIdEstacion").value;
	let destino=document.getElementById("txtIdDestino").value;
	let viaje;

	switch(estacion) {

		case "Invierno":

			switch(destino) {

				case "Bariloche": viaje=true;
					break;
				case "Cataratas":
				case "Mar del plata":
				case "Cordoba": viaje=false;
					break;
			}

		case "Verano":

			switch(destino) {

				case "Bariloche":
				case "Cordoba": viaje=false;
					break;
				case "Cataratas":
				case "Mar del plata": viaje=true;
					break;
			}

		case "Otoño":

			switch(destino) {

				case "Bariloche":
				case "Cordoba":
				case "Cataratas":
				case "Mar del plata": viaje=true;
					break;
			}

		case "Primavera":
		
			switch(destino) {

				case "Bariloche": viaje=true;
					break;
				case "Cataratas":
				case "Mar del plata":
				case "Cordoba": viaje=false;
					break;
			}
	}

	if(viaje) {

		alert("Se viaja");
	}
	else {

		alert("No se viaja");
	}

}//FIN DE LA FUNCIÓN