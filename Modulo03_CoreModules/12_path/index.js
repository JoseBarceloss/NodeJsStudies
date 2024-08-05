const path = require('path')

const customPath = "/relatorio/barcelos/relatorio01.pdf"

console.log(path.dirname(customPath)) // $ relatorio/barcelos
console.log(path.basename(customPath)) // $ relatorio01.pdf
console.log(path.extname(customPath)) // $ .pdf