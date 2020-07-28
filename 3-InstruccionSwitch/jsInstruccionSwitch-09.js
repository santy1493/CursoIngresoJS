function mostrar()
{
	let estacionIngresada=document.getElementById("txtIdEstacion").value;
	let destino=document.getElementById("txtIdDestino").value;
	let importe=15000;

	switch(estacionIngresada) {

		case "Invierno":

			switch(destino) {

				case "Bariloche":
					alert("El precio final es $"+importe*1.2);
					break;
				case "Cataratas":
					alert("El precio final es $"+importe);
					break;
				case "Mar del plata":
					alert("El precio final es $"+importe*0.8);
					break;
				case "Cordoba":
					alert("El precio final es $"+importe*0.9);
					break;
			}
			break;
		
		case "Verano":
			
			switch(destino) {

				case "Bariloche":
					alert("El precio final es $"+importe*0.8);
					break;
				case "Cataratas":
					alert("El precio final es $"+importe*1.1);
					break;
				case "Mar del plata":
					alert("El precio final es $"+importe*1.2);
					break;
				case "Cordoba":
					alert("El precio final es $"+importe*1.1);
					break;
			}
			break;
			
		case "Otoño":
		case "Primavera":

			switch(destino) {
	
				case "Bariloche":
					alert("El precio final es $"+importe*1.1);
					break;
				case "Cataratas":
					alert("El precio final es $"+importe*1.1);
					break;
				case "Mar del plata":
					alert("El precio final es $"+importe*1.1);
					break;
				case "Cordoba":
					alert("El precio final es $"+importe);
					break;
			}
			break;		
	}

}//FIN DE LA FUNCIÓN