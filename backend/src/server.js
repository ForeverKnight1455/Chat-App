import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.route.js';
import messageRoute from './routes/message.route.js';
import { connectDB } from './lib/db.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import {app,server} from './lib/socket.js'
import path from "path";

dotenv.config();

app.use(express.json());
app.use(cookieParser())

app.use(cors({
    origin:"http://localhost:5173",
    credentials: true,
}))

app.use('/api/auth', authRoutes);
app.use('/api/message',messageRoute);

if(process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname,"../frontend/dist")));


    app.get("*",(req,res) => {
        res.sendFile(path.join(__dirname,"../frontend","dist","index.html"))
    })
}

server.listen(process.env.PORT, () => {
    console.log("Server is running on port " + process.env.PORT);
    console.log("http://localhost:" + process.env.PORT);
    connectDB();
});