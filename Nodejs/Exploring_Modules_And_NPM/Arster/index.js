const figlet = require('figlet');
const colors = require('colors');

// figlet("Catherine Ravenscroft", function(err, data) {
//     if(err) {
//         console.log("Something went wrong.");
//         console.dir(err);
//         return;
//     }
//     console.log(data.rainbow);
// })

figlet('The Sun is in the Air!', function(err, data) {
    if(err) {
        console.log(`Something went wrong`);
        console.dir(err);
        return;
    }
    console.log(data.bgBlack.brightRed.bold);
})