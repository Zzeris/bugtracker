require('dotenv').config({ path: '.env' });

const express = require('express')
const path = require('path')

const routes = require('./routes')

const app = express()

app.set('view engine', 'ejs')
app.set('views', path.resolve(__dirname, 'views'))

app.use(express.urlencoded({ extended: true }))
app.use(routes)

app.listen(3333, err => {
    if (err) {
        console.log('Ocorreu um erro: ', err)
    } else {
        console.log('Bugtracker rodando em http://localhost:3333')
    }
})