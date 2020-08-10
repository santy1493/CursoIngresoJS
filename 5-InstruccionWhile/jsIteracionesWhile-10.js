/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	let seguir;
	let numero;
	let contadorNegativos=0;
	let contadorPositivos=0;
	let contadorCeros=0;
	let sumaPositivos=0;
	let sumaNegativos=0;
	let contadorPares=0;

	do {

		numero=parseInt(prompt("Ingrese un numero").value);

		if(numero%2==0) {

			contadorPares++;
		}

		if(numero==0) {

			contadorCeros++;
		}
		else if(numero>0) {

			sumaPositivos=sumaPositivos+numero;
			contadorPositivos++;
		}
		else if(numero<0) {

			sumaNegativos=sumaNegativos+numero;
			contadorNegativos++;
		}
		
		respuesta=prompt("desea continuar? s/ n");

	} while(respuesta=="s")

	document.write("la suma de negativos es :"+sumaNegativos);
}//FIN DE LA FUNCIÓN