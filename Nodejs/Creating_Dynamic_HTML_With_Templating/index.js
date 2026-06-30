const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.get('/', (req, res) => {
    // res.send('Hi from server');
    // res.render('home.ejs');
    res.render('home');
})

app.get('/images/miss_amber.jpg', (req, res) => {
    res.sendFile(`/home/da-vinci/Web Dev Bootcamp/Backend/Nodejs/Creating_Dynamic_HTML_With_Templating/images/miss_amber.jpg`);
})

app.get('/rand', (req, res) => {
    const numRand = Math.floor(Math.random() * 100) + 1;
    res.render('random', {rand: numRand}); // passing data to the random.ejs template for use
})

app.get('/r/:subreddit', (req, res) => {
    const {subreddit} = req.params;
    res.render('subreddit', {subreddit});
})

app.listen(3000, () => {
    console.log('Listening on port 3000');
})