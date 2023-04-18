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
let fechaActual = moment().format('yyyy-MM-DD');
let maniana = moment(fechaActual).add(1, 'days').format('yyyy-MM-DD');
// Define fecha minima de partida al día actual
fechaPartida.min = fechaActual;
fechaPartida.value = fechaActual;
// Define fecha minima de partida al día actual +1
fechaRetorno.min = maniana;
fechaRetorno.value = maniana;

formViaje.addEventListener('submit', (event) => {
	event.preventDefault();
	validarOrigen();
});
// Cuando se haga un cambio en la fecha de partida, a la fecha de vuelta se le asigna un valor de fecha de partida +1
fechaPartida.addEventListener('change', () => {
	console.log('cambio');
	let partida = fechaPartida.value;
	let retorno = fechaRetorno;
	retorno.min = moment(partida).add(1, 'days').format('yyyy-MM-DD');
	retorno.value = moment(partida).add(1, 'days').format('yyyy-MM-DD');
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
	itinerarioFechaOrigen.innerHTML = moment(fechaPartida.value).format(
		'DD-MM-yyyy'
	);
	itinerarioFechaDestino.innerHTML = moment(fechaRetorno.value).format(
		'DD-MM-yyyy'
	);
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
