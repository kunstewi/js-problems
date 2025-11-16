// Create a prototype for a Product object with properties like name, price, and quantity. Add a method to the product prototype to calculate the total value.

function Product(name, price, quantity){
    this.name = name;
    this.price = price;
    this.quantity = quantity;
}

// Add a method to the product to calculate the total value
Product.prototype.calculateTotalValue = function(){
    return this.price * this.quantity;
};

// Usage
const product1 = new Product("Laptop", 1000, 3);
console.log(`Total value of the ${product1.name}: $${product1.calculateTotalValue()}`);