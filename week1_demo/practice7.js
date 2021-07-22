// in this code we learn type conversion
// first we convert string to number 

function convert(str){
    let value = Number(str);
    return value;
}
console.log(convert("7656"));

// now we convert number into a string 
function convert1(num){
    let value = num.toString();
    return value;
}
console.log(convert1(786));
