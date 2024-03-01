require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const router = require('./routes/router')

const app = express()
app.use(express.json())
app.use(cors())

const PORT = process.env.PORT || 4000

app.use('/api/cart', router)

mongoose.connect(process.env.MONGO_URL)
.then(() => {
    console.log('Connected to database');
})
.catch(() => {
    console.log('Error connecting to database');
})

app.get('/', (req, res) => {
    res.send('Hello')
})

app.listen(PORT, () => {
    console.log('Server running on port: ' + PORT);
})
