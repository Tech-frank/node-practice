const fs = require('fs')
const command = process.argv[2];
const filename = process.argv[3];
const content = process.argv[4] || 'Node created a file!';

if (command === 'read') {
    fs.readFile(filename, 'utf-8', (err, data) => {
        if (err) {
            console.log("Error reading file:", err);
        } else {
            console.log(data);
        }
    })
}
if (command === 'create'){
    fs.writeFile(filename, content, (err) =>{
        if (err){
            console.log("Error creating file:", err);
        } else {
            console.log("File created successfully.");
        }
    } )
}
if (command === 'delete'){
    fs.unlink(filename, (err) => {
        if (err){
            console.log("Error deleting file:", err);
        } else {
            console.log("File deleted successfully.");
        }

    })
}

if (command === 'append'){
    fs.appendFile(filename, content, (err) => {
        if (err){
            console.log("Error appending to file:", err);
        } else {
            console.log("Content appended successfully.");
        }
    })
}
if (command === 'list'){
    fs.readdir(__dirname, (err, files) => {
        if (err){
            console.log("Error listing files:", err);
        } else {
            console.log("Files in directory:", files);
        }
    })
}