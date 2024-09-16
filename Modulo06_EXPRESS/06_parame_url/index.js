const express = require('express');

const app = express(); 

const port = 3000; // variavel de ambiente

const path = require('path');

const basePath = path.join(__dirname, 'templates');

app.get('/user/:id', (req, res) => {
    const id = req.params.id;   // leitura da tabela user, resgatando o id do banco de dados

    console.log(`estou buscando o usuario com id ${id}`); // exibindo o id do usuario

    res.sendFile(`${basePath}/users.html`);

}) // rota com parametro id 

app.get('/', (req, res) => {
    // req quando eu recebo um dado ex = usuario envio um formulario
    // a resposta é o que eu vou enviar para o usuario

    res.sendFile(`${basePath}/index.html`);

})

app.listen(port, () => {

    console.log(`Server is running on http://localhost:${port}`); // rodando na porta 3000

}); // função de callback
