const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
const cors = require('cors')
const { plants } = require('./data.js')

app.use(cors())

app.get('/', (req, res) => {
    res.json(`Welcome to the API`)
})

app.get('/plants', (req, res) => {
    res.json({ results: plants })
})

app.get('/plants/:id', (req, res) => {
    const id = Number(req.params.id);
    const selectedPlant = plants.find((plant) => {
        return plant.id === id
    });
    res.json({ results: selectedPlant });
})

module.exports = {
    app
}