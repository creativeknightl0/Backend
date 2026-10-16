const mongoose = require('mongoose');
const Book = require('./models/book');

mongoose.connect('mongodb://localhost:27017/booksWithMe')
    .then(() => {
        console.log('Connection between Mongoose and MongoDB is successful!');
    })
    .catch(e => {
        console.log('Connection was failed :(');
        console.log(e);
    })

// instantiate the model with new data
const newBook = new Book({name: 'Thinking in Systems', description: 'Thinking in Systems provides an introduction to systems thinking by Donella Meadows, the main author of the 1972 report The Limits to Growth, and describes some of the ideas behind the analysis used in that report.', author: 'Donella H. Meadows', publisher: 'Chelsea Green Publishing', publishedInWhichYear: 2008, genre: ['System Design'], pages: 240});

// save to database
// newBook.save()
//     .then(d => {
//         console.log('new book got added to the mongodb: ' + d);
//     })
//     .catch(e => {
//         console.log('error while adding data: ', e);
//     })

// Insert multiple books
const books = [
    {
        name: 'Quantitative Aptitude',
        description: 'Quantitative Aptitude For Competitive Examinations',
        author: 'R.S Aggarwal',
        publisher: 'S. Chand',
        publishedInWhichYear: 2024,
        genre: ['Aptitude', 'CA Exams', 'Interviews'],
        pages: 300
    },
    {
        name: 'Think Like a Programmer',
        description: "The real challenge of programming isn't learning a language's syntax—it's learning to creatively solve problems so you can build something great. In this one-of-a-kind text, author V. Anton Spraul breaks down the ways that programmers solve problems and teaches you what other introductory books often ignore: how to Think Like a Programmer.",
        author: 'V. Anton Spraul',
        publisher: 'No Starch Press',
        publishedInWhichYear: 2012,
        genre: ['Problem Solving', 'Creative Thinking'],
        pages: 256
    }
];

Book.insertMany(books)
    .then(d => {
        console.log('All books inserted: ' + d);
    })
    .catch(e => {
        console.log('Books did not get inserted: ' + e);
    })