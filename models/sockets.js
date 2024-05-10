class Sockets{

    constructor(io){
        this.io = io;
        this.socketEvents();
    }

    socketEvents(){
        // On connection
        this.io.on('connection', (socket) => {
            // escuchar evento
            socket.on('mensaje-a-server', (data) => {
                this.io.emit('mostrar-mensaje', data);
            });
        });
        
    }

}

module.exports = Sockets;