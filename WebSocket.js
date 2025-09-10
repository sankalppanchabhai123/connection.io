// const io = require('io');
const WebSocket = require('ws')
const server = new WebSocket.Server({ port: 3000 });


server.on("connection", (socket) => {
    console.log("Client connected");

    socket.send("My web socket");

    socket.on("message", (message) => {
        console.log(message);
        socket.send("hello from server");
    })
})
console.log("WebSocket server running at ws://localhost:3000")
