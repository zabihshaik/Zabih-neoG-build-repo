// Functions
// Easy
// 1.Given a and b, your function should return the value of ab
// Example:
// Input: power(2,3) ––> Output: 8

// const outputRes = document.querySelector("#output");

// function Power(a,b) {
//  let result = Math.pow(a,b);
//  outputRes.innerText = result;

// }

// Power(2,3);

//Using Arrow Function

// const outputRes = document.querySelector("#output");

Power = (a,b) => {
    let result = Math.pow(a,b);
    // console.log(result);
    document.write(result);
}
Power(2,3);
