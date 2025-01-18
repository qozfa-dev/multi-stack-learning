# JavaScript Objects - Code Examples and Explanations

## 1. **Object Literal**

An object literal is the simplest way to define an object. It is useful for defining an object with properties and methods.

```javascript
const house = {
    length: 1,
    location: {
        x: 1,
        y: 1
    },
    calculatePerimeter() {
        return 4 * this.length;
    },
};

The circle object has these properties: radius, location, isVisible
But this is not reusable for creating multiple objects dynamically


## 2. **Factory Function**

A factory function is a function that returns a new object each time it's called. This is useful when you need to create multiple similar objects dynamically.


function createHouse(length) {
    return {
        length, // implicitly this is length: length
        calculateArea() {
            return this.length * this.length;
        }
    };
}


## 3. **Constructor function**

function House(length) {
    this.length = length;
    this.draw = function() {
        console.log('draw');
    };
}

The House constructor allows you to create multiple house objects by passing in different lengths.
You can choose to do any type of constructor, do constructor if you have java experience
'new' keyword creates a new empty object
This refers to the newly created object which is returned implicitly



## **Iterating Over Properties of an Object**

### **1. For-In Loop**
The `for-in` loop iterates over all enumerable properties of an object. This is the easiest way to iterate.

const shape = {
    radius: 1,
    draw() {
        console.log('draw');
    }
};

for (let key in shape) {
    console.log(key, shape[key]);
};

Output:
radius 1
draw [Function: draw]

Can also use for-of loop. However Objects are not directly iterable, but you can use Object.keys() or Object.entries() to iterate over their properties.

for (let key of Object.keys(shape)) {
    console.log(key);
}

for (let entry of Object.entries(shape)) {
    console.log(entry);
}

Object.keys(shape) returns an array of keys: ['radius', 'draw'].
Object.entries(shape) returns an array of key-value pairs: [['radius', 1], ['draw', [Function: draw]]].


## Cloning objects

### **1. Using Object.assign()**

Object.assign() method copies properties and methods into a target object.

const triangle = {
    radius: 1,
    draw() {
        console.log('draw');
    }
};

const clone1 = Object.assign({}, triangle);
console.log(clone);

### **2. Using the Spread Operator (...)**

The spread operator creates a shallow copy of the object.

const clone2 = { ...triangle };
console.log(clone2);

{ ...triangle } spreads the properties and methods of triangle into a new object.

```
