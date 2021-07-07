// here i am work with min and max method 
// math.min is used to find the minimum number 
// math.max is used to find the maximum number
 const values = function(arrayNum){

    let minNum = Math.min.apply(null,arrayNum);
    let maxNum = Math.max.apply(null,arrayNum);
    console.log(`minimum number from ${arrayNum} is ` + minNum);
    console.log(`maximum number from ${arrayNum} is ` + maxNum);
 }

  console.log(values([23,44,55,5,6,8,9,33]));