require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())
app.use(bodyParser.json())

const PORT = process.env.PORT || 4000


mongoose.connect(process.env.MONGO_URL)
.then(()=> {console.log('conected database');})
.catch(()=> {
    console.log('error database');
})

app.get('/', (req,res) => {
    res.send('hola')
})


app.listen(PORT, () => {
    console.log('server at run in the port: ' + PORT);
})