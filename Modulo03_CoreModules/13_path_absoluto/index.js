const path = require('path')

//path absoluto

console.log(path.resolve('teste.txt'))

//formar um path

const midFolder = 'relatorios' // pasta intermidiaria
const fileName = 'barcelos.txt' // nome do arquivo

const finalPath = path.join('/', 'arquivos', midFolder, fileName) // união dos arquivos usando path.join

console.log(finalPath) // $ /arquivos/relatorios/barcelos.txt