var socket = io(); // Usamos var en vez de let para aumentar la compatibilidad con los navegadores

// Definimos los distintos eventos:
// .on ===> Escuchar ó recibir eventos / información
// .emit ===> Enviar ó emitir eventos / información


// Saber desde FrontEnd cuando está conectado al servidor BackEnd
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

// Saber desde FrontEnd cuando se ha desconectado del servidor BackEnd
socket.on('disconnect', function() {
    console.log('Perdimos conexión con el servidor');
});

// Enviamos una información llamada 'enviarMensaje' al BackEnd, puede ser numeros, cadenas, etc, pero lo normal es un objeto
socket.emit('enviarMensaje', {
    usuario: 'Agustin',
    mensaje: 'Hola Mundo',
}, function(resp) { // respuesta del servidor al envío
    console.log('Respuesta server:', resp);
});

// Recibimos una información llamada 'enviarMensaje' desde el BackEnd
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor:', mensaje);
});