const fs = require('fs');

fs.stat('NovoArquivo.txt', (err, stats) => {
    if(err) {
        console.log('Erro na hora de ler o arquivo:', err)
        return
    }

    console.log(stats.isFile()) // é um arquivo? $true
    console.log(stats.isDirectory()) // é um diretorio? $false
    console.log(stats.isSymbolicLink()) // é um link simbolico? $false
    console.log(stats.ctime) // data de criação? $2024-08-05T15:03:51.905Z
    console.log(stats.size) // tamanho $0
})