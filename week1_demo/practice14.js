//this is a code to sort the given number array in descending order
function descending(arr){
    console.log("before sort",arr);
    let val = arr.sort(function(a,b){

        return b - a ;
    })
     console.log("after sort in descending order arr is ",val);
}
console.log(descending([44,23,55,67,88,97,45,33,100]));