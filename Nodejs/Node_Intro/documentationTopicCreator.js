const fs = require('fs');
const documentationFolderName = process.argv[2] || 'Documentation';
// let documenationFolderExists = false;
const topicName = process.argv[3] || 'topic';

fs.mkdirSync(documentationFolderName);
// documenationFolderExists = true;
// console.log(documenationFolderExists);
fs.writeFileSync(`${documentationFolderName}/${topicName}.md`, "# Jonathan saved Catherine's son but still he raped Catherine which Jonathan a bad character and Catherine deserves respect atlast.");