const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    BookName: {
        type: String,
        required: true
    },
    Author: {
        type: String
    },
    Price:{
        type: Number
    },
    Genre: {
        type: String
    },
    BookInfo: {
        type: String
    }
})

const books = module.exports = mongoose.model('Books', bookSchema);   