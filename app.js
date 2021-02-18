const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

app.get('/data', (req, res) => {
    res.send(`It's heeeere!`)
})

app.get('/data/:id', (req, res) => {
    res.send(`It's heeeere!`)
})

module.exports = {
    app
}