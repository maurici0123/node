const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
	FirstName: {
		type: String,
		required: true
	},
	LastName: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
		minlength: 7
	}
})

const UserModel = mongoose.model('User', userSchema)

module.exports = UserModel