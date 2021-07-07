// Now learn about Math methods

const round = function (arrNum){

    console.log("before round of numbers = " + arrNum );

    for( i = 0; i<arrNum.length; i++){

         arrNum[i] = Math.round(arrNum[i]);//round method used to round the number into a nearest integer.
    
        
    }
    console.log("after round of numbers = " + arrNum); 
}
console.log(round([22.3,5.6,7.7,9.3,5.2,4.8]));