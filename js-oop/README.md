# 🚀 JavaScript OOP Mastery Guide

This guide covers the core concepts of Object-Orientled Programming (OOP) in JavaScript, providing a focused theoretical review, 100 theoretical interview questions, and 50 hands-on coding problems.

---

## 📜 JavaScript Object-Oriented Programming (OOP) Theory

Object-Oriented Programming (OOP) is a programming paradigm based on the concept of **"objects"**, which contain both data (properties) and behavior (methods). JavaScript is a **prototype-based** language that uses the `class` syntax (ES6) as **syntactic sugar** to achieve classical OOP structures.

### 1. 🏗️ Key OOP Pillars

| Pillar | Concept | JavaScript Implementation |
| :--- | :--- | :--- |
| **Encapsulation** | Bundling data and methods into a single unit (object) and controlling access to internal details. | Achieved via **Closures** (for private variables pre-ES2020) or **`#` private fields** (ES2020+). |
| **Abstraction** | Hiding complex implementation logic and exposing only essential public methods. | Achieved through well-defined **public methods** that hide the internal complexity. |
| **Inheritance** | A mechanism where a child object acquires properties/methods from a parent object. | Achieved using the **Prototype Chain** and the **`extends`** keyword in classes. |
| **Polymorphism** | The ability of a method to act differently based on the object it is called upon. | Achieved through **Method Overriding** (subclass redefines a superclass method). |



[Image of JavaScript Prototype Chain]


---

### 2. 📝 Core JS OOP Mechanisms

#### A. Objects and Prototypes

* **Objects:** The fundamental unit, a collection of properties (data) and methods (functions).
* **Constructors:** Functions used with the `new` keyword to create new instances.
    ```javascript
    function Car(make) {
        this.make = make; 
        this.start = function() { console.log('Vroom'); }; 
    }
    const myCar = new Car('Toyota');
    ```
* **Prototypes:** The mechanism for inheritance. Every object links to a prototype object (`__proto__`) from which it inherits properties and methods. This linked sequence is the **Prototype Chain**.
* **Classes (ES6):** Syntactic sugar over the prototype system. They provide a cleaner, more familiar syntax for creating blueprints and managing inheritance.

#### B. Inheritance in JavaScript

* **Prototypal Inheritance:** Direct inheritance between objects, often done using `Object.create(proto)`.
* **Class Inheritance (ES6):** Uses `class Child extends Parent`. The `super()` keyword is mandatory in the subclass constructor to call the parent's constructor and initialize `this`.

#### C. Access Modifiers

* **Public:** Default access for all properties.
* **Private:**
    * **Closure (Pre-ES6):** Variables defined inside the constructor scope that are only accessible by methods defined within the same scope.
    * **Private Fields (ES2020+):** Use the `#` prefix for truly private class members (e.g., `#balance`).

---
---

## ❓ 100 Theoretical OOP Questions

### I. Core Principles and Fundamentals (1-25)

[ ] 1. What is the fundamental concept behind Object-Oriented Programming (OOP)?

[ ] 2. What are the four main pillars of OOP?

[ ] 3. How does JavaScript support the OOP paradigm?

[ ] 4. What is the difference between a **class** and an **object**?

[ ] 5. Explain the concept of **Encapsulation**.

[ ] 6. How is Encapsulation primarily achieved in JavaScript (pre-ES2020)?

[ ] 7. What ES2020 feature offers true private fields in JS classes?

[ ] 8. Explain the concept of **Abstraction**.

[ ] 9. How is Abstraction implemented in a typical JavaScript object?

[ ] 10. Explain the concept of **Inheritance**.

[ ] 11. What is the key benefit of using Inheritance?

[ ] 12. Explain the concept of **Polymorphism**.

[ ] 13. Differentiate between **Method Overloading** and **Method Overriding**.

[ ] 14. Which form of Polymorphism is natively supported in JavaScript classes?

[ ] 15. What is the difference between a **property** (data) and a **method** (behavior)?

[ ] 16. What is a **Constructor** function?

[ ] 17. What is the purpose of the **`new`** keyword?

[ ] 18. What is the role of the **`this`** keyword inside a constructor?

[ ] 19. What does the **`instanceof`** operator check?

[ ] 20. What is a **setter** method?

[ ] 21. What is a **getter** method?

[ ] 22. What is the purpose of using getters and setters (accessors)?

[ ] 23. What is an **interface** in OOP, and does JavaScript have native support for it?

[ ] 24. What are **Mixins**, and why are they used in JavaScript OOP?

[ ] 25. Describe the term **"Is-A"** relationship versus **"Has-A"** relationship in OOP.

---

### II. Prototypes and Inheritance (26-50)

[ ] 26. What is the fundamental difference between **Classical OOP** and **Prototypal OOP**?

[ ] 27. What is the **Prototype Chain**?

[ ] 28. How does an object find a property or method in the Prototype Chain?

[ ] 29. What is the value of the `[[Prototype]]` for an object created via an ES6 class?

[ ] 30. What property on a constructor function is used to set up the prototype for new objects?

[ ] 31. What is the purpose of the **`__proto__`** (dunder proto) property?

[ ] 32. What is the modern, preferred way to get the prototype of an object?

[ ] 33. What is the modern, preferred way to set the prototype of an object?

[ ] 34. How can you check if an object's property is its **own property** and not inherited?

[ ] 35. What method is used to create a new object with a specified prototype?

[ ] 36. Explain what happens when you try to assign a value to an inherited property.

[ ] 37. What is **Shadowing** in the context of the Prototype Chain?

[ ] 38. How do you implement inheritance using pre-ES6 constructor functions?

[ ] 39. What is the "Diamond Problem", and how does JavaScript's inheritance model avoid it?

[ ] 40. Does JavaScript support Multiple Inheritance?

[ ] 41. How are methods added to a constructor function to ensure they are shared (inherited) and not duplicated?

[ ] 42. What happens if you forget to use the **`new`** keyword with a constructor?

[ ] 43. What is a **Deeper Prototype Chain**, and what are its potential performance implications?

[ ] 44. What is the prototype of an object created using an **Object Literal (`{}`)**?

[ ] 45. Is a function itself an object? If so, what is its prototype?

[ ] 46. What is the purpose of the **`Object.keys()`** method compared to a `for...in` loop?

[ ] 47. What is the significance of the **`constructor`** property on an object's prototype?

[ ] 48. What is the final object at the end of every non-null Prototype Chain?

[ ] 49. How do Mixins relate to the concept of **Composition over Inheritance**?

[ ] 50. How does **`Object.assign()`** help in achieving Mixin-like behavior?

---

### III. ES6 Classes and Modern OOP (51-75)

[ ] 51. Why were ES6 classes introduced if JS already had prototypes?

[ ] 52. Why are ES6 classes considered **"syntactic sugar"**?

[ ] 53. What is the name of the special method used to create and initialize objects in a class?

[ ] 54. What keyword is used in a subclass to inherit from a superclass?

[ ] 55. Why must you call **`super()`** inside a subclass constructor?

[ ] 56. What happens if you try to use `this` before calling `super()` in a subclass constructor?

[ ] 57. How do you call a method from the parent class within a subclass method?

[ ] 58. What are **Static Methods** in a class?

[ ] 59. How are Static Methods called?

[ ] 60. How can you define **Public Class Fields** in a modern JS class (ES2019+)?

[ ] 61. How do you define a **private field** in an ES6+ class?

[ ] 62. What keyword is used to create an instance of a class?

[ ] 63. Can you redefine the constructor in a subclass?

[ ] 64. What happens if a subclass does not have an explicitly defined constructor?

[ ] 65. Can you use `const` or `let` inside a class definition (outside of methods)?

[ ] 66. How does the concept of Closures relate to implementing private variables pre-ES2020?

[ ] 67. Can a class method be an **Arrow Function**? What is the consequence?

[ ] 68. What is a **Class Expression**?

[ ] 69. Are class declarations **hoisted**?

[ ] 70. What is the **Temporal Dead Zone** (TDZ) for classes?

[ ] 71. How do you define a property that is **enumerable** versus **non-enumerable**?

[ ] 72. What are **Data Descriptors** and **Accessor Descriptors**?

[ ] 73. What is the purpose of the **`Object.defineProperty()`** method?

[ ] 74. How can you define multiple properties at once on an object?

[ ] 75. How do you create an **abstract base class** (in principle, since JS doesn't have native abstract classes)?

---

### IV. Design Patterns and Advanced Concepts (76-100)

[ ] 76. Describe the **Module Pattern** and its relevance to Encapsulation.

[ ] 77. What is the purpose of the **Singleton Pattern**?

[ ] 78. How would you implement the **Singleton Pattern** in JavaScript?

[ ] 79. Explain the **Factory Pattern**.

[ ] 80. When would you choose to use the Factory Pattern over a standard constructor?

[ ] 81. Explain the **Observer Pattern**.

[ ] 82. What is the **Decorator Pattern**?

[ ] 83. How does the Mixin approach differ from true classical Inheritance?

[ ] 84. What is **"Composition over Inheritance"**?

[ ] 85. What are **Higher-Order Functions** (HOFs), and how do they relate to OOP?

[ ] 86. How can you create an **immutable object** in JavaScript?

[ ] 87. What is the difference between **`Object.freeze()`** and **`Object.seal()`**?

[ ] 88. Explain **Dependency Injection** in an OOP context.

[ ] 89. What is **Type Checking** in the context of OOP, and how is it often simulated in JS?

[ ] 90. What is **Method Chaining**, and how is it implemented?

[ ] 91. What is the **Liskov Substitution Principle**?

[ ] 92. What is the **Open/Closed Principle**?

[ ] 93. How do **Generators** or **Iterators** relate to object behavior?

[ ] 94. What is a **Code Smell** in OOP?

[ ] 95. What is the concept of **"Separation of Concerns"**?

[ ] 96. How do **`Proxy`** objects enable advanced OOP features like dynamic property interception?

[ ] 97. What is a **Descriptor** object when creating properties?

[ ] 98. Describe the concept of **Metaprogramming** in JS OOP.

[ ] 99. Why is excessive use of inheritance considered a potential anti-pattern (Fragile Base Class problem)?

[ ] 100. How do modern JavaScript modules (`import`/`export`) help with OOP concepts like Encapsulation?

---
---

## 💻 50 Coding Problems

### I. Class and Constructor Implementation (1-10)

[ ] 1. **Basic Class:** Create a class `Person` with a `constructor` that accepts `name` and `age`. Add a method `greet` that logs a greeting message.

[ ] 2. **Factory Function:** Write a factory function `createBook(title, author)` that returns a book object with the two properties and a method `getSummary()`.

[ ] 3. **Static Method:** Add a static method `describe()` to the `Person` class that returns the string "A blueprint for creating human objects."

[ ] 4. **Private Field (ES2020+):** Create a class `Counter` with a private field `#count`. Implement public methods `increment()` and `getCount()`.

[ ] 5. **Private Variable (Closure):** Implement the `Counter` from the previous problem using a constructor function and a **closure** for the private `count`.

[ ] 6. **Using `new.target`:** Write a constructor `AbstractEntity` that throws an error if it is instantiated directly (i.e., if `new.target === AbstractEntity`).

[ ] 7. **Property Descriptor:** Define an object `config` with a property `version` that is read-only and non-enumerable, using `Object.defineProperty()`.

[ ] 8. **Getters and Setters:** Create a class `Rectangle` with a private field `#width` and a public `height`. Add a **getter** `area` and a **setter** for `height`.

[ ] 9. **Simple Inheritance:** Create a subclass `Employee` that extends `Person` (from Q1) and adds a `jobTitle` property. Override the `greet` method.

[ ] 10. **Super Keyword:** In the `Employee` subclass's constructor, use `super()` to initialize `name` and `age`.

---

### II. Prototype and Inheritance Deep Dive (11-20)

[ ] 11. **Prototypal Inheritance:** Create two objects, `mammal` with a `walk()` method, and `dog` (an empty object). Make `dog` inherit from `mammal` using `Object.create()`.

[ ] 12. **`hasOwnProperty`:** Write a function that accepts an object and prints only its **own** properties (not inherited ones).

[ ] 13. **Prototype Modification:** Modify the `Array.prototype` to add a new method `first()` that returns the first element of any array.

[ ] 14. **Shadowing:** Create an object `parent` with property `x = 10`. Create a child object inheriting from `parent`. When you set `child.x = 5`, verify that `parent.x` is unchanged.

[ ] 15. **Constructor Inheritance (Pre-ES6):** Implement a `Shape` constructor and a `Circle` constructor that inherits from `Shape` by correctly setting up the prototype chain.

[ ] 16. **Class-based Mixin:** Create a function `CanFly(BaseClass)` that returns a class extending `BaseClass` and adding a `fly()` method. Apply this mixin to a `Bird` class.

[ ] 17. **Object-based Mixin:** Create an object `mover` with a `move()` method. Use `Object.assign()` to add this method to a `Car` object.

[ ] 18. **Check Inheritance:** Write a function `isDescendant(parent, child)` that correctly checks if `child` inherits from `parent` (using `isPrototypeOf()` or a similar approach).

[ ] 19. **Deep Freeze:** Write a function `deepFreeze(obj)` that recursively freezes an object and all its nested objects.

[ ] 20. **Object with Null Prototype:** Create an object that does **not** inherit from `Object.prototype`. Why is this useful?

---

### III. Advanced OOP Features (21-30)

[ ] 21. **Method Chaining:** Implement a class `Calculator` with methods `add(x)`, `subtract(x)`, and `result()`. Ensure `add` and `subtract` are chainable.

[ ] 22. **Observer/Event Emitter:** Create a basic `EventEmitter` class with methods `on(event, listener)` and `emit(event, data)`.

[ ] 23. **Singleton Pattern:** Implement a `Logger` class using the Singleton pattern to ensure only one instance ever exists.

[ ] 24. **Proxy/Interceptor:** Use a **`Proxy`** to create an object that logs a message every time a property is accessed or set.

[ ] 25. **Data Validation Setter:** Create a class `User` with a setter for the `email` property that throws an error if the email does not contain the `@` symbol.

[ ] 26. **Iterator/Iterable:** Make a class `Range(start, end)` iterable, so it can be used in a `for...of` loop to iterate through all numbers from `start` to `end`.

[ ] 27. **Simple Generator:** Create a function that uses the `yield` keyword to act as a generator for IDs, starting from 1.

[ ] 28. **Symbol as Key:** Create a class with a public method and an internal utility method. Use a **`Symbol`** for the internal method's name to make it harder to accidentally access/override.

[ ] 29. **Abstract Base Method:** Define a class `Vehicle` with a method `startEngine()` that throws an error if it is not overridden in a subclass.

[ ] 30. **Private Static Field:** Define a private static field `#maxID` in a class `IDGenerator` to limit the number of IDs generated across all instances.

---

### IV. Practical Application and Design (31-40)

[ ] 31. **Custom Error Class:** Create a custom error class `InsufficientFundsError` that extends the native `Error` class.

[ ] 32. **Module Pattern:** Implement a JavaScript Module Pattern (IIFE) for a `ShoppingCart` that exposes public methods `addItem` and `getTotal` while keeping the internal items array private (via closure).

[ ] 33. **Factory Method (Polymorphism):** Create a factory function `AnimalFactory(type, name)` that returns an instance of either a `Dog` or a `Cat` class, each with a polymorphic `makeSound()` method.

[ ] 34. **Array-Like Object:** Write a function that creates a new object with a `length` property and numbered keys (like an array) and make it iterable.

[ ] 35. **Deep Clone:** Write a function `deepClone(obj)` that performs a deep copy of a simple object (containing only primitives, arrays, and other objects), avoiding circular references.

[ ] 36. **Prototype Reset:** Write a function that accepts a constructor and "resets" its prototype by ensuring the prototype's `constructor` property points back to the constructor function.

[ ] 37. **Tagged Template Literal:** Create a tagged template literal function `safeHTML` that escapes any potentially harmful characters in the interpolated values.

[ ] 38. **Currying for OOP:** Write a function `curriedGreet(greeting)` that returns another function `(name)` which, when called, logs the greeting and name.

[ ] 39. **Promise Wrapper:** Create a class `AsyncWrapper` that accepts a function in its constructor and has a method `execute()` that runs the function and returns a Promise.

[ ] 40. **Method Overloading Simulation:** Write a single method `calculateArea(param1, param2)` inside a class that calculates the area of a rectangle (if two parameters are given) or a circle (if one parameter is given).

---

### V. Problem Solving and Mixins (41-50)

[ ] 41. **Mixin for Logging:** Create a mixin object `LoggerMixin` with a method `log(message)`. Apply this mixin to a `Service` class.

[ ] 42. **`Object.freeze` Effect:** Create an object and call `Object.freeze()` on it. Verify that you cannot change the value of an existing property or add a new one.

[ ] 43. **Inherited Setter Logic:** Create a superclass with a setter for a property and a subclass that inherits the setter. Demonstrate how the subclass instance uses the inherited setter logic.

[ ] 44. **Constructor Function with Prototype:** Rewrite the `Person` class (from Q1) as a constructor function and attach the `greet` method to its **prototype**.

[ ] 45. **Class vs. Factory Function:** Explain why you might use a factory function over a class when you want to avoid using the `new` keyword and/or want to hide internal variables easily.

[ ] 46. **Prototype Chain Inspection:** Given an object `user`, write a loop that prints all objects in its Prototype Chain until it reaches `null`.

[ ] 47. **Custom `instanceof`:** Implement a function `myInstanceof(obj, constructor)` that replicates the behavior of the built-in `instanceof` operator.

[ ] 48. **Dynamic Method Creation:** Write a constructor function that, based on a configuration array passed to it, dynamically adds methods to the prototype.

[ ] 49. **Extending Built-in:** Create a class `MyArray` that extends the built-in `Array` class and adds a new method `getMiddleElement()`.

[ ] 50. **Decorator Simulation (Function):** Write a function `withTimestamp(fn)` that accepts a function `fn` and returns a new function that executes `fn` but also logs the start and end time.