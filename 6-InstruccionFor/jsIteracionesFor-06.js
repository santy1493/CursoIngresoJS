function mostrar()
{
	let numero=parseInt(prompt("Ingrese un numero"));
	let contador=0;

	/*for(let i=2; i<=numero; i+=2) {

		document.write(i+"</br>");
	}*/

	for(let i=1; i<=numero; i++) {

		if(i%2==0) {

			console.log(i);
			contador++;
		}
	}

	console.log("Cantidad de pares: "+ contador);

}//FIN DE LA FUNCIÓN