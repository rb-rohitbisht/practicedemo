//Now learn floor method and ceil method 

const numbers = function(array,floor= [],ceil =[]){
 
    for( i= 0; i<array.length; i++){

        floor[i] = Math.floor(array[i]);// floor method rounded down to its nearest integer
              
        ceil[i] = Math.ceil(array[i]);// ceil method rounded up to its nearest integer
    }
     
    console.log("after applying floor method the numbers ="+ floor, "after applying ceil method the numbers = "+ ceil);
}

console.log(numbers([2.1,3.5,5.7,7.2,7.8,8.9,9.1]));