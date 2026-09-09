// const math = require('./math');
const {PI, square} = require('./math'); // destructuring math.js exports
const characters = require('./Disclaimer');
const colors = require('colors');
const gtaV = require('./gtaV');
const atomicHabits = require('./Atomic-Habits');

// console.log(math.add(2, 2));
console.log(PI);
console.log(square(9));

console.log('\n');

console.log(characters[0].name.rainbow);

console.log('\n');

console.log('--------------------- GTAV -------------------------');
// console.log(gtaV);
console.log('Name: ' + gtaV.currentCharacterName);
console.log(`Money in Bank: $${gtaV.money}`);
console.log('Police Stars showing: ' + gtaV.policeStars);
console.log('Properties bought: ' + gtaV.propertiesBought);
console.log('Missions completed till now: ' + gtaV.missionsCompleted);

const stripperName = 'Lucie';
let onStripperSpentMoney = 0;
if(stripperName === 'Lucie') {
    onStripperSpentMoney = 5000
}
else if(stripperName === 'Jane') {
    onStripperSpentMoney = 200;
}
else {
    onStripperSpentMoney = 100;
}

console.log(`Money left after money spent on the stripper named ${stripperName}: ${gtaV.afterStripClubMoneyDeductedMoneyLeft(onStripperSpentMoney)}`);

console.log('\n');

console.log('------------------ Atomic Habits -----------------');
console.log('Book summary: ' + atomicHabits.booksSummary.summary);
console.log('Book Slogan: ' + atomicHabits.booksSlogan.slogan);
console.log('Written By: ' + atomicHabits.authorName.author.name);