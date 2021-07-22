// in this code we learn how to concatenate two strings

function concat(str1,str2){
    let newStr = str1;
    newStr += str2; //concat string by using + operator
    return `after concatenate ${newStr}`
}
console.log(concat("rohit","bisht"));
 // we also concat string by using concat function 

 function concat1(str1,str2){
   return `after using concat method ${str1.concat(str2)}`
 }
  console.log(concat1("hello","everyone"));