const path = require('path');
const http = require('http');
const express = require('express');
const socketIo = require('socket.io');

const publicPath = path.join(__dirname, '../public')
const port = process.env.PORT || 3000

const app = express()
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static(publicPath))


io.on('connection', (socket)=>{
    console.log('New user connected');

    socket.on('disconnect', ()=>{
        console.log('User was disconnected');
    });
});


server.listen(port, ()=>{
    console.log(`Server is up on port ${port}`);
});