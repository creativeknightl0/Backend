const express = require('express');
const app = express();
const path = require('path');
const redditData = require('./data.json');

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
    const favCurrPosters = ['https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Ftse4.explicit.bing.net%2Fth%2Fid%2FOIP.CjfmQBh7aeobvBSLuy4OPQHaEK%3Fpid%3DApi&sp=1782811412T33440ccb8f36358457415eb95faa35dc5a8a4ee72c11054d9476b134e50cf3c2', 'https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fcdn.mos.cms.futurecdn.net%2F7Ppo3MmxNAguxi7TWXaXMS.jpg&sp=1782811450T6fb47732a758567e68d5474c49c14b17e0b4438744a6ac08675ee1be15262fb4', 'https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fimages-na.ssl-images-amazon.com%2Fimages%2FI%2F71KJWkgFzcL._RI_.jpg&sp=1782811488T75aed4f358c19e0402969c7159546e5443923397cf4f8ef95a29ed339354cf69'];
    res.render('favouriteShows', {favCurr, favCurrPosters});
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
})