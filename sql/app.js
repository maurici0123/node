const Sequelize = require('sequelize')
const sequelize = new Sequelize('sistemadecadastro', 'root', '2005', {
	host: 'localhost',
	dialect: 'mysql'
})

sequelize.authenticate().then(function () {
	console.log('Conectado ao banco de dados')
}).catch(function (erro) {
	console.log(`Erro ao conectar ao banco de dados: ${erro}`)
})

const postagem = sequelize.define('postagem', {
	titulo: {
		type: Sequelize.STRING
	},
	descrição: {
		type: Sequelize.TEXT
	}
})

//postagem.sync({ force: true })

postagem.create({
	titulo: 'clean code',
	descrição: 'livro de programação'
})