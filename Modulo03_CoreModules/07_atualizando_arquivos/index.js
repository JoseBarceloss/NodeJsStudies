const http = require("http")
const fs = require("fs")

const port = 3000;

const server = http.createServer((req, res) => {

const urlInfo = require("url").parse(req.url, true)
const carro = urlInfo.query.carro;

if(!carro) {
    fs.readFile('index.html', function(err, data) {
    
        res.writeHead(200, {'content-Type': 'text/html'})
        res.write(data)

        return res.end()
    })
} else {

    const carroNewLine = carro + '\r\n'

    fs.appendFile("DataCarro.txt", carroNewLine, function(err, data) {
        res.writeHead(302, {
            Location: '/',
        })
        return res.end()
    })
}

})

server.listen(port, () => {
console.log(`Servidor rodando na porta: ${port}`)
})