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
    res.send(`Thank you. Your order is ready, please receive your ${item_qty} ${item_name} ${item_qty > 1 ? 'burritos': 'burrito'} from the counter.`)
})

app.get('/fitness', (req, res) => {
    res.send('These are the products available');
})

app.post('/fitness', (req, res) => {
    const {name, qty, category} = req.body;
    res.send(`Your order for ${qty} ${name} in the category of ${category} is successfully placed and will reach to your destination soon :)`);
});

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

const twitchStreamers = [
    {
        id: uuid(),
        username: 'kandyfloz',
        followers: 8000,
        subscribers: 0
    },
    {
        id: uuid(),
        username: 'ok_judy',
        followers: 3000,
        subscribers: 35
    },
    {
        id: uuid(),
        username: 'apollol',
        followers: 2000,
        subscribers: 600
    }
];

// RESOURCE - Twitch Streamer
// GET /twitch/streamers - list all the twitch streamers
app.get('/twitch/streamers', (req, res) => {
    res.render('twitch/streamers/index', {twitchStreamers});
})

// GET /twitch/streamers/new - create new twitch streamer form rendering
app.get('/twitch/streamers/new', (req, res) => {
    res.render('twitch/streamers/new');
})

// POST /twitch/streamers - create a new twitch streamer record
app.post('/twitch/streamers', (req, res) => {
    const {username, followers, subscribers} = req.body;
    twitchStreamers.push({username, followers, subscribers, id: uuid()});
    res.redirect('/twitch/streamers');
})

// GET /twitch/streamers - show particular streamer only with id with uuid because for new created streamer count based id doesn't work or not good practice
app.get('/twitch/streamers/:id', (req, res) => {
    const {id} = req.params;
    const particularTwitchStreamer = twitchStreamers.find(twitch => twitch.id === id);
    res.render('twitch/streamers/show', {particularTwitchStreamer});
})

app.listen(3000, () => {
    console.log('Listening on port 3000');
})