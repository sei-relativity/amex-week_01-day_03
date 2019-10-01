// Your Answer below

let output = "";
let number = 8;

if (number % 3 === 0) {
    output = output + "Pling ";
}
if (number % 5 === 0) {
    output = output + " Plang "
}
if (number % 7 === 0) {
    output = output + " Plong"
}
if (output === "") {
    output = number.toString();
}
console.log(output);