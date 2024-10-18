const express = require('express')
const router = express.Router()
const path = require('path')

const basePath = path.join(__dirname, '../templates');

// DADOS POST DO 07_post_de_dados

router.get('/create', (req, res) => {
    res.sendFile(`${basePath}/usersForm.html`)
})

router.post('/save', (req, res) => {
    console.log(req.body)

    const name = req.body.name
    const age = req.body.age

    console.log(`O nome do Usuario é ${name} e ele tem ${age} anos`)

    res.sendFile(`${basePath}/usersForm.html`)
})

router.get('/:id', (req, res) => {
    const id = req.params.id;   // leitura da tabela user, resgatando o id do banco de dados
    console.log(`estou buscando o usuario com id ${id}`); // exibindo o id do usuario
    res.sendFile(`${basePath}/users.html`);
})

module.exports = router