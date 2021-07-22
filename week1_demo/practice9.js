//in this code i am declare an array and access the element from that array 

const arr = ["cars","bikes","trucks","bicycles","supercars"];

console.log(`first element is ${arr[0]}`);//this gives the first element from the array arr
console.log(`the last element is  ${arr[arr.length-1]}`);//this gives the last element from the array arr

//modify the array arr 
 
arr[0] = "house";
arr[arr.length-1] = "superbikes";
console.log(`after modify the array the first element is ${arr[0]}`);
console.log(`after modify the array the last element is ${arr[arr.length-1]}`);
