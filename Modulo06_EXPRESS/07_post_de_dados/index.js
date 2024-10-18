const express = require('express');
const app = express(); 
const port = 3000; // variavel de ambiente
const path = require('path');

//ler o body

app.use(
    express.urlencoded({
        extended: true,
    }),
)
app.use(express.json())


const basePath = path.join(__dirname, 'templates');

// DADOS POST DO 07_post_de_dados

app.get('/users/create', (req, res) => {
    res.sendFile(`${basePath}/usersForm.html`)
})

app.post('/users/save', (req, res) => {
    console.log(req.body)

    const name = req.body.name
    const age = req.body.age

    console.log(`O nome do Usuario é ${name} e ele tem ${age} anos`)

    res.sendFile(`${basePath}/usersForm.html`)
})

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
}); 
