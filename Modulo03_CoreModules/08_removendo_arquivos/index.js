const fs = require('fs')

fs.unlink('ArquivoLixo.txt', function(err) {

    if(err) {
        console.log('Erro na hora de apagar o arquivo:', err)
        return
    } else {
        console.log('Arquivo Removido!')
    }

})