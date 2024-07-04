// var colors = require('colors');
// console.log('hello'.green);
// console.log('OMG Rainbows!'.rainbow);
// console.log('i like cake and pies'.underline.red);
// console.log('inverse the color'.inverse);
// console.log('Run the trap'.trap);

//var input = process.argv;
//console.log(input[2] + input[3]);

const fs = require('fs');
const path = require('path');

/*
if (process.argv[2] === 'create' && process.argv[3]) {
    const fileName = process.argv[3];

    // Create the file
    fs.writeFile(fileName, '', (err) => {
        if (err) {
            console.error('Error creating file:', err);
        }
        console.log("File " + fileName + " created successfully!");
    });
} 
else if (process.argv[2] === 'insert' && process.argv[3] && process.argv[4]) {
    const fileName = process.argv[3];
    const content = process.argv[4];

    fs.writeFile(fileName, content, (err) => {
        if (err) {
            console.error('Error inserting while inserting:', err);
        }
        console.log("Inserted " + content + " successfully!");
    });
}
else if (process.argv[2] === 'append' && process.argv[3] && process.argv[4]) {
    const fileName = process.argv[3];
    const content = process.argv[4];

    fs.appendFile(fileName, content, (err) => {
        if (err) {
            console.error('Error appending:', err);
        }
        console.log("Appended " + content + " successfully!");
    });
} 
else if (process.argv[2] === 'rename' && process.argv[3] && process.argv[4]) {
    const fileName1 = process.argv[3];
    const fileName2 = process.argv[4];

    fs.rename(fileName1, fileName2, (err) => {
        if (err) {
            console.error('Error renaming file:', err);
        }
        console.log("File renamed successfully!");
    });
} 
else if (process.argv[2] === 'delete' && process.argv[3]) {
    const fileName = process.argv[3];

    fs.unlink(fileName, (err) => {
        if (err) {
            console.error('Error deleting file:', err);
        }
        console.log("File " + fileName + " deleted successfully!");
    });
} 
else {
    console.log('Invalid command or insufficient arguments provided.');
}
*/

const folderpath = path.join(__dirname, "files");

fs.readdir(folderpath, (err, files) => {
    if (err) {
        console.error("Error reading directory:", err);
        return;
    }
    else {
        files.forEach(file => {
            const filepath = path.join(folderpath, file);
            fs.readFile(filepath, "utf-8", (err, data) => {
                if (err) {
                    console.error("Error reading file " + file + ":", err);
                } else {
                    console.log("Contents of " + file + ":");
                    console.log(data);
                }
            });
        });
    }
});







