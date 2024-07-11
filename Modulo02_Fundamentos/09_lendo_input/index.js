const readline = require('readline').createInterface({
input: process.stdin,
output: process.stdout,
})

readline.question('qual a sua linguagem preferida? ', (language) => {

if (language.toLowerCase() === 'python') {
    console.log('Isso nem é linguagem!')
} else if (language.toLowerCase() === 'c#'){
    console.log('Lá ele')
} else {
    console.log(`a minha linguagem preferida é: ${language}`)
}

readline.close()
})

//brincadeiras da parte.