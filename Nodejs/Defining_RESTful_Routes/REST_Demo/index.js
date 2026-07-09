const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({extended: true})); // for telling express that to use this encoding mechanism, otherwise it will will be undefined for default 
app.use(express.json()); // for json data encoding
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.get('/burritos', (req, res) => {
    res.send('GET /burritos response');
})

app.post('/burritos', (req, res) => {
    // console.log(req.body); // to see the post request's request body
    const {item_name, item_qty} = req.body;
    // res.send('POST /burritos response');
    res.send(`Thank you. Your order is ready, please receive your ${item_qty} ${item_name} burrito from the counter.`)
})

const worldRunningConcepts = [
    {
        id: 1,
        name: '1984',
        author: 'George Orwell',
        description: 'Based on spying on every citizen thoughts using thought police and language changes'
    },
    {
        id: 2,
        name: 'Brave New World',
        author: 'Aldous Huxley',
        description: 'A futurisitic world where drugs are given to make every citizen happy!'
    }
];

// GET /concepts to list all the concepts in our fake database table resource - concept - worldRunningConcepts, operation here is READ
app.get('/concepts', (req, res) => {
    res.render('concepts/index', {worldRunningConcepts});
})

// GET /concepts/new for template form rendering
app.get('/concepts/new', (req, res) => {
    res.render('concepts/new');
})

// POST /concepts to add the new concept row in our fake db - Create operation
app.post('/concepts', (req, res) => {
    const {name, author, description} = req.body;
    worldRunningConcepts.push({name, author, description});
    res.redirect('/concepts');
})

// GET /concepts/{id} - lists the particular concept associated with the id asked
app.get('/concepts/:id', (req, res) => {
    const {id} = req.params;
    const mappedConcept = worldRunningConcepts.find(wc => wc.id === Number(id));
    res.render('concepts/single', {mappedConcept});
})

app.listen(3000, () => {
    console.log('Listening on port 3000');
})