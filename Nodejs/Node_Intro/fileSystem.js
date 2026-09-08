const fs = require('fs');
const bookName = process.argv[2];

console.log(fs);

// asynchronous - console.log prints before the directory created. File and more directory creation is not working in asynchronous
// fs.mkdir('Books', {recursive: true}, err => {
//     console.log('Inside callback');
//     if(err) {
//         throw err;
//     }
// });
// console.log('Process is still happening');

// synchronous - console.log prints only after the creation of folders and files is done
// fs.mkdirSync('Books');
fs.mkdirSync(`Books/${bookName}`);

fs.writeFileSync(`Books/${bookName}/about_book.txt`, '');
fs.writeFileSync(`Books/${bookName}/author_bio.txt`, '');
console.log('Shown after creation of directories and files is done.');