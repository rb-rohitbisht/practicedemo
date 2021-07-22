// in this code i am working with array sorting 
//first alphabetically sorting 
 
function alphaSort(array){
    console.log("before sort ",array);
    array.sort();
    console.log( "after sort", array);
}

console.log(alphaSort(["d",'f','h','t','e']));
 
//numeric sort 
function numSort(array){
    console.log("before sort ",array);
    array.sort(function(a,b){
       return a-b;
    })
    console.log("after sort ",array);
}

console.log(numSort([5,7,3,2,1,9,0,23,4,53]))