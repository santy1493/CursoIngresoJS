let eleccionMaquina;
let ContadorDeEmpates=0;
let ContadorDeGanadas=0;
let ContadorDePerdidas=0;

function comenzar()
{
    eleccionMaquina=Math.floor(Math.random()*3)+1;
	alert("Piedra, papel o tijera...")

}//FIN DE LA FUNCIÓN
function piedra()
{
	switch(eleccionMaquina) {

		case 1: alert("Empate");
			ContadorDeEmpates++;
            break;
		case 2: alert("Perdiste");
			ContadorDePerdidas++;
            break;
		case 3: alert("Ganaste");
			ContadorDeGanadas++;
            break;
	}
	
	document.getElementById("txtIdGanadas").value=ContadorDeGanadas;
	document.getElementById("txtIdPerdidas").value=ContadorDePerdidas;
	document.getElementById("txtIdEmpatadas").value=ContadorDeEmpates;

	comenzar();

}//FIN DE LA FUNCIÓN
function papel()
{
    switch(eleccionMaquina) {

		case 1: alert("Ganaste");
			ContadorDeGanadas++;
            break;
		case 2: alert("Empate");
			ContadorDeEmpates++;
            break;
		case 3: alert("Perdiste");
			ContadorDePerdidas++;
            break;
	}

	document.getElementById("txtIdGanadas").value=ContadorDeGanadas;
	document.getElementById("txtIdPerdidas").value=ContadorDePerdidas;
	document.getElementById("txtIdEmpatadas").value=ContadorDeEmpates;
	
	comenzar();

}//FIN DE LA FUNCIÓN
function tijera()
{
    switch(eleccionMaquina) {

		case 1: alert("Perdiste");
			ContadorDePerdidas++;
            break;
		case 2: alert("Ganaste");
			ContadorDeGanadas++;
            break;
		case 3: alert("Empate");
			ContadorDeEmpates++;
            break;
	}

	document.getElementById("txtIdGanadas").value=ContadorDeGanadas;
	document.getElementById("txtIdPerdidas").value=ContadorDePerdidas;
	document.getElementById("txtIdEmpatadas").value=ContadorDeEmpates;
	
	comenzar();
}//FIN DE LA FUNCIÓN
function mostrarResultado()
{

}