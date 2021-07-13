/* const array=[1992, 2000, 2001, 2003, 3, 7, 2007, 8, 9,21]; */
function leap(array) {
    for (i = 0; i < array.length; i++) {
      let flag=0;
        if (array[i] % 4 == 0 && array[i] % 100 !== 0 || array[i] % 400 == 0) {
          
            for (j=2; j < array[i]/2; j++) {
                if (array[i] % j == 0) {
                  flag=1;
                    break;
                }
            }
        }
        else {
            flag=3;
            for (j=2; j < array[i]/2; j++) {
                if (array[i] % j == 0) {
                  flag=2;
                  break;
                }
            }
        }
        if(flag==1){
        console.log(array[i] + " - " + "leap year but not a prime number");
        }
        else if(flag==0){
        console.log(array[i] + " - " + "leap year and a prime number");
        }
        else if(flag==2){
        console.log(array[i] + " - " + " not a leap year but not a prime number");
        }
        else{
            console.log(array[i] + " - " + " not a leap year and a prime number");
 
        }
    }
   
   }
   
   leap([1992,1997,1998,2000,2003,2004,3,7,8,9,21,2020,2021]);