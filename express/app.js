const express = require('express')
const app = express()

app.get('/', function(req, res){
	res.send('seja bem-vindo')
})

app.get('/test', function(req, res){
	res.send('seja bem-vindo à minha página de teste')
})

app.listen(5566, function (){
	console.log('servidor rodando na port:5566')
})