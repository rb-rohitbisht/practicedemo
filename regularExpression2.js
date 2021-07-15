// test() function in regular expression
// test() return true or false  

let reg = /mohit/;
let str = "code with Mohit";
let test = reg.test(str);
console.log(test);

// match () function -- it return the array of results or null
// result = regex.match(string); -- this is wrong
// result = string.match(regex);--- right way

let string = "this is bus ,this is car";
let regex = /this/g;
let match = string.match(regex);
console.log(match);

// search() function -- return the index of first match else -1;

let reg1 = /bus/;
let search = string.search(reg1);
console.log(search);

// replace () function -- return new replaced string with all replacement

let replace = string.replace(reg1,"bike");
console.log("after replace="+replace);