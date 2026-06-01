import express from 'express'
import cors from 'cors'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const app = express()
const CSV_PATH = path.join(__dirname, 'contacts.csv')

app.use(cors())
app.use(express.json())

if (!fs.existsSync(CSV_PATH)) {
  fs.writeFileSync(CSV_PATH, 'Timestamp,Name,Email,Company,Message\n')
}

app.post('/api/contact', (req, res) => {
  const { name, email, company, message } = req.body
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required.' })
  }
  const escape = (val) => `"${String(val ?? '').replace(/"/g, '""')}"`
  const row = [
    escape(new Date().toISOString()),
    escape(name),
    escape(email),
    escape(company),
    escape(message),
  ].join(',') + '\n'
  fs.appendFileSync(CSV_PATH, row)
  res.json({ success: true })
})

const server = app.listen(3002)
server.on('listening', () => console.log('Contact API running on http://localhost:3002'))
server.on('error', (err) => { console.error('Server error:', err.message); process.exit(1) })
