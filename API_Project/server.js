import express from 'express'
import { PrismaClient } from '../generated/prisma/client'

const prisma = new PrismaClient({ adapter })

const app = express()
app.use(express.json())

const users =[]

app.post('/users', (req, res) => {

  users.push(req.body)

  res.send('Requisição POST')
})

app.get('/users', (req, res) => {
  res.json(users)
})

app.listen(3000)