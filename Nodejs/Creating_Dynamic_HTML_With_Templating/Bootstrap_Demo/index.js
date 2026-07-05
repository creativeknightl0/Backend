const express = require('express');
const app = express();
const path = require('path');
const redditData = require('./data.json');

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.get('/', (req, res) => {
    // res.send('Hi from server');
    // res.render('home.ejs');
    res.render('home');
})

app.get('/images/miss_amber.jpg', (req, res) => {
    res.sendFile(`/home/da-vinci/Web Dev Bootcamp/Backend/Nodejs/Creating_Dynamic_HTML_With_Templating/Bootstrap_Demo/images/miss_amber.jpg`);
})

app.get('/rand', (req, res) => {
    const numRand = Math.floor(Math.random() * 100) + 1;
    res.render('random', {rand: numRand}); // passing data to the random.ejs template for use
})

app.get('/r/:subreddit', (req, res) => {
    const {subreddit} = req.params;
    const data = redditData[subreddit];
    if(data) {
        res.render('subreddit', {data});
    }
    else {
        res.render('notfound', {subreddit});
    }
})

app.get('/favTVShows', (req, res) => {
    const favCurr = ['Brave New World', 'Disclaimer', 'Skins'];
    const favCurrPosters = ['/poster-images/brave_new_world.jpg', '/poster-images/disclaimer.jpg', '/poster-images/skins.jpg'];
    res.render('favouriteShows', {favCurr, favCurrPosters});
});

app.listen(3001, () => {
    console.log('Listening on port 3001');
})