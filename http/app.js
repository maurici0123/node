const http = require('http')

http.createServer(function(req, res){
	res.end('ola')
}).listen('9090')

console.log('o servidor está rodando')