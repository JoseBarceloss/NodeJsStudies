const htpp = require("http")

const port = 3000;

const server = htpp.createServer((req, res) => {

    res.write('Oi HTTP <3')
    res.end()

})

server.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`)
})