const { Schema, model } = require('mongoose');

const bookSchema = new Schema({
    name: String,
    price: {
        type: Number,
        default: 0
    }
})

module.exports = model('Product', bookSchema)