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
    songName: {
        type: String,
        required: true,
        maxLength: 30
    },
    views: {
        type: Number,
        min: [0, "view count for a song can't be -ve"]
    },
    likedByMe: {
        type: Boolean,
        default: false
    },
    genre: [String],
    bpm: {
        type: String,
        enum: ['low', 'mid', 'high']
    }
});

// create a model
const Cardigan = mongoose.model('Cardigan', theCardigansSchema);

// instantiate the model to create a new collection with document in mongoose
// const addCardigansSong = new Cardigan({songName: 'My Favourite Game', views: 313027778, likedByMe: true});

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
// Cardigan.deleteMany({_id: {$in: ['6ac556e511a799b5cfeac5fa', '6ac65906d980ac007f683ea7', '6ac65906d980ac007f683ea8']}})
//     .then((d) => {
//         console.log(d);
//     })
//     .catch(e => {
//         console.log('Error while deleting the documents: ', e);
//     })

// mongoose schema validations
// after we defined required in our existing schema for songName
// const addCardiganSong = new Cardigan({views: 12345, likedByMe: false}); // shows error ValidationError: songName: Path `songName` is required
// addCardiganSong.save()
//     .then((d) => {
//         console.log('Document was added successfully: ' + d);
//     })
//     .catch(e => {
//         console.log('There was error while adding the document: ' + e);
//     })

// after we tried inputting wrong data type for boolean data type likedByMe
// const addCardiganSong = new Cardigan({songName: 'Rise & Shine', views: 12345, likedByMe: 5}); // shows error because casting from number like 5 to boolean cannot happen
// addCardiganSong.save()
//     .then((d) => {
//         console.log('The data was successfully added: ' + d);
//     })
//     .catch(e => {
//         console.log('There was an issue while adding the document: ', e);
//     })

// Additional Schema Constraints
// add default in schema for likedByMe so without giving that value also the default value gets input
// const addCardiganSong = new Cardigan({songName: 'Rise & Shine', views: 12345}); // likedByMe as false was added by default for this case
// addCardiganSong.save()
//     .then(d => {
//         console.log('Added document successfully: ', d);
//     })
//     .catch(e => {
//         console.log('Error while document addition: ' + e);
//     })

// min add to the views so views can't be -ve
// const addCardiganSong = new Cardigan({songName: 'In the Afternoon', views: -134567, likedByMe: false}); // shows error like ValidationError with views: Path `views` (-134567) is less than defined min 0
// addCardiganSong.save()
//     .then((d) => {
//         console.log('Document was added successfully: ' + d);
//     })
//     .catch(e => {
//         console.log('There was an error while adding the document: ' + e);
//     })

// maxLength for songName so it can exceed that length
// const addCardiganSong = new Cardigan({songName: 'Sabbath Bloody Sabbath Bloody Blood'}); // ValidationError with say like the songName text length exceeds 30 maxLength we set
// addCardiganSong.save()
//     .then(d => {
//         console.log('DOcument was added successfully: ' + d);
//     })
//     .catch(e => {
//         console.log('There was error while inserting document: ' + e);
//     })

// many others are there...
// if we add any new key and value in the object apart from the schema, then it will be inserted but might not show on find of the collection's doc - so to avoid this problem its recommended to add this new type as well in the schema

// add new array of data type in the schema
// const addCardiganSong = new Cardigan({songName: 'Hanging Around', views: 854369, likedByMe: true, genre: ['Rock', 'Punk']});
// addCardiganSong.save()
//     .then(d => {
//         console.log('Document addition was successful: ' + d);
//     })
//     .catch(e => {
//         console.log('There was an error while adding doc: ');
//         console.log(e);
//     })

// validations while updating
// Cardigan.findOneAndUpdate({songName: 'Rise & Shine'}, {views: -123}, {new: true}) // it updates the views to -ve even we told in the schema that min should 0, but for updation we have to tell mongoose kind of remember it to runValidatiors again to updation otherwise schema it ignores
//     .then(() => {
//         console.log('Updation of the document was successful');
//     })
//     .catch(e => {
//         console.log('Updation failed: ', e);
//     })

// add runValidators: true property to run the validations defined the schema for updation as well
// Cardigan.findOneAndUpdate({songName: 'Rise & Shine'}, {views: -12345}, {new: true, runValidators: true}) // now updation failed with mentioning -12345 is less than defined min 0 in the schema
//     .then(() => {
//         console.log('Updation was successful');
//     })
//     .catch(e => {
//         console.log('Updation failed: ' + e);
//     })

// add custom validation error message in schema for price and see the difference in error message
// Cardigan.findOneAndUpdate({songName: 'Hanging Around'}, {views: -789}, {new: true, runValidators: true}) // here error shows like ValidationError: views: view count for a song can't be -ve - same as custom messgae
//     .then(() => {
//         console.log('Updation was successful!');
//     })
//     .catch((e) => {
//         console.log('Error while updating: ' + e);
//     })

// validation for enum values
Cardigan.findOneAndUpdate({songName: 'Rise & Shine'}, {bpm: 'very high'}, {new: true, runValidators: true})  // shows ValidationError: bpm: `very high` is not a valid enum value for path `bpm`
    .then(() => {
        console.log('Updation was successful');
    })
    .catch(e => {
        console.log('There was an error while updating: ' + e);
    })