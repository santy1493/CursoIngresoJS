
function mostrar()
{
	let articulo, precio, cantidad, marca, fabricante;
	let alcBaratoPrecio, alcBaratoCant, alcBaratoFab;
	let unidadesBarbijo=0;
	let unidadesJabon=0;
	let unidadesAlcohol=0;
	let comprasBarbijo=0;
	let comprasJabon=0;
	let comprasAlcohol=0;
	let flagAlcohol=0;
	let contradorgeneral=0;

	for(let i=0; i<5; i++) {

		//Articulo
		articulo=prompt('Ingrese el articulo ("barbijo", "jabon" o "alcohol")');

		while (articulo!="barbijo" && articulo!="jabon" && articulo!="alcohol") {

			articulo=prompt('Articulo invalido. Ingrese el articulo ("barbijo", "jabon" o "alcohol")');
		}

		//Precio
		precio=parseInt(prompt("Ingrese el precio (entre 100 y 300)"));
		
		while (precio<100 || precio>300 || isNaN(precio)) {

			precio=parseInt(prompt("Precio invalido. Ingrese el precio (entre 100 y 300)"));
		}

		//Cantidad
		cantidad=parseInt(prompt("Ingrese la cantidad (de 1 a 1000)"));
		
		while(cantidad<1 || cantidad>1000 || isNaN(cantidad)) {

			cantidad=parseInt(prompt("Cantidad invalida. Ingrese la cantidad (de 1 a 1000)"));
		}

		marca=prompt("Ingrese la marca");

		fabricante=prompt("Ingrese el fabricante");

		if(articulo=="alcohol") {

			if(flagAlcohol==0) {

				alcBaratoPrecio=precio;
				alcBaratoCant=cantidad;
				alcBaratoFab=fabricante;
				flagAlcohol=1;
			}
			else {

				if(alcBaratoPrecio>precio) {

					alcBaratoPrecio=precio;
					alcBaratoCant=cantidad;
					alcBaratoFab=fabricante;
				}
			}
		}

		if(articulo=="barbijo") {

			unidadesBarbijo+=cantidad;
			comprasBarbijo++;
		}
		else if(articulo=="jabon") {

			unidadesJabon+=cantidad;
			comprasJabon++;
		}
		else {

			unidadesAlcohol+=cantidad;
			comprasAlcohol++;
		}
		contradorgeneral++;

		console.log(articulo+ " " +contradorgeneral);
		console.log(precio+ " " +contradorgeneral);
		console.log(cantidad+ " " +contradorgeneral);
		console.log(marca+ " " +contradorgeneral);
		console.log(fabricante+ " " +contradorgeneral);
	}

	alert("Cantidad alcohol mas barato: " + alcBaratoCant + " unidades");
	alert("Fabricante alcohol mas barato: " + alcBaratoFab);

	if(unidadesBarbijo>unidadesJabon && unidadesBarbijo>unidadesAlcohol) {

		alert("Se vendieron mas unidades de barbijos con un promedio por compra de " +(unidadesBarbijo/comprasBarbijo));
	}

	else if(unidadesJabon>unidadesBarbijo && unidadesJabon>unidadesAlcohol) {

		alert("Se vendieron mas unidades de jabones con un promedio por compra de " +(unidadesJabon/comprasJabon));
	}
	else {

		alert("Se vendieron mas unidades de alcoholes con un promedio por compra de " +(unidadesAlcohol/comprasAlcohol));
	}
}
