const path = require('path');
const express = require('express')
const morgan = require('morgan')
const exphbs = require('express-handlebars');


const app = express()
const port = 3000

app.use(express.static('src/public'))


//Http logger
app.use(morgan('combined'))
//template engine
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'src/resources/views'));
//


//
app.get('/', (req, res) => {
    res.render('home');
})

app.get('/new', (req, res) => {
    res.render('new');
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})