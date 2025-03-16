// Find the largest element in an array using the `reduce()` method.

let arr = [10, 15, 20, 25];

function findLargestElement(arr){
    return arr.reduce((max,current) =>
        current > max ? current : max)
    
}

let reduce = findLargestElement(arr);

console.log(reduce);