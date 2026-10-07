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

// instantiate the model to create a new collection with document in mongoose
const addCardigansSong = new Cardigan({songName: 'My Favourite Game', views: 313027778, likedByMe: true});

// to save it to the mongodb
// addCardigansSong.save();

// update something in the object
// addCardigansSong.views = 315000000;

// and to show on db, we have to save it again
// addCardigansSong.save();

// insert multiple documents in a collection at a time using mongoos method
// Cardigan.insertMany([
//     {songName: 'Step On Me', views: 324257500, likedByMe: false},
//     {songName: 'Lovefool', views: 1116713792, likedByMe: true},
//     {songName: 'Erase / Rewind', views: 162229898, likedByMe: true},
//     {songName: 'Carnival', views: 63748044, likedByMe: false}
// ])
// .then((d) => {
//     console.log('Insertion was a success');
//     console.log(d);
// })

// finding with model with find({}), findById(), find({filter})
// Cardigan.find({})
//     .then((d) => {
//         console.log(d);
//     })
//     .catch(e => {
//         console.log('Error while finding the document: ' + e);
//     })

// Cardigan.find({name: 'My Favourite Game'})
//     .then((data) => {
//         console.log(data);
//     })
//     .catch(e => {
//         console.log('There was an error while trying find the document: ' + e);
//     })

// Cardigan.findById('6ac556e511a799b5cfeac5f9')
//     .then(d => {
//         console.log(d);
//     })
//     .catch(e => {
//         console.log('There was an error while finding the document');
//     })

// Updating with Model using methods like updateOne({filter}, {set}), updateMany({filter}, {set}), findOneAndUpdate({filter}, {set}, {new: true}) and findByIdAndUpdate('id', {set}, {new: true})
// Cardigan.updateOne({songName: 'The Favourite Game'}, {songName: 'My Favorite Game'})
//     .then(d => {
//         console.log(d); // but this doesn't show data changed, just like acknowledgement that its updated
//     })
//     .catch(e => {
//         console.log('Error while updating: ' + e);
//     })

// Cardigan.updateMany({songName: {$in: ['Step On Me', 'Carnival']}}, {likedByMe: true})
//     .then(d => {
//         console.log(d);
//     })
//     .catch(e => {
//         console.log('Error while updating the documents', e);
//     })

// Cardigan.findOneAndUpdate({songName: 'My Favorite Game'}, {songName: 'My Favourite Game'}, {new: true})
//     .then(d => {
//         console.log(d); // now its showing the old non-updated state data, to change it to new updated data - we add {new: true}
//     })
//     .catch(e => {
//         console.log('There was an error while updating the document', e);
//     })

// Cardigan.findByIdAndUpdate('6ac556e511a799b5cfeac5f9', {likedByMe: false}, {new: true})
//     .then(d => {
//         console.log(d);
//     })
//     .catch(e => {
//         console.log('Error while updating doc: ' + e);
//     })

// delete with model using methods like deleteOne({filter}), deleteMany({filter/none}), findOneAndDelete({filter}), findByIdAndDelete({'id'})
// Cardigan.deleteOne({songName: 'Lovefool'})
//     .then(d => {
//         console.log(d);
//     })
//     .catch(e => {
//         console.log('Error while deleting: ' + e);
//     })

// Cardigan.deleteMany({likedByMe: false})
//     .then((d) => {
//         console.log(d);
//     })
//     .catch(e => {
//         console.log('Error while deleting: ' + e);
//     })

// Cardigan.findOneAndDelete({views: 162229898})
//     .then((d) => {
//         console.log(d);
//     })
//     .catch(e => {
//         console.log('Issue while deleting the document: ');
//         console.log(e);
//     })

// Cardigan.findByIdAndDelete('6ac556e511a799b5cfeac5fb')
//     .then((d) => {
//         console.log(d);
//     })
//     .catch(e => {
//         console.log('Error while deleting: ' + e);
//     })

// One small test - using the mongoose model's methods remove the redundant documents in our collection
// 1. Use delete method because we have to delete redundant data
// 2. Using deleteMany to finish the process faster at a time
// 3. We should add filter with ids connected to redundant documents in an array
Cardigan.deleteMany({_id: {$in: ['6ac556e511a799b5cfeac5fa', '6ac65906d980ac007f683ea7', '6ac65906d980ac007f683ea8']}})
    .then((d) => {
        console.log(d);
    })
    .catch(e => {
        console.log('Error while deleting the documents: ', e);
    })