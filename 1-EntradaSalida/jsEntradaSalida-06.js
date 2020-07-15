/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var numero1=parseInt(document.getElementById("txtIdNumeroUno").value);
	var numero2=parseInt(document.getElementById("txtIdNumeroDos").value);
	var resultado=numero1+numero2;
	alert("El resultado es: "+resultado);
}

