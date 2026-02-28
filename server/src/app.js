import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import mongoose from "mongoose"
import helmet from "helmet"
import { rateLimit } from "express-rate-limit"
import morgan from "morgan"

import api from "./router/api.js"

dotenv.config()

const app = express()

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 100
})

app.use(morgan('dev'))
app.use(limiter)
app.use(helmet())
app.use(express.json())
app.use(cors({
    origin: process.env.CLIENT_URL,
    methods: ['GET', 'POST']
}));
// app.use((req, res, next) => {
//     if (req.headers.referer === process.env.CLIENT_URL) {
//         next()
//     } else {
//         res.sendStatus(404)
//     }
// })
app.use(api)

app.listen(process.env.PORT)