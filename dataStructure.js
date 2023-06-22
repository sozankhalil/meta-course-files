//built in data structure in js such as map,filter,set,foreach


const fruits = ['kiwi','mango','apple','pear'];
function appendIndex(fruit, index) {
    console.log(`${index}. ${fruit}`)
}
fruits.forEach(appendIndex);




// Working with Objects in JavaScript
// A lot of the information on how to work with objects in JavaScript has already been covered in this course.
// The example below demonstrates how to use the object data structure to complete a specific task. This task is to convert an object to an array:


const result = [];
const drone = {
    speed: 100,
    color: 'yellow'
}
const droneKeys = Object.keys(drone);
droneKeys.forEach( function(key) {
    result.push(key, drone[key])
})
console.log(result)



// A map can feel very similar to an object in JS.

// However, it doesn't have inheritance. No prototypes! This makes it useful as a data storage.

// For example:

let bestBoxers = new Map();
bestBoxers.set(1, "The Champion");
bestBoxers.set(2, "The Runner-up");
bestBoxers.set(3, "The third place");

console.log(bestBoxers);
// To get a specific value, you need to use the get() method. For example:  
bestBoxers.get(1); // 'The Champion'




// Working with Sets in JavaScript
// A set is a collection of unique values.

// To build a new set, you can use the Set constructor:
new Set();

// The Set constructor can, for example, accept an array.

// This means that we can use it to quickly filter an array for unique members.

const repetitiveFruits = ['apple','pear','apple','pear','plum', 'apple'];
const uniqueFruits = new Set(repetitiveFruits);
console.log(uniqueFruits);

// Other data structures in JavaScript
// Besides the built-in data structures in JavaScript, it's possible to build non-native, custom data structures.

// These data structures come built-in natively in some other programming languages  or even those other programming languages don't support them natively.

// Some more advanced data structures that have not been covered include:

// Queues

// Linked lists (singly-linked and doubly-linked)

// Trees

// Graphs















