function myFun(num){
    if ( num<1){
        return "not prime";

    }
    else 
        for(i =2; i<num;i++){
            if(num%i == 0){
                return "not a prime";
            }
        }
    
    return " prime number";
}
console.log(myFun(7));
