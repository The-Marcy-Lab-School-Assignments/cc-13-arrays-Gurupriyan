//write your code here
//declare a funciton named average that takes in an array as parameter
const averageInArray = (array) => {
  //container for getting the sum of all the entries
  let sum = 0;
  //iterating through the loop
  for (let i = 0; i < array.length; i++){
    //adding the value of sum to itself and the entries in the array
    sum += array[i];
  }
  //return average = sum/total number of items
  return sum/array.length;
} 

console.log(averageInArray([2, 2, 5, 10]));