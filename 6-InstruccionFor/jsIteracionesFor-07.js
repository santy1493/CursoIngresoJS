function mostrar()
{
	let numero=parseInt(prompt("Ingrese un numero"));
	let contador=0;

	for(let i=1; i<=numero; i++) {

		if(numero%i==0) {

			console.log(i);
			contador++;
		}
	}

	console.log("Cantidad de divisores: "+contador);

}//FIN DE LA FUNCIÓN