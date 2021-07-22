// in this program ia am going to delete a property from the object
var myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
  };
console.log("before deleting a new property ",myDog)
  delete myDog.legs;
  console.log("after deleting a new property ",myDog);