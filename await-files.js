const fs = require('fs').promises;

const filename = process.argv[3];
const command = process.argv[2];
const content = process.argv[4] || 'Node created a file!';

async function manageFiles() {
    try{
        if (command === 'create'){
            await fs.writeFile(filename, content);
            console.log(`File '${filename}' created successfully.`);
        } 

        else if (command === 'read'){
            const data = await fs.readFile(filename, 'utf-8');
            console.log(`Content of '${filename}':`, data);
        }
        else if (command === 'append'){
            await fs.appendFile(filename, content);
            console.log("Content appended successfully.");
        }
        else if (command === 'delete'){
            await fs.unlink(filename);
            console.log(`File '${filename}' deleted successfully.`);
        }
        else if (command === 'list'){
            const files = await fs.readdir(__dirname);
            console.log("Files in directory:", files);
        }
        else{
            console.log("Unknown command. Please use 'read', 'create', 'delete', 'append', or 'list'.");
        }
    }
    catch(err){
        console.log("Error:", err);
    }
}

manageFiles();