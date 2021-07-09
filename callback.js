//here i am learn and work with callback function 
//callback function is a function passed as a argument to another function
//this technique allow to call a function in another function

function myDisplayer(sum,subtract) {
  console.log('sum of two number'+"="+ sum +"\n"+ 'difference of two number '+"="+ subtract);
}

function myCalculator(num1, num2, myCallback) 
{
  let sum = num1 + num2;
  let subtract = num1-num2;
  myCallback(sum,subtract);
}

myCalculator(5, 5, myDisplayer);
