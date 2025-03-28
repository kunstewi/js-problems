// Implement a recursive function to find the nth Fibonacci Number.

function findFibonacci(n){
    if (n === 0){
        return 0;
    }
    if (n === 1){
        return 1;
    }
    return findFibonacci(n - 1) + findFibonacci(n - 2);
}

console.log(findFibonacci(6));