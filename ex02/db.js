const mongoose = require('mongoose')

mongoose.set('strictQuery', true)

async function main() {
	await mongoose.connect(
		`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@mau.mezrk.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
		{
			useNewUrlParser: true,
			useUnifiedTopology: true,
		}

		//await`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@mau.mezrk.mongodb.net/`
	);


	console.log('conectado com sucesso!')
}

main().catch(error => console.log(error))

module.exports = main