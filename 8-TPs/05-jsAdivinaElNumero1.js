/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
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

      alert("Usted es un ganador!!! y en solo " +contadorIntentos+ " intentos");
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