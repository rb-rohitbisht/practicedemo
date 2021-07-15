//let look into some meta-character's symbol
// console.log("hello")

let regex = /harry/;
regex = /^harr/; // ^ charat at the first of the string  means "start with"
regex = /ry$/; // $ at the end of the string means "string ends with" 
regex = /h.rry/g; // matches any one character
regex = /h*rry/g; // matches any zero or more character
regex = /ha?rryi?/; // ? after character means that character is optional
regex = /h\*rry/g; // "\" use to match the actual symbol
let string = "h*rry is good boy code with h*rry";
let result = string.match(regex);
console.log(result);
if(regex.test(string)){
    console.log(`expression ${regex.source} matches the string ${string}`);
}
else{
    console.log(`expression ${regex.source} does not matches the string ${string}`);
}
