const express = require('express');
const app = express(); 
const port = 3000; // variavel de ambiente
const path = require('path');
const users = require('./users')

//ler o body

app.use(
    express.urlencoded({
        extended: true,
    }),
)
app.use(express.json())

const basePath = path.join(__dirname, 'templates');

app.use('/users', users)

app.get('/', (req, res) => {
    // req quando eu recebo um dado ex = usuario envio um formulario
    // a resposta é o que eu vou enviar para o usuario
    res.sendFile(`${basePath}/index.html`);
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`); // rodando na porta 3000
}); 
