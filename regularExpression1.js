//here i am work with regular expression 
// learn exex () function

let regex = /mohit/;  //this is regular expression literal in js 

console.log(regex);
console.log(regex.source);

// 1. exec() this function return array for match or null for no match

let string = "mohit is a good boy";
let result = regex.exec(string);
console.log(result);

// flag "g" global flag 
// flag "i" case insensitive

let reg = /this/gi;
let str = "This is a bus ,this is a car ";
let result1 = reg.exec(str);
console.log(result1);
result1 = reg.exec(str);
console.log(result1); 
