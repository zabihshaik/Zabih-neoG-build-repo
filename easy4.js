// Given n numbers, your
// function should
// return the minimum of them all.The number of parameters won 't be accepted from user.
// Example:
//     Input: findMin(3, 5)–– > Output: 3
// Input: findMin(3, 5, 9, 1)–– > Output: 1(Hint: Lookup rest parameters in JavaScript)

//Using normal function

// function findMin(){

//   let array = [3, 5, 9, 1];
//   var min = Math.min(...array);
//   return min;
// }

// document.write(findMin(3,5,9,1));

// Using Arrow Function

// findMin = () => {
//   let array = [3, 5, 9, 1];
//   var min = Math.min(...array);
//   return min;
// }

// document.write(findMin(3,5,9,1));

findMin = () => {
  var min = Math.min(...[3, 5, 9, 1]);
  return min;
}

document.write(findMin(3,5,9,1));
