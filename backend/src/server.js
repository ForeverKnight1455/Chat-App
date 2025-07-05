import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.route.js';
import messageRoute from './routes/message.route.js';
import { connectDB } from './lib/db.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
dotenv.config();

const app = express();
app.use(express.json());
app.use(cookieParser())

app.use(cors({
    origin:"http://localhost:5173",
    credentials: true,
}))

app.use('/api/auth', authRoutes);
app.use('api/message',messageRoute);

app.listen(process.env.PORT, () => {
    console.log("Server is running on port " + process.env.PORT);
    console.log("http://localhost:" + process.env.PORT);
    connectDB();
});