const express = require('express');
const app = require('express')();
const server = require('http').createServer(app);

// configuración del socker server
const io = require('socket.io')(server);

// cesplegar el directorio público
app.use(express.static( __dirname + '/public' ) );

io.on('connection', (socket) => {
    console.log("Cliente conectado");
    console.log("ID del socket:", socket.id);

    // .emit emite un evento, son instrucciones que se disparan
    // mi primer argumento es el evento que se dispara y el segundo
    // argumento es el payload, el argumento que queremos enviar
    // al cliente
    // socket del lado del sevidor
    // revisar la config que hay en el html para terminar de entender
    socket.emit('welcome', 'dentro del server');
});

server.listen(8080, () => {
    console.log('Servidor corriendo en el puerto :8080');
});