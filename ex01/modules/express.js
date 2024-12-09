const express = require('express')

const port = 8182
const app = express()

app.get('/home', (req, res) => {
	res.send('<h1>Home Page com Express')
})

app.get('/users', (req, res) =>{
	const users = [
		{
			name: 'bruno',
			email: 'bruno@gmail.com'
		},
		{
			name: 'fernanda',
			email: 'fer@hotmail.com'
		}
	]
	res.json(users)
})

app.listen(port, () => console.log('servior rodando: http://localhost:8182'))