/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let i=0;
	let seguir='s';
	let suma=0;
	let numero;
	let promedio;

	while(seguir=='s') {

		numero=parseInt(prompt("Ingrese un numero"));
		suma=suma+numero;
		document.getElementById("txtIdSuma").value=suma;
		seguir=prompt("Quiere ingresar otro numero (s / n)");
		i++;
	}

	promedio=suma/i;
	document.getElementById("txtIdPromedio").value=promedio;


}//FIN DE LA FUNCIÓN