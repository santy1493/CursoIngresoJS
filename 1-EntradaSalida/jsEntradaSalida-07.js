/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var numero1=parseInt(txtIdNumeroUno.value);
	var numero2=parseInt(txtIdNumeroDos.value);
	alert("La suma da "+(numero1+numero2));
}

function restar()
{
	var numero1=parseInt(txtIdNumeroUno.value);
	var numero2=parseInt(txtIdNumeroDos.value);
	alert("La resta da "+(numero1-numero2));
}

function multiplicar()
{ 
	var numero1=parseInt(txtIdNumeroUno.value);
	var numero2=parseInt(txtIdNumeroDos.value);
	alert("La multiplicacion da "+(numero1*numero2));
}

function dividir()
{
	var numero1=parseInt(txtIdNumeroUno.value);
	var numero2=parseInt(txtIdNumeroDos.value);
	alert("La division da "+(numero1/numero2));
}

