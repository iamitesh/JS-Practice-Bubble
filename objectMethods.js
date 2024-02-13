//1. Object.assign():
// Object.assign() is used to copy the values of all enumerable own properties from one or more source objects to a target object.
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const result = Object.assign(target, source);
console.log(result); // Output: { a: 1, b: 4, c: 5 }



// 2. Object.is():
// Object.is() determines whether two values are the same value.
console.log(Object.is(5, 5)); // Output: true
console.log(Object.is('hello', 'hello')); // Output: true
console.log(Object.is({}, {})); // Output: false (different references)


// 3.  Object.create():
// Object.create() creates a new object with the specified prototype object and properties.
const personPrototype = {
    greet() {
        console.log(`Hello, my name is ${this.name}.`);
    }
};

const john = Object.create(personPrototype);
john.name = 'John';


// 4. Object.entries():
// Object.entries() returns an array of a given object's own enumerable string-keyed property [key, value] pairs.
const obj1 = { foo: 'bar', baz: 42 };
console.log(Object.entries(obj1)); // Output: [ ['foo', 'bar'], ['baz', 42] ]


// 5. Object.keys():
// Object.keys() returns an array of a given object's own enumerable property names.
const obj2 = { a: 1, b: 2, c: 3 };
console.log(Object.keys(obj2)); // Output: [ 'a', 'b', 'c' ]


// 6. Object.values():
// Object.values() returns an array of a given object's own enumerable property values.
const obj3 = { a: 1, b: 2, c: 3 };
console.log(Object.values(obj3)); // Output: [ 1, 2, 3 ]


// 7. Object.freeze():
// Object.freeze() freezes an object, preventing new properties from being added to it, and existing properties from being removed or changed.
const obj4 = { prop: 42 };
Object.freeze(obj4);
obj4.prop = 33; // This will not have any effect in strict mode or throw a TypeError in non-strict mode


// 8. Object.seal():
// Object.seal() seals an object, preventing new properties from being added to it, and marking all existing properties as non-configurable.
const obj5 = { prop: 42 };
Object.seal(obj5);
obj5.prop = 33; // This change will be successful


// 9. Object.isFrozen():
// Object.isFrozen() determines if an object is frozen.
const obj6 = { prop: 42 };
Object.freeze(obj6);
console.log(Object.isFrozen(obj6)); // Output: true


// 10. Object.isSealed():
// Object.isSealed() determines if an object is sealed.
const obj7 = { prop: 42 };
Object.seal(obj7);
console.log(Object.isSealed(obj7)); // Output: true


// 11. Object.isExtensible():
// Object.isExtensible() determines if an object is extensible (whether it can have new properties added to it).
const obj8 = { prop: 42 };
console.log(Object.isExtensible(obj8)); // Output: true


// 12. Object.preventExtensions():
// Object.preventExtensions() prevents new properties from ever being added to an object.
const obj9 = { prop: 42 };
Object.preventExtensions(obj9);
obj9.newProp = 33; // This will not have any effect


// 13. Object.setPrototypeOf():
// Object.setPrototypeOf() sets the prototype of a specified object to another object or null.
const obj10 = {};
const prototypeObj = { foo: 'bar' };
Object.setPrototypeOf(obj10, prototypeObj);
console.log(obj10.foo); // Output: bar


// 14. Object.fromEntries():
// Object.fromEntries() transforms a list of key-value pairs into an object.
const entries = [['a', 1], ['b', 2]];
const obj11 = Object.fromEntries(entries);
console.log(obj11); // Output: { a: 1, b: 2 }


// 15. Object.defineProperties():
// Object.defineProperties() defines new or modifies existing properties directly on an object, returning the object.
const obj12 = {};
Object.defineProperties(obj12, {
    'property1': {
        value: true,
        writable: true
    },
    'property2': {
        value: 'Hello',
        writable: false
    }
});


// 16. Object.defineProperty():
// Object.defineProperty() defines a new property directly on an object, or modifies an existing property on an object, and returns the object.
const obj13 = {};
Object.defineProperty(obj13, 'property1', {
    value: true,
    writable: true
});


// 17. Object.hasOwn():
// Object.hasOwnProperty() returns a boolean indicating whether the object has the specified property as its own property (not inherited).
const obj14 = { prop: 42 };
console.log(obj14.hasOwnProperty('prop')); // Output: true
console.log(obj14.hasOwnProperty('toString')); // Output: false (inherited property)

// 18. Object.getPrototypeOf(obj):
// This method returns the prototype of the specified object.
const person1 = {
    name: 'John',
    age: 30
};
const prototype = Object.getPrototypeOf(person1);
console.log(prototype === Object.prototype); // Output: true


// 19. Object.setPrototypeOf(obj, prototype):
// This method sets the prototype of a specified object to another object or null.
const person2 = {
    name: 'John',
    age: 30
};
const newPrototype = {
    greet() {
        console.log(`Hello, my name is ${this.name}.`);
    }
};
Object.setPrototypeOf(person2, newPrototype);
person2.greet(); // Output: Hello, my name is John.


// 20. Object.getOwnPropertyDescriptor(obj, prop):
// This method returns a property descriptor for a specified property of an object.
const person3 = {
    name: 'John',
    age: 30
};
const descriptor = Object.getOwnPropertyDescriptor(person3, 'name');
console.log(descriptor);
//{  configurable: true,  enumerable: true,  value: "John",  writable: true}




// Object.getOwnPropertyDescriptors(obj):
// This method returns all own property descriptors of a specified object.
const person4 = {
    name: 'John',
    age: 30
};
const descriptors = Object.getOwnPropertyDescriptors(person4);
console.log(descriptors);
//{  age: {    configurable: true,    enumerable: true,    value: 30,    writable: true},
// name: {    configurable: true,    enumerable: true,    value: "John",    writable: true  }}

// Object.getOwnPropertyNames(obj):
// This method returns an array of all own property names (enumerable and non-enumerable) of a specified object.
const person5 = {
    name: 'John',
    age: 30
};
const propertyNames = Object.getOwnPropertyNames(person5);
console.log(propertyNames);//["name", "age"]


// Object.getOwnPropertySymbols(obj):
// This method returns an array of all own symbol properties of a specified object.
const symbol1 = Symbol('symbol1');
const symbol2 = Symbol('symbol2');
const person6 = {
    [symbol1]: 'value1',
    [symbol2]: 'value2'
};
const symbols = Object.getOwnPropertySymbols(person6);
console.log(symbols);//[[object Symbol] { ... }, [object Symbol] { ... }]


// Object.prototype.hasOwnProperty(prop):
// This method returns a boolean indicating whether the specified object has the specified property as its own property (not inherited).
const person7 = {
    name: 'John',
    age: 30
};
console.log(person7.hasOwnProperty('name')); // Output: true

// Object.prototype.isPrototypeOf(obj):
// This method checks if an object exists in another object's prototype chain.
const personPrototype1 = {
    greet() {
        console.log(`Hello, my name is ${this.name}.`);
    }
};
const person8 = Object.create(personPrototype1);
console.log(personPrototype1.isPrototypeOf(person8)); // Output: false

// Object.prototype.propertyIsEnumerable(prop):
// This method returns a boolean indicating whether the specified property is enumerable.
const person9 = {
    name: 'John',
    age: 30
};
console.log(person9.propertyIsEnumerable('name')); // Output: true

// Object.prototype.toLocaleString():
// This method returns a string representing the object. This method is intended to be overridden by derived objects for locale-specific behavior.
const person10 = {
    name: 'John',
    age: 30,
    toString() {
        return `${this.name}, ${this.age} years old`;
    }
};
console.log(person10.toLocaleString()); // Output: John, 30 years old

// Object.prototype.toString():
// This method returns a string representing the object.
const person11 = {
    name: 'John',
    age: 30
};
console.log(person11.toString()); // Output: [object Object]

// Object.prototype.valueOf():
// This method returns the primitive value of the specified object.
const person12 = {
    name: 'John',
    age: 30,
    valueOf() {
        return this.age;
    }
};
console.log(person12.valueOf()); // Output: 30

// Object.preventExtensions(obj):
// This method prevents new properties from being added to the specified object.
const person13 = {
    name: 'John',
    age: 30
};
Object.preventExtensions(person13);
person13.newProperty = 'New Value';
console.log(person13.newProperty); // Output: undefined