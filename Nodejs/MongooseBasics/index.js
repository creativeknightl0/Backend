const mongoose = require('mongoose');

// create a connection between mongoose and mongodb
mongoose.connect('mongodb://localhost:27017/test')
    .then(() => {
        console.log('Connection of Mongoose with MongoDB was successful!');
    })
    .catch((e) => {
        console.log('There was an error that occurred while connectiong mongoose with mongodb :(', e);
    })

// creating a schema using mongoose properties
const theCardigansSchema = new mongoose.Schema({
    songName: String,
    views: Number,
    likedByMe: Boolean
});

// create a model
const Cardigan = mongoose.model('Cardigan', theCardigansSchema);

// instantiate the model to create a new collection with data in mongoose
const addCardigansSong = new Cardigan({songName: 'The Favourite Game', views: 313027778, likedByMe: true});

// to save it to the mongodb
// addCardigansSong.save();

// update something in the object
// addCardigansSong.views = 315000000;

// and to show on db, we have to save it again
// addCardigansSong.save();

// insert multiple documents in a collection at a time using mongoos method
Cardigan.insertMany([
    {songName: 'Step On Me', views: 324257500, likedByMe: false},
    {songName: 'Lovefool', views: 1116713792, likedByMe: true},
    {songName: 'Erase / Rewind', views: 162229898, likedByMe: true},
    {songName: 'Carnival', views: 63748044, likedByMe: false}
])
.then((d) => {
    console.log('Insertion was a success');
    console.log(d);
})