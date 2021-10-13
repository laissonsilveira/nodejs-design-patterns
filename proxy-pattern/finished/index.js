const path = require('path');
const FS_Proxy = require('./FS_Proxy');

const fs = new FS_Proxy(require('fs'));

const txtFile = path.join(__dirname, 'File.txt');
const mdFile = path.join(__dirname, 'File.md');

const result = (error, contents) => {

    if (error) {
        console.error(error);
        // process.exit(0);
    } else {
        console.log('reading file...');
        console.log(contents);
    }

}

console.log('Text File:')
fs.readFile(txtFile, 'UTF-8', result);
console.log('\x07');
console.log('MD File:')
fs.readFile(mdFile, 'UTF-8', result);
