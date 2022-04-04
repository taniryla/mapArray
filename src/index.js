import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
/*-----------------------------------------------------------------
Challenge: 17-mapArray
Difficulty:  Intermediate
Prompt:
The goal is of this challenge is to write a function that performs the functionality of JavaScript's Array.prototype.map method.
- Write a function named mapArray that accepts two arguments: a single array and a callback function.
- The mapArray function should return a new array of the same length as the array argument.
- The mapArray function should iterate over each element in the array (first arg).  For each iteration, invoke the callback function (2nd arg), passing to it as arguments, the current element and its index.  Whatever is returned by the callback function should be included in the new array at the index of the current iteration.
Examples:
mapArray( [1, 2, 3], function(n) {
  return n * 2;
} );
//=> [2, 4, 6]  (a new array)
mapArray( ['rose', 'tulip', 'daisy'], function(f, i) {
  return `${i + 1} - ${f}`;
} );
//=> ["1 - rose", "2 - tulip", "3 - daisy"]
-----------------------------------------------------------------*/
// Your solution for 17-mapArray here:

</div>
`;

function mapArray(arr, callback) {
  let newArr = [];
  arr.forEach((element, idx) => {
      // loop through each item and invoke the callback func and add to the new Arr
      newArr.push(callback(element, idx));
  })
  return newArr;
}


