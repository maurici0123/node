import 'dotenv/config'
import express from 'express'
import { PrismaClient } from './generated/prisma/client.ts'

const prisma = new PrismaClient()

const app = express()
app.use(express.json())

app.get('/users', async (req, res) => {
  
  const users = await prisma.user.findMany()

  res.json(users)
})

app.post('/users', async (req, res) => {

  await prisma.user.create({
    data: {
      email: req.body.email,
      name: req.body.name,
      age: req.body.age
    }
  })

  res.status(201).json(req.body)
})

app.put('/users/:id', async (req, res) => {

  await prisma.user.update({
    where: {
      id: req.params.id
    },
    data: {
      email: req.body.email,
      name: req.body.name,        
      age: req.body.age
    }
  })

  res.status(201).json(req.body)
})

app.delete('/users/:id', async (req, res) => {

  await prisma.user.delete({
    where: {
      id: req.params.id
    }
  })

  res.json({message: 'User deleted'})
})

app.listen(3000)