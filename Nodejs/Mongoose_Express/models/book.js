const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    name: String,
    description: String,
    author: String,
    publisher: String,
    publishedInWhichYear: Number,
    genre: [String],
    pages: Number
})

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;