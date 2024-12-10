const mongoose = require('mongoose')

const connectToDatabase = async () => {
  try {
    await mongoose.connect(`mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@mau.mezrk.mongodb.net/`, {
      dbName: "mau",
    })
    console.log("Conexão efetuada com sucesso!");
  } catch (error) {
    console.error('Ocorreu um erro ao realizar a conexão! Erro: ', error)
  }
}

module.exports = connectToDatabase;
