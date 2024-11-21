const express = require('express')
const app = express()

app.get('/', function (req, res) {
	res.sendFile(__dirname + '/html/index.html')
})

app.get('/test', function (req, res) {
	res.send('seja bem-vindo à minha página de teste')
})

app.get('/ola/:nome/:idade', function (req, res) {
	res.send(`ola ${req.params.nome} você tem ${req.params.idade} anos`)
})

app.listen(5566, function () {
	console.log('servidor rodando na port:5566')
})