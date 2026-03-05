import fs from 'fs/promises'
import path from 'path'

const filePath = path.resolve('src', 'bd', 'reports.json')

// Функция для чтения данных
export async function readReports() {
    try {
        const data = await fs.readFile(filePath, 'utf-8')
        return JSON.parse(data)
    } catch (err) {
        console.error('Ошибка чтения файла:', err)
        return [] // В случае ошибки возвращать пустой массив
    }
}

// Функция для записи данных
export async function writeReports(reports) {
    try {
        await fs.writeFile(filePath, JSON.stringify(reports, null, 2))
    } catch (err) {
        console.error('Ошибка записи файла:', err)
    }
}