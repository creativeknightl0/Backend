const fs = require('fs');
// console.log(fs);
const folderName = process.argv[2] || 'Project'

// Asynchronous version
// fs.mkdir('Dogs', { recursive: true }, (err) => {
//     console.log('In the callback');
//     if(err) throw err;
// });
// console.log('I come after mkdir');

// Synchronous version
// fs.mkdirSync('Alan Wake');
// console.log('run after mkdir finishes');

// folder creation with three files - index.html, styles.css and app.js inside that
fs.mkdirSync(folderName);
fs.writeFileSync(`${folderName}/index.html`, '');
fs.writeFileSync(`${folderName}/styles.css`, '');
fs.writeFileSync(`${folderName}/app.js`, '');