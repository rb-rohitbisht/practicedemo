// in this code i am work with array methods like pop,push,shift,unshift

function newArray(arr){

    console.log(`original array ${arr}`);

     arr.push("mango");// add element after the last element
     arr.unshift("orange");//add element before the first element
    console.log(`after adding element in an array ${arr}`);

    arr.pop();
arr.shift();
console.log("after using of pop and shift method array is" ,arr);

}
console.log(newArray(["banana","apple","lemon"]));
 
