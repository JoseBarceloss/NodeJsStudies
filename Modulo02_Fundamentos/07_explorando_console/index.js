//mais de um valor

const x = 10
const y = 'Batata'
const z = [1, 2]

console.log(x, y, z)

//contagem de impressões

console.count(`O valor de x é: ${x}, contagem`)
console.count(`O valor de x é: ${x}, contagem`)
console.count(`O valor de x é: ${x}, contagem`)
console.count(`O valor de x é: ${x}, contagem`)

//variavel entre string

console.log('eu gosto de %s', y)

// limpar console

setTimeout(() => {
    console.clear()
}, 3000)