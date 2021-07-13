
//   function isPrime(num) {
//     // if(num < 2) return false;
//     let i = 0;
//     let k = 2;
//   for (i; i<num.length; i++ ){

//     for ( k ; k < num; k++){
//       if( num % k == 0){
//     console.log(num," is not prime");
    
//       }
//       else {
//          console.log(num[i]+"not prime")
//       }
//     }
//     // console.log(num,"is a prime number");
//   }
// }
//   isPrime([3,4,5,6,7,8]);
   
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