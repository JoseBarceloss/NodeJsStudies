const fs = require('fs')

const pasta = './minhapasta'

if(!fs.existsSync(pasta)){
    console.log (`não existe a pasta ${pasta}` ) 
    fs.mkdirSync(pasta)

} else if (fs.existsSync(pasta)) {

    console.log(`Existe a pasta com o nome ${pasta}`)
}