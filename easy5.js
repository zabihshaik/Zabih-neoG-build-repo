// Given n numbers, your function should return the maximum of them all. The number of parameters won't be accepted from user.
// Example:
// Input: findMax(3,5) ––> Output: 5
// Input: findMax(3,5,9,1) ––> Output: 9
// (Hint: Lookup rest parameters in JavaScript)

//Using normal function

// function findMax(){

//   let array = [3, 5, 9, 1];
//   var max = Math.max(...array);
//   return min;
// }

// document.write(findMax(3,5,9,1));

// Using Arrow Function

// findMax = () => {
//   let array = [3, 5, 9, 1];
//   var max = Math.max(...array);
//   return max;
// }

// document.write(findMax(3,5,9,1));

findMax = () => {
    var max = Math.max(...[3, 5, 9, 1]);
    return max;
  }  
  document.write(findMax(3,5,9,1));
  