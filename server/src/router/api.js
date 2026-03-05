import { Router } from "express"
import { readReports, writeReports } from '../bd/DBMethods.js'

export default function() {
  const router = new Router()

  // Получить все отчеты
  router.get('/posts', async (req, res) => {
    try {
      const reports = await readReports()
      res.status(200).json({ reports })
    } catch (error) {
      console.error("Ошибка при получении жалоб:", error)
      res.status(500).json({ message: "Error appeared while getting reports" })
    }
  })

  // Создать новый отчет
  router.post('/sendReport', async (req, res) => {
    try {
      const reports = await readReports()
      const newReport = req.body
      newReport.status = "pending"
      // добавляем новый отчет с уникальным id (например, timestamp или случайное число)
      newReport.id = Date.now().toString()

      reports.push(newReport)
      await writeReports(reports)

      res.status(201).json({ status: "success" })
    } catch (error) {
      console.error("Ошибка при сохранении жалобы:", error)
      res.status(500).json({ message: "Error appeared while sending report" })
    }
  })

  return router
}