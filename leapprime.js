function leap(array){
    for( i=0; i<array.length; i++ ){


        if( array[i] % 4 == 0 && array[i] % 100 !== 0 || array[i] % 400 == 0 ){


            for( j=2; j<array[i]; j++ ){

                if( array[i] % j == 0){

                    console.log(array[i] + " - " + "leap year but not a prime number");    
                }
                 
            }
            
            
        }
        else if( array[i] % j !== 0){
            console.log(array[i] + " - " + "not a leap year but is a prime number");
            }
        }
    }


    console.log(leap([1992,2000,2001,2003,3,7,2007,8,9]));
    