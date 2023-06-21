// Task 1
var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']

function logDairy() {
     for (const key of dairy) {
         console.log(key)
     }
}
 logDairy()

// Task 2
var animal = {  canJump: true};
var bird = Object.create(animal);
bird.canFly = true;
bird.hasFeathers = true;
function birdCan(){ 
     for (var key of Object.keys(bird))
      {console.log(key + ": " + bird[key]);
    }
    } 
      birdCan();

// Task 3
var animal = {  canJump: true};
var bird = Object.create(animal);
bird.canFly = true;
bird.hasFeathers = true;
function animalCan() { 
 for (var key in bird) { 
 console.log(key + ": " + bird[key]);
}
}
 
 animalCan();  
