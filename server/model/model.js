const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    cardNumber: {
        type: Number,
        required: true,
        min: 1000000000000000,
        max: 9999999999999999
    },
    expirationDate: {
        type: Number,
        required: true,
        min: 100000,
        max: 999999
    },
    cvv: {
        type: Number,
        required: true,
        min: 100,
        max: 999
    },
    amount: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Post', postSchema)