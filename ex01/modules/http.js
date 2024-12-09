const http = require('http')

const port = 8182

const server = http.createServer((req, res) => {
	if (req.url === '/home') {
		res.writeHead(200, { 'Content-type': 'text/html' })
		res.end('<h1>Home Page com http</h1>')
	}

	if (req.url === '/users'){
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
		res.writeHead(200, { 'Content-type': 'application/json' })
		res.end(JSON.stringify(users))

	}
})

server.listen(port, () => console.log('servior rodando: http://localhost:8182'))