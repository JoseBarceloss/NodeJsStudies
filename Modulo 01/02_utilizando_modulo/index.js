const fs = require('fs') /// file System

// fs ele le algum arquivo

fs.readFile('arquivo.txt', 'utf8', (err, data) => {

    if(err){
        console.log(err)
        return
    }

    console.log(data)
}) 