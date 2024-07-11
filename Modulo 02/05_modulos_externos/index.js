const minimist = require('minimist');

const args = minimist(process.argv.slice(2))

console.log(args)

const nome = args['nome']
const profissao = args['profissao']
const empresa = args['empresa']

console.log(nome, profissao, empresa)

console.log(`o ${nome} trabalha como ${profissao} no ${empresa}.`)