//const Person = require('./person')
// const person = new Person('mau')
// require('./modules/path')
// require('./modules/fs')
// require('./modules/http')
//require('./modules/express')

const dotenv = require('dotenv')
const coneectToDatabase = require('./src/database/connect')

dotenv.config()

coneectToDatabase()