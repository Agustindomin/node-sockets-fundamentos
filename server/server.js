//==========
// SOCKETS
//==========
const express = require('express');

// Cargamos el paquete socket.io
const socketIO = require('socket.io');

// Cargamos servidor HTTP natiovpo de node.js
const http = require('http');

const path = require('path');

const app = express();

// Definimos el servidor HTTP
let server = http.createServer(app); // le pasamos el objeto app de express

const publicPath = path.resolve(__dirname, '../public'); // Directorio publico
const port = process.env.PORT || 3000; // puerto

app.use(express.static(publicPath)); // activamos el directorio publico

// Inicializamos el socket IO
// IO = esta es la comunicacion del backend
// let io = socketIO(server);
module.exports.io = socketIO(server); // exportamos io
require('./sockets/socket'); // Importamos /sockets/socket.js


// En vez de escuchar en el objeto app de express, tenemos que usar el objeto server de http
server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});