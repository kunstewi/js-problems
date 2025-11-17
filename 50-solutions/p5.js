// Write a function that takes a string and returns the reversed version of it.

let str = "Hello World!";

function reversedString(str) {
  return str.split("").reverse().join("");
}

console.log(reversedString(str));
