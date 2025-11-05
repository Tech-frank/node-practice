const fs = require('fs');

const filename = process.argv[3];
const command = process.argv[2];

if (command === 'read'){
    if (!filename){
        console.log("Please provide a filename to read.");

    }else{
        console.log(fs.readFileSync(filename, 'utf-8'));
    }
}
else if (command === 'create'){
    if (!filename){
        console.log("Please provide a filename to create.");
    }else{
        fs.writeFileSync(filename, 'Node created a file!');
    }
}
else if (command === 'delete'){
    if (!filename){
        console.log("Please provide a filename to delete.");

    }else{
        fs.unlinkSync(filename);
    }
}
else if (command === 'list'){
    const files = fs.readdirSync(__dirname);
    files.forEach(file => console.log(file));
}
else if (command === 'append'){
    if (!filename){
        console.log("Please provide a filename to append to.");
    }else{
        text = process.argv[4] || 'No text provided to append.';
        fs.appendFileSync(filename, text);
    }
}
else{
    console.log("Unknown command. Please use 'read', 'create', 'delete', or 'list'.");
}