console.log(global);
//

global.setTimeout(() => {
    console.log('Hello this is the timeout window');
    clearInterval(inte);
}, 3000);

//runing the code after 3 seconds
//clearInterval is for stoping after reaching a specific point 

const inte = setInterval(() => {
    console.log('in interval');

}, 1000);

//running the code every second


console.log(__dirname);
console.log(__filename);

// console.log(__dirname) for printing the directory of the file 
// (__filename) for printing the file name with the directory


/*------------------------------------------------------------------------------------------------*/
