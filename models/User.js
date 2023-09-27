
const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    surname: {
        type: String,
        unique: false,
        required: false
    },
    password: String,
    date: {
        type: Date,
        default: new Date()
    }
})

module.exports = model('User', userSchema)