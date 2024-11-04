// Write a function that calculates the factorial of a given number.

function calculateFactorial(num){
    if(num === 0 || num === 1){
        return 1;
    } else {
        let factorial = 1;
        for(let i=1; i<=num; i++){
            factorial *= i; // factorial = factorial * i;
        }
        return factorial;
    }
}

console.log(calculateFactorial(20));

// function calculateFactorial(num) {
//     if (num === 0 || num === 1) {
//         return 1;
//     } else {
//         let factorial = 1;
//         for (let i = num; i > 1; i--) {
//             factorial *= i;
//         }
//         return factorial;
//     }
// }

// console.log(calculateFactorial(20));
