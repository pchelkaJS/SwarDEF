import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import helmet from "helmet"
import { rateLimit } from "express-rate-limit"
import morgan from "morgan"

// Импорт маршрутов
import api from "./src/router/api.js"

dotenv.config()

const app = express()

// Настройка лимитера
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
}))

// Подключение роутеров
app.use('/api', api())

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});