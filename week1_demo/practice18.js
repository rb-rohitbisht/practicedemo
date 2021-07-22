// this is code to find a given number is prime or not

function prime(num){
    if(num<1){
        return "not a prime number "
    }
    for (i = 2; i < num; i++){

        if(num % i == 0){
            return `${num} not a prime number`;

        }

    }
     return `${num} is a prime number`;

}
console.log(prime(41))