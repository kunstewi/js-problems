// Create a counter function using closures that increments and returns the count on each call.

function createCounter(){
    let count = 0;
    return function(){
        count++;
        return count;
    };
}

const counter = createCounter();
console.log(counter());
console.log(counter());
console.log(counter());