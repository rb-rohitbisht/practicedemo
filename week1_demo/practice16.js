// this is code which check the given word or sentence is palindrome or not

function palindrome(str){

   const len = str.length;

   for( i = 0; i < len/2; i++){

    if(str[i] !== str[len-1-i]){
        return 'not a palindrome';
    }

}
return "palindrome";

}

console.log(palindrome("rattar"));