const Sequelize = require('sequelize')

const sequelize = new Sequelize('postapp', 'root', '2005', {
	host: 'localhost',
	dialect: 'mysql'
})

module.exports = {
	Sequelize: Sequelize,
	sequelize: sequelize
}