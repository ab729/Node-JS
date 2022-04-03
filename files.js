const { error } = require('console');
const fs = require('fs');
//it is a bulit in code, fs is shortcut for "files system" we use this codding page to read, write and delete and file like txt


// reading files
fs.readFile('./docs/table1.txt', (error, data) => {
    if(error){
        console.log("error 404, file not found");
    }
    console.log(data.toString());
});

/*ToString() for making the texts in the files in string form,
    fs.readFile('the directory of the file we want to read', (here we write what suit our purpose, in this case it is two files))
*/

console.log("Hi");
// if we run files.js "Hi" will be printed before fs.readFile and thats because jave script will take sometime to finish reading.
 


// writing files
fs.writeFile('./docs/table2.txt', "whats'up" , () => {
    console.log("Succesful");
});

// directories
if(!fs.existsSync('./docs/table3.txt')) {
 fs.mkdir('./docs/table3.txt', (err) => {
    if(err){
        console.log("error files already exists");
    }
        console.log('folder created');
    
})
 } else {
            fs.rmdir('./docs/table3.txt', (err) => {
                if(err) {
                    console.log("error");
                }
                console.log('folder deleted');
            })
        }


// deleting files
if(fs.existsSync('./docs/delete.txt')) {
    fs.unlink('./docs/delete.txt', () => {
        if (err) {
            console.log(err)
        }
        console.log('file deleted');
    })
}
