/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	
	let numero;
	let seguir='s';
	let numMax=0;
	let numMin=0;
	let flag=0;

	do {

		numero=parseInt(prompt("Ingrese un numero"));

		if(flag==0) {

			numMax=numero;
			numMin=numero;
			flag=1;
		}

		else if(numero>numMax) {

			numMax=numero;
		}
		else if(numero<numMin) {

			numMin=numero;
		}
		document.getElementById("txtIdMaximo").value=numMax;
		document.getElementById("txtIdMinimo").value=numMin;

		seguir=prompt("Desea seguir s / n");

	} while(seguir=='s')

}//FIN DE LA FUNCIÓN