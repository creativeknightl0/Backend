const translate = require('google-translate-api-x');

// console.log(translate); // gives out whole object of things inside

const response = translate('Ik spreek Engels', {to: 'en'});
console.log(response);