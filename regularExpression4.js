//regular expression
//character sets []

let regex = /Rohit/;// check Rohit in the string 
    regex = /R[a-z]hit/; // can be any character from a to z
    regex = /[A-Z]ohit/; // can be any character from A to Z
    regex = /h[ert]llo/; // can be e , r , t 
    regex = /[^RHUY]ohit/; // can not be RHYU
    regex = /Rohi[a-zA-Z0-9]/;


    //Quantifier {}
    
    regex = /hel{2}o/;// "l" can occur exactly 2 times      
    regex = /hel{0,2}o/; // "l" can occur o , 1 , 2 times not more than 2

    // grouping ()

    regex =/(bye){2}/;

let string = "hello,I am Rohit , byebye";
let result = string.match(regex);
console.log("result = ", result);

if(regex.test(string)){

    console.log(`the string ${string} match the expression ${regex.source}`);
}
else{
    console.log(`the string ${string} does not match the expression ${regex.source}`);
}


