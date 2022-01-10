// Given a sentence, your functions should return the number of words in the sentence.
// Example:
// Input: noOfWords(We are neoGrammers) ––> Output: 3

//Using normal function

// function noOfWords (str) {
//    return str.split(" ").length;
// }

// console.log(noOfWords("We are neoGrammers"));
// document.write(noOfWords("We are neoGrammers"));

//Using Arrow Function

noOfWords = str => str.split(" ").length;
document.write(noOfWords("We are neoGrammers"));