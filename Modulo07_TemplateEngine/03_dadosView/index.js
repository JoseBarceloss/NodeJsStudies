const express = require('express')
const exphbs = require('express-handlebars')

const port = 3000;

const app = express();

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/', (req, res) => {

    const user = { 
        name: "Barcelos",
        surname: "Freitas",
        age: 22,
        city: "Canoas",
        state: "RS"
    };
    
    const palavra = 'teste'

    res.render('home', {user: user, palavra})
})

app.listen (port, () => {
    console.log(`App funcionando! ${port} `)
})