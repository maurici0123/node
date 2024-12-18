const { string } = require('mathjs')
const mongoose = require('mongoose')

const Schema = mongoose.Schema

const PictureSchema = new Schema({
	name: {type: string, required: true},
	src: {type: string, required: true}
})

module.exports = mongoose.model('Picture', PictureSchema)