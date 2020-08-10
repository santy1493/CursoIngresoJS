function mostrar()
{
	let numero;
	let contador=0;

	numero=parseInt(prompt("Ingrese un numero"));

	for(let i=1; i<=numero; i++) {

		if(numero%i==0) {

			contador++;
		}
	}

	if(contador==2) {

		alert("Es numero primo");
	}
	else {

		alert("No es numero primo");
	}

}//FIN DE LA FUNCIÓN