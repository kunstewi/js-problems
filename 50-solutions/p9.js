// Create an Object representing a car with properties like make, model, and year. Add a method to the car object to start the engine.

let car = {
  make: "Tata",
  model: "Nixon",
  year: 2023,
};

car.startEngine = function () {
  console.log("Engine Started");
};

console.log(car);

car.startEngine();
