// Remove all occurrences of a specific element from an array.

let arr = [10, 15, 10, 25, 10, 35, 10];
let target = 10;

function removeElementOfArray(arr,target){
    return arr.filter(item => item !== target);
}

let removed = removeElementOfArray(arr,target);

console.log(removed);