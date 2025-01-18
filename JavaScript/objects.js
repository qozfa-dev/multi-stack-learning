
// This is the simplest way to create an object - using object literals
const house = {
    length: 1,
    location: {
        x: 1,
        y: 1
    },
    calculatePerimeter() { 
        return 4 * this.length
    },
    showDetails: function () {
        console.log('A house with side length' + this.length);
    }
};

console.log(house.calculatePerimeter()); // Outputs: 4
house.showDetails(); // Outputs: A house with side length 1



// Factory function
function createHouse(length) {
    return {
        length, 
        color,
        calculateArea () {
            return this.length * this.length
        },
        draw() {
            console.log('Drawing a ' + color + ' house of area: ' + this.calculateArea);
        }
    };
}

// createHouse takes a parameter of length and color
const house1 = createHouse(3, 'red');
console.log(house1.calculateArea()); // Outputs: 9
house1.draw(); // Outputs: Drawing a red house of area 9



// Constructor function
function House(length) {
    this.length = length;
    this.draw = function() {
        console.log('draw');
    }
}

const House = new House(1);



// cannot reassign constants
// but can always modify its properties by adding or removing properties:
const house3 = {
    length: 1
};

// Add new properties
house3.paintColor = 'blue';
house3.material = 'bricks';
house3.draw = function () {}

// Remove properties 
delete house3.paintColor;
delete house3.draw;

console.log(house3); // { length: 1, material: 'bricks' }




// Iterating over properties of an object
const shape = {
    radius: 1,
    draw() {
        console.log('draw');
    }
};

// Easiest way is for-in loop
for (let key in shape)
    console.log(key,shape[key]);

// Can also use for-of loop but need Object.keys or Object.entries method
for (let key of shape)
    console.log(key);
// an object is not iterable, this will not work


for (let key of Object.keys(shape)) 
    console.log(key);


for (let entry of Object.entries(shape)) 
    console.log(entry);

// To see if a given property exists in an object, use the "in" operator
if ('radius' in shape) console.log('yes'); // output: yes
if ('color' in shape) console.log('yes'); // output: (nothing)


// cloning objects - 2 ways

const triangle = {
    radius: 1,
    draw() {
        console.log('draw');
    }
};

// Object.assign copies the properties and methods 
const clone1 = Object.assign({}, triangle);
console.log(clone);

// takes all properties and methods and puts into another object
const clone2 = {...triangle };
console.log(clone2);
