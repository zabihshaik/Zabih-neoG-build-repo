// Given three angles of a triange, your function should return if it is a scalene, isosceles, equilateral triangle or not a triangle at all. Example:
// Input: typeOfTriangle(30, 60, 90) ––> Output: Scalene Triangle

//Using Normal Function

function typeOfTriangle(angle1, angle2, angle3) {
    if (angle1 + angle2 + angle3 === 180) {
        // return "triangle";
        if (angle1 === angle2 && angle2 !== angle3 || angle1 === angle3 && angle2 !== angle3 || angle2 == angle3 && angle3 !== angle1) {
            return "isosceles triangle";
        }
        if (angle1 === angle2 && angle2 === angle3) {
            return "equilateral triangle";
        } else
            return "scalene triangle";
    } else {
        return "not a triangle";
    }
}
document.write(typeOfTriangle(30, 60, 90));
document.write("<br>");
document.write(typeOfTriangle(45, 45, 90));
document.write("<br>");
document.write(typeOfTriangle(60, 60, 60));
document.write("<br>");
document.write(typeOfTriangle(70, 60, 60));


//Using Arrow Function

typeOfTriangle = (angle1, angle2, angle3) => {
    if (angle1 + angle2 + angle3 === 180) {
        // return "triangle";
        if (angle1 === angle2 && angle2 !== angle3 || angle1 === angle3 && angle2 !== angle3 || angle2 == angle3 && angle3 !== angle1) {
            return "isosceles triangle";
        }
        if (angle1 === angle2 && angle2 === angle3) {
            return "equilateral triangle";
        } else
            return "scalene triangle";
    } else {
        return "not a triangle";
    }
}
document.write("<br> Using arrow function: <br>");
document.write(typeOfTriangle(30, 60, 90));
document.write("<br>");
document.write(typeOfTriangle(45, 45, 90));
document.write("<br>");
document.write(typeOfTriangle(60, 60, 60));
document.write("<br>");
document.write(typeOfTriangle(70, 60, 60));
