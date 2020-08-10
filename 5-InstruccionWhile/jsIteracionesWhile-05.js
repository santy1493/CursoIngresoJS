/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sexo;
	sexo = prompt("Ingrese f ó m .");

	while(sexo!='f' && sexo!='m') {

		sexo = prompt("Sexo invalido. Ingrese f ó m .");
	}

	document.getElementById("txtIdSexo").value=sexo;

}//FIN DE LA FUNCIÓN