/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    let largo=parseFloat(document.getElementById("txtIdLargo").value);
    let ancho=parseFloat(document.getElementById("txtIdAncho").value);

    let rectangulo=(largo*2+ancho*2)*3;

    alert(`La cantidad de alambre para el terreno es de ${rectangulo}m`);
}
function Circulo () 
{
    let radio=parseFloat(document.getElementById("txtIdRadio").value);

    let circulo=3.1416*radio*2*3;

    alert(`La cantidad de alambre para el terreno es de ${circulo}m`);
}
function Materiales () 
{
    let largo=parseFloat(document.getElementById("txtIdLargo").value);
    let ancho=parseFloat(document.getElementById("txtIdAncho").value);

    let superficie=largo*ancho;
    let cal=superficie*3;
    let cemento=superficie*2;

    alert(`Se necesitan ${cemento} bolsas de cemento y ${cal} de cal.`);
}