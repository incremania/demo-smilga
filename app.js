const express = require('express');
const path = require('path')
const app = express();

// app.use(express.static('./public'))

app.get('/', (req, res) => {
    res.json({"hello": "world"})
})

app.all('*', (req, res) => {
    res.send('route not available')
})

app.listen(5000, () => {
    console.log('listening on port 5000');
})