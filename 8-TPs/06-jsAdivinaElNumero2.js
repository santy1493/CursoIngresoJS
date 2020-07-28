/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

let numeroSecreto; 
let contadorIntentos;
//let numero=parseInt(document.getElementById("txtIdNumero").value);
let flag=0;

function comenzar() {

  numeroSecreto=Math.round(Math.random()*99+1);
  flag=1;
  contadorIntentos=0;
  document.getElementById("txtIdNumero").focus();
  document.getElementById("txtIdIntentos").value=contadorIntentos;
  alert(numeroSecreto);
}

function verificar() {
  
  let numero=document.getElementById("txtIdNumero").value;

	if (flag==0) {

    alert("Primero tiene que precionar el boton comenzar");
  }
  else if(numero=="") {

    alert("Escribe un numero");
  }
  else {

    numero=parseInt(document.getElementById("txtIdNumero").value);
    contadorIntentos++;
    document.getElementById("txtIdIntentos").value=contadorIntentos;

    if(numero==numeroSecreto) {

		switch(contadorIntentos) {

			case 1:
        alert("usted es un Psíquico");
		  	break;
			case 2:
        alert("excelente percepción");
			  break;
			case 3:
        alert("Esto es suerte");
		  	break;
      case 4:
        alert("Excelente técnica");
			  break;
			case 5:
        alert("usted está en la media");
			  break;
			case 6:
			case 7:
			case 8:
			case 9:
			case 10:
        alert("falta técnica");
			  break;
			default:
        alert("afortunado en el amor!!");
		}
      flag=0;
    }
    else if(numero<numeroSecreto) {

      alert("falta...");
    }
    else {

      alert("se paso...");
    }
    document.getElementById("txtIdNumero").value="";
    document.getElementById("txtIdNumero").focus();
  }
	
}