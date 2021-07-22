// in this code we learn more about string methods like 
// how to find the length of the string
// find first character in a string
// find last character in a string 
// find nth character in a string

function checkString(str){
    length =  `length of the string ${str.length}`;
    firstchar = `first character in a string ${str[0]}`;
    lastchar = `last character in a string ${str[str.length-1]}`
    console.log( length,firstchar,lastchar);
}
 console.log(checkString("hello i am rohit bisht"));
