const fs = require('fs')
const path = require('path')

// criar pasta
// fs.mkdir(path.join(__dirname, 'test'), error => {
// 	error ? console.log(error) : console.log('pasta criado com sucesso!')
// })

// criar arquivo
// fs.writeFile(path.join(__dirname, 'test', 'test.txt'), 'hello node', error => {
// 	error ? console.log(error) : console.log('arquivo criado com sucesso!')
// })

// adicionar à um arquivo
// fs.appendFile(path.join(__dirname, 'test', 'test.txt'), ' hello world', error => {
// 	error ? console.log(error) : console.log('arquivo modificado com sucesso!')
// })

// ler arquivo
// fs.readFile(path.join(__dirname, 'test', 'test.txt'), 'utf8', (error, data) => {
// 	error ? console.log(error) : console.log(data)
// })