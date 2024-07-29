const x = 10 

try{
     x = 2
} catch (err) {
    console.log(`Erro: ${err}`)
}

// com o try cat eu consegui saber que o erro foi de atribuição, mas o código continuou rodando.
// se eu colocasse fora do try catch, o código pararia de rodar e eu não conseguiria ver o erro porque seria um erro destrutivo.