// Use map() to double all the elements in an array.

let arr = [10, 15, 20, 25];

function doubleArrayElements() {
  return arr.map((num) => {
    return num * 2;
  });
}

console.log(doubleArrayElements(arr));
