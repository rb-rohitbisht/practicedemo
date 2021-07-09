function leap(array) {
    for (i = 0; i < array.length; i++) {
        let j = 2
        if (array[i] % 4 == 0 && array[i] % 100 !== 0 || array[i] % 400 == 0) {
          
            for (j; j < array[i]; j++) {
                if (array[i] % j == 0) {
                    console.log(array[i] + " - " + "leap year but not a prime number");
                    break;
                }
                else {
                    console.log(array[i] + " - " + "leap year and a prime number");
                }
            }

        }
        else {
 
            for (j; j < array[i]; j++) {
                if (array[i] % j == 0) {
                    console.log(array[i] + " - " + " not a leap year but not a prime number");
                }
                else {
                    console.log(array[i] + " - " + " not a leap year and a prime number");
                }
            }
        }
    }
}

leap([1992, 2000, 2001, 2003, 3, 7, 2007, 8, 9])