const htpp = require("http")
const fs = require("fs")

const port = 3000;

const server = htpp.createServer((req, res) => {
    fs.readFile('mensagem.html', function(err, data) {
        
        res.writeHead(200, {'content-Type': 'text/html'})
        res.write(data)

        return res.end()
    })

})

server.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`)
})