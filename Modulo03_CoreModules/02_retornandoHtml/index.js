const htpp = require("http")

const port = 3000;

const server = htpp.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Contenty-Type', 'text/html')
    res.end('<h1>Olá, Este é meu primeiro server com HTML!</h1>')
})

server.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`)
})