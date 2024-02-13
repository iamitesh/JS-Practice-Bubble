//1. Object Literal:
//This is the most common and simplest way to create an object by directly specifying its properties and values within curly braces {}.

const person = {
    name: 'John',
    age: 30,
    gender: 'male'
};
//Advantages:
// Simple and concise syntax.
// Suitable for creating a single instance of an object with known properties.




//2. Constructor Function:
// You can define a constructor function using the function keyword and then create objects using the new keyword.


function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
}

const john1 = new Person('John', 30, 'male');
//Advantages:

// Allows creating multiple instances of objects with the same structure.
// Supports inheritance through prototype chaining.



//3. Object.create():
//The Object.create() method allows you to create a new object with the specified prototype object and properties.

const personPrototype = {
    greet() {
        console.log(`Hello, my name is ${this.name}.`);
    }
};

const john = Object.create(personPrototype);
john.name = 'John';
john.age = 30;
john.gender = 'male';
// Advantages:
// Provides more control over the prototype chain.
// Allows creating objects with specific prototypes.


//4. Class Syntax (ES6+):
// With the introduction of ES6, JavaScript supports class syntax for creating objects in a more familiar and structured way.

class Person {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}

const john = new Person('John', 30, 'male');
// Advantages:
// Provides a cleaner syntax, especially for those coming from class-based languages.
// Encapsulates data and behavior within the class definition.
// Each method of object creation in JavaScript has its own advantages and suitability depending on the specific requirements of your project, coding style preferences, and compatibility considerations.