const express = require('express');

const app = express(); 

const port = 3000; // variavel de ambiente

const path = require('path');

const basePath = path.join(__dirname, 'templates');

const checkAuth = function (req, res, next) {
    req.authStatus = true;

    if(req.authStatus) {
        console.log('Usuario autenticado');
        next();
    } else {
        console.log('usuario nao autenticado');
    }
}

app.use(checkAuth)

app.get('/', (req, res) => {
    // req quando eu recebo um dado ex = usuario envio um formulario
    // a resposta é o que eu vou enviar para o usuario

    res.sendFile(`${basePath}/index.html`);

})

app.listen(port, () => {

    console.log(`Server is running on http://localhost:${port}`); // rodando na porta 3000

}); // função de callback
