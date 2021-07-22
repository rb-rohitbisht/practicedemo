// this is code to arrange a given string into a alphabatic order

function arrangeString(string){
console.log("before arrange",string);
    let val = string.split('').sort().join('');
     console.log("after arrange in alphabatic order",val)
}

console.log(arrangeString("rohit bisht "))