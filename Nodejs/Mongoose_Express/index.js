const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const Book = require('./models/book');
const methodOverride = require('method-override');

mongoose.connect('mongodb://localhost:27017/booksWithMe')
    .then(() => {
        console.log('Connection of Mongoose to MongoDB is successful!');
    })
    .catch(e => {
        console.log('Error while making connection :(');
        console.log(e);
    })

app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));
app.set('view engine', 'ejs');    
app.set('views', path.join(__dirname, '/views'));

// RESTful Routes for the resource - Book

// GET /books - to fetch and show all the books
// also categorize the page view based on book type
app.get('/books', async(req, res) => {
    const {book_type} = req.query;
    if(book_type) {
        const allBooks = await Book.find({bookType: book_type});
        console.log(`Based on ${book_type} book type: ${allBooks}`);
        res.render('books/index', {allBooks, book_type});
    }
    else {
        const allBooks = await Book.find();
        console.log(allBooks); // array of all books in objects, overall an array of objects
        res.render('books/index', {allBooks, book_type: 'All'});       
    }
})

const bookTypes = ['', 'fiction', 'non-fiction'];

// GET /books/new - to show the new book creation form
app.get('/books/new', (req, res) => {
    res.render('books/new', {bookTypes});
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
    const {name, description, author, publisher, publishedInWhichYear, genre, pages, bookType} = req.body;
    let genreSeparateElements;
    if(genre) {
        genreSeparateElements = genre.split(',') && genre.split(', ');
    }
    // instantiate the model with new data to be inserted - it will remain in mongoose or terminal only
    const addBook = new Book({name, description, author, publisher, publishedInWhichYear, genre: genreSeparateElements, pages, bookType});
    console.log(addBook);
    // now lets save it to mongodb for permanent storage
    addBook.save();
    res.redirect('/books');
})

// GET /books/:id/edit - to show the existing saved book with its data, so we can edit it
app.get('/books/:id/edit', async(req, res) => {
    const {id} = req.params;
    const findParticularBook = await Book.findById(id);
    console.log('Book selected: ' + findParticularBook);
    res.render('books/edit', {findParticularBook, bookTypes});
})

// PUT /books/:id - to update the book by just replacing the whole document from old record to new edited record, another method is PATCH which only changes the part that was edited but its hard to track what was actually edited so we are going with PUT right now for update operation
app.put('/books/:id', async(req, res) => {
    const {id} = req.params;
    const {name, description, author, publisher, publishedInWhichYear, genre, pages, bookType} = req.body;
    const particularBookEdit = await Book.findByIdAndUpdate(id, {name, description, author, publisher, publishedInWhichYear, genre, pages, bookType}, {new: true, runValidators: true});
    console.log('After edit book state: ' + particularBookEdit);
    res.redirect(`/books/${id}`);
})

// DELETE /books/:id - to delete the book we want
app.delete('/books/:id', async(req, res) => {
    const {id} = req.params;
    const deletedBook = await Book.findByIdAndDelete(id);
    console.log('Deleted book: ' + deletedBook);
    res.redirect('/books');
})

app.listen(3000, () => {
    console.log('Listening on port 3000!');
})