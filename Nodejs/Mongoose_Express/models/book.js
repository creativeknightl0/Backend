const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: String,
    author: String,
    publisher: String,
    publishedInWhichYear: Number,
    genre: [String],
    pages: Number,
    bookType: {
        type: String,
        enum:['', 'fiction', 'non-fiction']
    }
})

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;