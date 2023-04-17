let formViaje = document.getElementById('formViaje');
let origen = document.getElementById('origen');
let destino = document.getElementById('destino');
let fechaPartida = document.getElementById('origenFecha');
let fechaRetorno = document.getElementById('destinoFecha');
let itinerarioOrigen = document.getElementById('itinerarioOrigen');
let itinerarioDestino = document.getElementById('itinerarioDestino');
let itinerarioFechaOrigen = document.getElementById('itinerarioFechaOrigen');
let itinerarioFechaDestino = document.getElementById('itinerarioFechaDestino');
let mensajeEscala = document.getElementById('mensajeEscala');

formViaje.addEventListener('submit', (event) => {
	event.preventDefault();
	validarOrigen();
});

let validarOrigen = () => {
	itinerarioOrigen.innerHTML = origen.value;
	itinerarioDestino.innerHTML = destino.value;
	if (itinerarioOrigen.innerHTML == '' || itinerarioDestino.innerHTML == '') {
		alert('Debes seleccionar origen y destino para tu viaje');
	} else {
		validarFecha();
	}
};
let validarFecha = () => {
	itinerarioFechaOrigen.innerHTML = fechaPartida.value;
	itinerarioFechaDestino.innerHTML = fechaRetorno.value;
	if (
		itinerarioFechaOrigen.innerHTML == '' ||
		itinerarioFechaDestino.innerHTML == ''
	) {
		alert('Debes seleccionar fecha de partida y vuelta para tu viaje');
	} else {
		generarComentario();
	}
};

let generarComentario = () => {
	if (
		(itinerarioOrigen.innerText == 'Chicago' &&
			itinerarioDestino.innerText == 'Venice') ||
		(itinerarioOrigen.innerText == 'Boston' &&
			itinerarioDestino.innerText == 'Paris')
	) {
		mensajeEscala.innerHTML = '¡Ojo! Tu vuelo tiene una escala';
	} else {
		mensajeEscala.innerHTML = '¡Tu vuelo no tiene una escala!';
	}
};
