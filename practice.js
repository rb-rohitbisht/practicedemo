
  function isPrime(num) {
    if(num < 2) return false;
  
    for (let k = 2; k < num; k++){
      if( num % k == 0){
    console.log(num," is not prime");
    return ;
      }
    }
    console.log(num,"is a prime number");
  }
  console.log(isPrime(7))
   
  // leap year function
   function leap(array){
        
    for(i=0; i<array.length; i++){
        if( array[i] % 4 == 0 && array[i] % 100 !== 0 || array[i] % 400 == 0){

            console.log(array[i], "is a leap year");
        }
        else{
            console.log(array[i], " is not a leap year");
        }
    }

   }
    console.log(leap([1998,2000,2002,2004,2006,2008]));