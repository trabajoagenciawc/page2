//alert("<p>aleert</p>");
//document.write("documet.write para ver que pasa");
//console.log("console.log para ver que pasa"); 


/*
function validar()
{
	var usuario = document.getElementById("usuario").value;
	var pass = document.getElementById("pass").value;

	if(usuario=="modelo" && pass == "12345")
	{
		alert("usuario y contraseña validos")
	}
	else
	{
		alert("verifique sus datos"); 
	}
}

**/

/* este es el del contratro **/
function validar()
{
	var usuario = document.getElementById("usuario").value;
	var pass = document.getElementById("pass").value;

	if(usuario=="modelo" && pass == "modelo")
	{
		document.getElementById('content').style.display = 'block'; 
		document.getElementById('tabla').style.display = 'none';
		setTimeout ("refresh()", 300000);
	}
	else
	{
		alert("Verifique sus datos");
		setTimeout ("refresh()");
	}
}


function refresh(){
	location.href = location.href;
	// location.href="https://instagram.com";
}


/**
function hide()
{
	document.getElementById('tabla').style.display = 'block';
	document.getElementById('content').style.display = 'none';
}
*/



/**
function refresh(){
	setTimeout("document.location = document.location");
}
*/

// var numero = Math.random();
// document.write(numero * 10);





/** 
setTimeout(bye, 3000);

console.log('hello');

function bye(){
	console.log('goodbye');
}



function refresh(){
	location.href = location.href;
}


function refresh(){
	setTimeout("document.location = document.location", 3000);
}



var numero = Math.random();
document.write(numero * 10);

setInterval(function(){
	location.href = location.href;
}, 1000 * 3);

setTimeout("document.location = document.location", 3000);
*/



// function vercontrato()
// {
// 	document.getElementById('tabla').style.display = 'block';
// 	document.getElementById('content').style.display = 'block';
// }


// function cerrarcontrato()
// {
// 	document.getElementById('tabla').style.display = 'block';
// 	document.getElementById('content').style.display = 'none';
// }









/**
function mostrarSeguir()
{
	document.getElementById('premio').style.display = 'block';
	document.getElementById('triste').style.display = 'none';
}

function ocultarpremio()
{
	document.getElementById('premio').style.display = 'none';
	document.getElementById('triste').style.display = 'block';
}
*/












































































