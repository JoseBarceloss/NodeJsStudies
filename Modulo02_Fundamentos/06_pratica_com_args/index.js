//externo
const minimist = require('minimist');
const { soma } = require('./soma');

//interno
const Soma = require('./soma').soma

const args = minimist(process.argv.slice(2))

const a = parseInt(args['a'])
const b = parseInt(args['b'])

soma(a, b)

// no terminal node index.js --a=5 --b=10
// resultado no terminal: 15