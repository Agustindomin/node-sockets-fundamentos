// Recuperamos io desde server.js
const { io } = require('../server');

// Definimos los distintos eventos:
// .on ===> Escuchar ó recibir eventos / información
// .emit ===> Enviar ó emitir eventos / información

// Saber desde BackEnd cuando se está conectando el FrontEnd
io.on('connection', (client) => {

    console.log(`Usuario conectado`);

    // Enviamos una información llamada 'enviarMensaje' al FrontEnd, un objeto
    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a la aplicacion',
    });

    // Saber desde BackEnd cuando un usuario se ha desconectado
    client.on('disconnect', () => {
        console.log(`Usuario desconectado`);
    });

    // Escuchamos al cliente la información en enviarMensaje
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        // Con .emit enviamos el mensaje SÓLO al usuario que envia el mensaje!
        // client.emit('enviarMensaje', data);
        // Con .broadcast.emit enviamos el mensaje a TODOS los usuarios conectados!
        client.broadcast.emit('enviarMensaje', data);

        // // ejecutamos el callback del emisor
        // callback();

        // if (mensaje.usuario) {
        //     callback({
        //         resp: 'TODO SALIO BIEN!'
        //     });
        // } else {
        //     callback({
        //         resp: 'TODO SALIO MAL!!!!'
        //     });
        // }


    });
});