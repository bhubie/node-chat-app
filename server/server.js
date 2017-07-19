const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const {generateMessage} = require ('./utils/message');
const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(public));

io.on('connection', (socket) => {
    

    socket.emit('newMessage', generateMessage('Admin', 'Welcome to the Chat app'));

    socket.broadcast.emit('newMessage', generateMessage('Admin', 'A new user has joined'));


    socket.on('createMessage', (message, callback) =>{
        console.log('createMesse', message);
        io.emit('newMessage', generateMessage(message.from, message.text));
        callback('This is from the server');
    });

    socket.on('createLocationMessage', (coords) => {
        io.emit('newMessage', generateMessage('Admin', `${coords.latitude}, ${coords.logitude}`))
    });

    socket.on('disconnect', () =>{
        console.log('User was disconnected');
    });
    
});



server.listen(port,() =>{
    console.log('server is up on port 3000');
});
