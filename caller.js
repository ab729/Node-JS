const call = require ('./test');
// this command calls code from a diferent file

//const {student, name} = require('/test');
//this command will import what you write in side {  } from the page that was exported



console.log(call.students, call.name);
//this code do the same as the prevois one but i a diffrent syntax


console.log(call);
//this command will print the commands in the page test then the element that was exported from it


const os = require('os');
console.log(os.platform(), os.homedir());
//os is a bulit in code there is no need to do anything more than writing it.
