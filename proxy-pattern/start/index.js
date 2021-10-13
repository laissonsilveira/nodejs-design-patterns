const fs = require('fs');
const path = require('path');

const txtFile = path.join(__dirname, 'File.txt');
const mdFile = path.join(__dirname, 'File.md');

const result = (error, contents) => {

    if (error) {
        console.log('\x07');
        console.error(error);
        process.exit(0);
    }

    console.log('reading file...');
    console.log(contents);

}

fs.readFile(txtFile, 'UTF-8', result);
fs.readFile(mdFile, 'UTF-8', result);
