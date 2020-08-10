/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let seguir='s'
	let numero;
	let suma=0;
	let multiplicacion=1;
	let numMultiplicacion=0;

	do {

		numero=parseInt(prompt("Ingrese un numero"));

		if(numero>=0) {

			suma=suma+numero;
		}
		else{

			multiplicacion=multiplicacion*numero;
			numMultiplicacion=1;
		}
		seguir=prompt("Desea seguir s / n");
	
	} while(seguir=='s')

	if(numMultiplicacion==0) {

		multiplicacion=0;
	}
	document.getElementById("txtIdSuma").value=suma;
	document.getElementById("txtIdProducto").value=multiplicacion;

}//FIN DE LA FUNCIÓN