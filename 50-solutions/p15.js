// Write a function that takes an array of numbers and returns a new array with only the even numbers.

let arr = [10, 15, 20, 25, 30, 35, 40];

// let newArr = arr[0]+arr[1]+arr[2]... Wrong Approach

function newEvenArr(arr){
    return arr.filter(num => num % 2 === 0);
}

console.log(newEvenArr(arr));

// Using for loop

function newEvenArr(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            result.push(arr[i]);
        }
    }
    return result;
}

console.log(newEvenArr(arr));
