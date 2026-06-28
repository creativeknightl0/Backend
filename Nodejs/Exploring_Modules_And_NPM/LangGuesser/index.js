const franc = require('franc');
const langs = require('langs');
const colors = require('colors');

const input = process.argv[2];
// const langCode = franc("Alle menslike wesens word vry");
// const langCode = franc("Alle menneske er fødde til fridom");
const langCode = franc(input);

// console.log(franc("Alle menslike wesens word vry")); - 'afr'
// console.log(typeof(franc("Alle menslike wesens word vry"))); // gives string type

// ISO 3 letter to object giver using langs.where(3, language_code_string)
// console.log(langs.where(3, langCode)); // langs.where(3, 'afr')

if(langCode === 'und') {
    console.log("Sorry couldn't figure it out! Try out with more text".red);
}
else {
    const language = langs.where(3, langCode);
    console.log(`Our best guess: ${language.name}`.green);
}