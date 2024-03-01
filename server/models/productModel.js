const mongoose = require("mongoose")


const schemaProduct = mongoose.Schema({
    provedor: String,
    name: String,
    img: String,
    price: String
})


const modelProduct = mongoose.model('Product', schemaProduct)

module.exports = modelProduct