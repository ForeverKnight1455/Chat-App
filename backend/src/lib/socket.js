import { server } from 'socket.io';
import http from 'http';
import express from 'express';

const app = express();
const server=http.createServer(app);

const io = new server(server,{
    cors:{
        origins: ["http://localhost:5173"],
    }
})

io.on("connection",(socket)=>{
    console.log("user connected:",socket.id);

    socket.on("disconnect",() => {
        console.log("a user disconnected: ",socket.id)
    });
})

export { io,app,server };