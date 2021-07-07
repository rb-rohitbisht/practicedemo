// now to learn about random method 
// math.random is used to create random numbers

const random = function(min,max){

    let random = Math.floor(Math.random()* (max-min + 1) + min);
    // this will create random number b/w min and max
     console.log(`random number b/w ${min} and ${max} = ` + random);
}
 console.log(random(10,100));