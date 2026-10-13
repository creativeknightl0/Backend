const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const Book = require('./models/book');

mongoose.connect('mongodb://localhost:27017/booksWithMe')
    .then(() => {
        console.log('Connection of Mongoose to MongoDB is successful!');
    })
    .catch(e => {
        console.log('Error while making connection :(');
        console.log(e);
    })

app.use(express.urlencoded({extended: true}));
app.set('view engine', 'ejs');    
app.set('views', path.join(__dirname, '/views'));

// RESTful Routes for the resource - Book

// GET /books - to fetch and show all the books
app.get('/books', async(req, res) => {
    const allBooks = await Book.find();
    console.log(allBooks); // array of all books in objects, overall an array of objects
    res.render('books/index', {allBooks});
})

// GET /books/new - to show the new book creation form
app.get('/books/new', (req, res) => {
    res.render('books/new');
}) 

// GET /books/:id - to see the chosen book's information in detail
app.get('/books/:id', async(req, res) => {
    const {id} = req.params;
    const chosenBook = await Book.findById(id);
    console.log(chosenBook); // show just the book we want info on
    res.render('books/show', {chosenBook});
})

// POST /books - to create new book record in db
app.post('/books', async(req, res) => {
    const {name, description, author, publisher, publishedInWhichYear, genre, pages} = req.body;
    // instantiate the model with new data to be inserted - it will remain in mongoose or terminal only
    const addBook = new Book({name, description, author, publisher, publishedInWhichYear, genre, pages});
    console.log(addBook);
    // now lets save it to mongodb for permanent storage
    addBook.save();
    res.redirect('/books');
})

app.listen(3000, () => {
    console.log('Listening on port 3000!');
})