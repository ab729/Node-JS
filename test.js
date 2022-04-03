const name = 'Mario';
const students = ['Ahmed' , 'yusif' , 'Ali'];

console.log (name);
// printing name

const greet = (name)=>
{
    console.log(`hello, ${name}`);
}

greet('mario');
greet('Ahmed');


module.exports = {students, name};
// this command exports a specific element, this element will be recived by the function "const call = require('./test');"
