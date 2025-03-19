// Write a recursive function to calculate the factorial of a given number.

function calculateFactorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * calculateFactorial(n - 1);
}

console.log(calculateFactorial(5));
