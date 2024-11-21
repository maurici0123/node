const express = require('express')
const { engine } = require('express-handlebars')
const Sequelize = require('sequelize')
const app = express()

// Template engine
app.engine('handlebars', engine({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// connect database
const sequelize = new Sequelize('sistemadecadastro', 'root', '2005', {
	host: 'localhost',
	dialect: 'mysql'
})
sequelize.authenticate().then(function () {
	console.log('Conectado ao banco de dados')
}).catch(function (erro) {
	console.log(`Erro ao conectar ao banco de dados: ${erro}`)
})

//rotas
app.get('/cad', function (req, res) {
	res.send('testando')
})

app.listen(1221, function () {
	console.log('servidor rodando na port:1221')
})