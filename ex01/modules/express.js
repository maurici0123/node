const express = require('express')
const UserModel = require('../src/models/user.model')

const port = 8182
const app = express()

app.use(express.json())

app.set('view engine', 'ejs')
app.set('views', 'src/views')

app.use((req, res, next) => {
	console.log(`requeste type: ${req.method}`)
	console.log(`date: ${new Date}`)

	next()
})

app.get('/views/users', async (req, res) => {
	const users = await UserModel.find({})

	res.render('index', { users })
})

app.get('/users', async (req, res) => {
	try {
		const users = await UserModel.find({})

		res.status(200).json(users)
	} catch (error) {
		res.status(500).send(error.message)
	}
})

app.get('/users/:id', async (req, res) => {
	try {
		const id = req.params.id

		const users = await UserModel.findById(id)
		return res.status(200).json(users)
	} catch (error) {
		res.status(500).send(error.message)
	}
})

app.post('/users', async (req, res) => {
	try {
		const user = await UserModel.create(req.body)
		res.status(201).json(user)
	} catch (error) {
		res.status(500).send(error.message)
	}
})

app.patch('/users/:id', async (req, res) => {
	try {
		const id = req.params.id

		const user = await UserModel.findByIdAndUpdate(id, req.body, { new: true })
		res.status(200).json(user)
	} catch (error) {
		res.status(500).send(error.message)
	}
})

app.delete('/users/:id', async (req, res) => {
	try {
		const id = req.params.id

		const user = await UserModel.findOneAndDelete(id)
		res.status(200).json(user)
	} catch (error) {
		res.status(500).send(error.message)
	}
})

app.listen(port, () => console.log('servior rodando: http://localhost:8182'))