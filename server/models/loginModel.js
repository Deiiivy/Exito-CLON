const mongoose = require('mongoose')
const { use } = require('../routes/router')

const schemaUser = mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        require: true
    }
})


const userModel = mongoose.model('user', schemaUser)


module.exports = userModel