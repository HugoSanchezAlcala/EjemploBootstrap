/*
var app = {
	inicio: function() {
		$("#boton").click( function() {
			alert("Presionaste el botón.");
		});
	}
}

if ( "addEventListener" in document) {
	document.addEventListener( "DOMContentLoaded", function() {
		app.inicio();
	}, false);
}
*/
$(document).ready( function() {
	//alert("Hola mundo!");
	$("#boton").click( function() {
		alert("Presionaste el botón.");
	});
});