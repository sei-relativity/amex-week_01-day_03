// Problem
// Write a Javascript program that will store a number (eg 28, 1755, 9, etc) and outputs the following:
// 
// If the number contains 3 as a factor, output 'Pling'.
// If the number contains 5 as a factor, output 'Plang'.
// If the number contains 7 as a factor, output 'Plong'.
// If the number does not contain 3, 5, or 7 as a factor, output the number as a string.

// Examples
// When the number is 28, which has 7 as a factor.
// The program will output "Plong".
// When the number is 1755, which has 3 and 5 as factors.
// The program will output "PlingPlang".
// When the number is 34, which has neither 3, 5 nor 7 as a factor.
// The program doesn't know what to make of that, so it just goes with the straightforward "34".

// Bonus
// Use only 1 console.log!

var result = "";
var number = 34;

if (number % 3 === 0) {
  result = result + "Pling";
}
if (number % 5 === 0) {
  result += "Plang"
}
if (number % 7 === 0) {
  result += "Plong"
}
if (result === "") {
  result = number;
}
console.log(result);