const mongoose = require('mongoose')

mongoose.set('strictQuery', true)

async function main() {
	await`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@mau.mezrk.mongodb.net/`

	console.log('conectado com sucesso!')
}

main().catch(error => console.log(error))

module.exports = main