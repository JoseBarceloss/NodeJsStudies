const fs = require('fs')

fs.rename('NomeErrado.txt', 'NomeCerto.txt', function(err) {

    if(err) {
        console.log('Erro ao trocar o nome de um dos arquivos:', err)
        return
    } else {
        console.log('Arquivo Renomeado!')
    }
})