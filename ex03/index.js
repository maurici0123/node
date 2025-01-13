const fs = require('fs')
const path = require('path')

const raiz = './arquivos'
var data = []
var aux = 0

function listarArquivos(raiz) {
	const fileOrPast = fs.readdirSync(raiz)

	fileOrPast.map(arquivo => {
		const caminho = path.join(raiz, arquivo)
		
		const stats = fs.statSync(caminho)
		if (stats.isDirectory()) {
			listarArquivos(caminho)
		} else {
			data[aux] = {
				nome: path.basename(caminho),
				caminho: path.posix.join(...caminho.split(path.sep)),
				tamanho: `${stats.size} Bytes`,
			}
			aux++
		}
	})
}

listarArquivos(raiz)
console.log(data)