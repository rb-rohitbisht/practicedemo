// Shorthand character classes (regularExpression)


let regex = /\whit/;     //word character number,alphabet, _ underscore 
    regex = /\w+hit/;    // one or more word character
    regex = /\w+mob/;
    regex = /\Wmob/;     // '\W' not a word character or alphabet or number 
    regex = /\d\%mob/;   // "\d" means digit
    regex = /\d+\%mob/;  // more than one 
    regex = /\D+8/;      // "\D" means non digit 
    regex = /\snumber/;  // "\s" match white space
    regex = /\s+number/; // "\s+" match more than one white space
    regex = /\Snumber/;  // "\S" match non white space
    regex = /\S+number/; //  "\S" match more than one non white space

    // assertion

    regex = /r(?=o)/;
    regex = /n(?![au])/;
    let string = "name rohit bisht           mobilenumber 9999999999%mob8";
let result = string.match(regex);
console.log("result = ", result);

if(regex.test(string)){

    console.log(`the string ${string} match the expression ${regex.source}`);
}
else{
    console.log(`the string ${string} does not match the expression ${regex.source}`);
}

