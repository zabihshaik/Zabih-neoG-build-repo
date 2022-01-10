// Functions
// Easy
// 2.Given length of a regular hexagon, your function should return area of the hexagon.
// Example:
// Input: areaOfHexagon(10) ––> Output: 259.80

// const outputRes = document.querySelector("#output");


//Using Function
// function areaOfHexagon(s) {
//     document.write((
//         (3 * Math.sqrt(3) * (s * s)) /2 ).toFixed(2));
             
// }
// areaOfHexagon(10);


//Using Arrow Function

areaOfHexagon = s => {
    let result = ((3 * Math.sqrt(3) * (s * s)) /2 ).toFixed(2);
    document.write(result);
}
areaOfHexagon(10);
