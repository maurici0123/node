const express = require('express')
const { engine } = require('express-handlebars')
const bodyParser = require('body-parser')
const Sequelize = require('sequelize')
const app = express()

// Template engine
app.engine('handlebars', engine({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// body parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

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
	res.render('formulario')
})

app.post('/add', function(req, res){
	req.body.conteudo
	res.send(`texto: ${req.body.titulo}, conteudo: ${req.body.conteudo}`)
})

app.listen(1221, function () {
	console.log('servidor rodando no http://localhost/:1221')
})