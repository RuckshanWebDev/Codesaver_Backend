import cookieParser from 'cookie-parser'
import express from "express";
import dotenv from 'dotenv'
import connect from "./config/database.js";
import cors from 'cors'
import router from './routes/postRoute.js';
import { errorHandler, notFound } from './middlewares/errorMiddleware.js';

// Configurations
dotenv.config()
const app = express()

// Database
connect()

// Variables
const port = process.env.PORT || 5000

// Middlewares
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true
}))
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }))

// Routers
app.use('/api/post', router)

app.get('/', (req, res) => res.json({ message: "Hello from Node js Backend" }))

// Error Handlers
app.use(notFound)
app.use(errorHandler)

app.listen(port, () => {
    console.log(`✔ Server Running on ${port}`);
})

