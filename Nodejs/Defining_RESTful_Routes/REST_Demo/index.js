const express = require('express');
const app = express();
const path = require('path');
const {v4: uuid} = require('uuid');
const methodOverride = require('method-override');

app.use(express.urlencoded({extended: true})); // for telling express that to use this encoding mechanism, otherwise it will will be undefined for default 
app.use(express.json()); // for json data encoding
app.use(methodOverride('_method'));
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

let worldRunningConcepts = [
    {
        id: uuid(),
        name: '1984',
        author: 'George Orwell',
        description: 'Based on spying on every citizen thoughts using thought police and language changes'
    },
    {
        id: uuid(),
        name: 'Brave New World',
        author: 'Aldous Huxley',
        description: 'A futurisitic world where drugs are given to make every citizen happy!'
    }
];

// Index - GET /concepts to list all the concepts in our fake database table resource - concept - worldRunningConcepts, operation here is READ
app.get('/concepts', (req, res) => {
    res.render('concepts/index', {worldRunningConcepts});
})

// New - GET /concepts/new for template form rendering
app.get('/concepts/new', (req, res) => {
    res.render('concepts/new');
})

// Post - POST /concepts to add the new concept row in our fake db - Create operation
app.post('/concepts', (req, res) => {
    const {name, author, description} = req.body;
    worldRunningConcepts.push({id: uuid(), name, author, description});
    res.redirect('/concepts');
})

// Show - GET /concepts/:id - lists the particular concept associated with the id asked
app.get('/concepts/:id', (req, res) => {
    const {id} = req.params;
    const mappedConcept = worldRunningConcepts.find(wc => wc.id === id);
    res.render('concepts/show', {mappedConcept});
})

// Edit - GET /concepts/:id/edit - renders the edit.ejs template form with existing particular concept details
app.get('/concepts/:id/edit', (req, res) => {
    const {id} = req.params;
    const matchedConcept = worldRunningConcepts.find(wrc => wrc.id === id);
    res.render('concepts/edit', {matchedConcept});
})

// Patch - PATCH /concepts/:id - modifies the particular concept details
app.patch('/concepts/:id', (req, res) => {
    const {id} = req.params;
    const {name: newName, author: newAuthor, description: newDescription} = req.body;
    const matchedConcept = worldRunningConcepts.find(wrc => wrc.id === id);
    if(newName) {
        matchedConcept.name = newName;
        if(newAuthor) {
            matchedConcept.author = newAuthor;
            if(newDescription) {
                matchedConcept.description = newDescription;
            }
        }
    }
    else if(newAuthor) {
        matchedConcept.author = newAuthor;
        if(newDescription) {
            matchedConcept.description = newDescription;
        }
    }
    else if(newDescription) {
        matchedConcept.description = newDescription;
    }
    res.redirect('/concepts');
})

// Delete - DELETE /concepts/:id - deletes the particular concept we clicked
app.delete('/concepts/:id', (req, res) => {
    const {id} = req.params;
    worldRunningConcepts = worldRunningConcepts.filter(wrc => wrc.id !== id);
    res.redirect('/concepts');
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
})