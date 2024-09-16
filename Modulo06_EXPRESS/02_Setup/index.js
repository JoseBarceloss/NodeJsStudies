const express = require('express');

const app = express(); 

const port = 3000; // variavel de ambiente

app.get('/', (req, res) => {
    // req quando eu recebo um dado ex = usuario envio um formulario
    // a resposta é o que eu vou enviar para o usuario

    res.send('Hello World');

})

app.listen(port, () => {

    console.log(`Server is running on http://localhost:${port}`); // rodando na porta 3000

}); // função de callback
