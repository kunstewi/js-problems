// Create a function that generates a random number between a given range.

function getRandomNumber(max, min) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(getRandomNumber(20, 40));
