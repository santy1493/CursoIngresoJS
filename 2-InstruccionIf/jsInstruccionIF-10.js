function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	let numero=Math.random()*10;
	numero=Math.ceil(numero);

	if(numero<4) {

		alert("Vamos, la proxima se puede\nNota: "+numero);
	}
	else if(numero<9) {

		alert("APROBADO\nNota: "+numero);
	}
	else {

		alert("EXELENTE\nNota: "+numero);
	}

}//FIN DE LA FUNCIÓN