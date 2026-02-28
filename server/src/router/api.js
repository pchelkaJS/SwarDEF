import { Router } from "express"
import reportModel from "../models/report.model.js"

const router = new Router()

function route(route) {
    return `/api/${route}`
}

router.get(route('posts'), async (req, res) => {
    try {
        const reports = await reportModel.find()
        res.status(201).json({reports})
    } catch (error) {
        console.error("Ошибка при получении жалоб:", error)
        res.status(500).json({ message: "Error appeared while getting reports" })
    }
})

router.post(route('sendReport') , async (req, res) => {
    try {
        const newReport = new reportModel(req.body)
        newReport.status = "pending"
        const status = await newReport.save()
        res.status(201).json({"status": "sucess"})
    } catch (error) {
        console.error("Ошибка при сохранении жалобы:", error)
        res.status(500).json({ message: "Error appeared while sending report" })
    }
})

export default router