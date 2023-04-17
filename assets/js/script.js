let origen = document.getElementById('origen');
let destino = document.getElementById('destino');
let fechaPartida = document.getElementById('origenFecha');
let fechaRetorno = document.getElementById('destinoFecha');
let itinerarioOrigen = document.getElementById('itinerarioOrigen');
let itinerarioDestino = document.getElementById('itinerarioDestino');
let itinerarioFechaOrigen = document.getElementById('itinerarioFechaOrigen');
let itinerarioFechaDestino = document.getElementById('itinerarioFechaDestino');
let mensajeEscala = document.getElementById('mensajeEscala');

origen.addEventListener('change', () => {
	itinerarioOrigen.innerHTML = origen.value;
	generarComentario();
});
destino.addEventListener('change', () => {
	itinerarioDestino.innerHTML = destino.value;
	generarComentario();
});
fechaPartida.addEventListener('change', () => {
	itinerarioFechaOrigen.innerHTML = fechaPartida.value;
});
fechaRetorno.addEventListener('change', () => {
	itinerarioFechaDestino.innerHTML = fechaRetorno.value;
});

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
