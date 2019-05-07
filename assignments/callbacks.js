// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

  //Given this problem: 

  
  // function firstItem(arr, cb) {
  // }
  function firstItem(arr, cb) {
      return cb(arr[0]);
  }
  firstItem(items, function(first) {
    console.log(first)
  });
//firstItem passes the first item of the given array to the callback function.
// Potential Solution:
// Higher order function using "cb" as the call back
// Function invocation 


// getLength passes the length of the array into the callback.
// function getLength(arr, cb) {
// }
function getLength(arr, cb) {
  return cb(arr.length);
}
getLength(items, function(length) {
  console.log(length)
});

// last passes the last item of the array into the callback.
// function last(arr, cb) {
// }
function last(arr, cb) {
  return cb(arr[items.length -1]);
}

last(items, function(last) {
  console.log(last)
});



  // sumNums adds two numbers (x, y) and passes the result to the callback.
// const add = (x, y, callback) => {
//   callback(x + y)
// }

 const sumNums = (x, y, cb) => {
  cb(x + y)
}
const printAnswer = (answer) => {
  console.log(answer)
}
sumNums(12, 164, printAnswer)


// multiplyNums multiplies two numbers and passes the result to the callback.
// function multiplyNums(x, y, cb) {
// }

const multiplyNums = (x, y, cb) => {
  cb(x * y)
}
const sayAnswer = (answer) => {
  console.log(answer)
}
multiplyNums(12, 164, sayAnswer)


 // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
// function contains(item, list, cb) {
// }


function contains(item, list, cb) {
  if (list.includes(item)) {
    return true;
  } 
  else {
    return false;
  }
}

console.log(items.includes('Gum'));







/* STRETCH PROBLEM */

//function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.}
