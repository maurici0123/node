const express = require('express')
const app = express()
const { engine } = require('express-handlebars')
const bodyParser = require('body-parser')
const Post = require('./models/post')

// Template engine
app.engine('handlebars', engine({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// body parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//rotas
app.get('/', function (req, res) {
	res.render('home')
})

app.get('/cad', function (req, res) {
	res.render('formulario')
})

app.post('/add', function (req, res) {
	Post.create({
		titulo: req.body.titulo,
		conteudo: req.body.conteudo
	}).then(function () {
		res.redirect('/')
	}).catch(function (error) {
		res.send(`houve um erro: ${error}`)
	})
})

app.listen(1221, function () {
	console.log('servidor rodando no http://localhost:1221')
})