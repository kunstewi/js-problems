// Write a function that calculates the factorial of a given number.

function calculateFactorial(num){
    if(num === 0 || num === 1){
        return 1;
    }
    else{
        let factorial = 1;
        for(let i=1; i<=num; i++){
            factorial *= i; // factorialDigits = factorialDigits * i;
        }
        return factorial;
    }
}

console.log(calculateFactorial(20));