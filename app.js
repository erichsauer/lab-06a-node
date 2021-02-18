const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
const cors = require('cors')
const { plants } = require('./data.js')

app.use(cors())

app.get('/', (req, res) => {
    res.send(`Welcome to the API`)
})

app.get('/data', (req, res) => {
    res.send({ plants })
})

app.get('/data/:id', (req, res) => {
    res.send(`Individual plant`)
})

module.exports = {
    app
}