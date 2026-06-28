const express = require('express');
const app = express();
// console.dir(app);

// app.use(() => {
//     console.log('We got a new request!');
// })

// request and respons response object
// app.use((req, res) => {
//     console.log('We got a new request of 8080!');
//     // request
//     // console.dir(req); // for seeing all the available methods, etc stuff of req

//     // response
//     // res.send('hello, this is a confirmation that we received your request safely!'); // response as string
//     // res.send({a: 'Apple', b: 12}); // response as object
//     res.send('<h1>response from server</h1>'); // response as html
// })

app.get('/', (req, res) => {
    res.send('This is home page!');
})

// pattern-based routing
app.get('/r/:subreddit', (req, res) => {
    // console.log(req.params);
    const { subreddit } = req.params;
    res.send(`we are on ${subreddit} subreddit!`);
})

// we can have multiple parameters in this pattern based routing also
app.get('/r/:subreddit/:postId', (req, res) => {
    // console.log(req.params);
    const {subreddit, postId} = req.params;
    res.send(`<h1>We are viewing a post with post id: ${postId} on ${subreddit} subreddit</h1>`);
})

app.get('/cats', (req, res) => {
    // console.log('/cats request came!');
    res.send('Meow!');
})

app.post('/cats', (req, res) => {
    res.send('Post request Meow!');
})

app.get('/dogs', (req, res) => {
    // console.log('Dog request');
    res.send('Woof!');
})

// query string
app.get('/search', (req, res) => {
    // console.log(req.query);
    // res.send('Hi from query string');
    const {q} = req.query;
    if(!q) {
        res.send("Hm...we couldn’t find any results for");
    }
    res.send(`<h1>Search results for: ${q}</h1>`);
})

app.get('/{*path}', (req, res) => {
    res.send("I don't know this path");
})

// app.listen(3000, () => {
//     console.log('Listening on port 3000!');
// })

app.listen(8080, () => {
    console.log("We are listening on port 8080!"); // now bash won't show the we got a new request message! until we open localhost:8080 not the older localhost:3000
})