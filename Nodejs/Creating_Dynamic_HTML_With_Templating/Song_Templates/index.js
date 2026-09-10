const express = require('express');
const app = express();
const path = require('path');
const uniqid = require('uniqid'); 

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

const songs = [
    {
        id: 1,
        name: 'Radioactive',
        album: 'Radioactive (2012)',
        author: 'Imagine Dragons',
        writer: ['Alex da Kid', 'Ben McKee', 'Dan Reynolds', 'Daniel Wayne Sermon', 'Josh Mosser'],
        label: ['KidinaKorner', 'Interscope'],
        genre: ['Electronic Rock', 'Alternative Rock', 'Stadium Rock'],
        length: '3:07',
        release_date: 'October 29, 2012'
    },
    {
        id: 2,
        name: 'BCD Song',
        album: 'Radioactive (2012)',
        author: 'Imagine Dragons',
        writer: ['Alex da Kid', 'Ben McKee', 'Dan Reynolds', 'Daniel Wayne Sermon', 'Josh Mosser'],
        label: ['KidinaKorner', 'Interscope'],
        genre: ['Electronic Rock', 'Alternative Rock', 'Stadium Rock'],
        length: '3:07',
        release_date: 'October 29, 2012'
    },
    {
        id: 3,
        name: 'CDE Music',
        album: 'Radioactive (2012)',
        author: 'Imagine Dragons',
        writer: ['Alex da Kid', 'Ben McKee', 'Dan Reynolds', 'Daniel Wayne Sermon', 'Josh Mosser'],
        label: ['KidinaKorner', 'Interscope'],
        genre: ['Electronic Rock', 'Alternative Rock', 'Stadium Rock'],
        length: '3:07',
        release_date: 'October 29, 2012'
    }
];

app.get('/', (req, res) => {
    res.send('Reached the Song Templates backend server successfully!');
})

app.get('/songs', (req, res) => {
    res.render('song', {song_info: songs});
})

app.get('/songs/:id', (req, res) => {
    const {id} = req.params;
    let singleSong = [];

    for(const song of songs) {
        if(song.id === Number(id)) {
            singleSong.push(song);
        }
    }
    res.render('particularSong', {single_song_info: singleSong});
})

app.listen(3000, () => {
    console.log('Listening on port 3000!')
})