function mostrar()
{
	let i=0;
	let suma=0;
	let numero;
	let promedio;

	while(i<5) {

		numero=parseInt(prompt("Ingrese un numero"));
		suma=suma+numero;
		document.getElementById("txtIdSuma").value=suma;
		i++;
	}

	promedio=suma/5;
	document.getElementById("txtIdPromedio").value=promedio;

}//FIN DE LA FUNCIÓN