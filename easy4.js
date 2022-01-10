// Given n numbers, your
// function should
// return the minimum of them all.The number of parameters won 't be accepted from user.
// Example:
//     Input: findMin(3, 5)–– > Output: 3
// Input: findMin(3, 5, 9, 1)–– > Output: 1(Hint: Lookup rest parameters in JavaScript)

//Using normal function

// function findMin(a,b) {
//     if(a<b)
//     return a;
//     else return b;
// }
// console.log(findMin(3,5));

function findMin(a,b,c) {
    if(a<b) {
        if(b<c)
        return a;
        else if(c<a)
        return c;
    }
    
}
let arrayList = [3, 5, 9, 1];
let min = arrayList[0];
for (let i = 1; i < arrayList.length; i++) {
  if (arrayList[i] < min) {
    min = arrayList[i];
  }
}
console.log(min);