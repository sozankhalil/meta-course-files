// methods: Object.keys(), Object.values(), and Object.entries().
// The Object.keys() method

const car2 = {
    speed: 200,
    color: "red"
}
console.log(Object.keys(car2)); // ['speed','color']

// The Object.values() method

const car3 = {
    speed: 300,
    color: "yellow"
}
console.log(Object.values(car3)); // [300, 'yellow']

// The Object.entries() method

const car4 = {
    speed: 400,
    color: 'magenta'
}
console.log(Object.entries(car4));

//result---- [ ['speed', 400], ['color', 'magenta'] ]


// You now have all the ingredients that you need to loop over any object's own property keys and values.

var clothingItem = {
    price: 50,
    color: 'beige',
    material: 'cotton',
    season: 'autumn'
}

for( key of Object.keys(clothingItem) ) {
    console.log(key, ":", clothingItem[key])
}
console.log(clothingItem.price)

function testBracketsDynamicAccess() {
    var dynamicKey;
    if(Math.random() > 0.5) {
      dynamicKey = "speed";
     }else{
       dynamicKey = "color";
     }
  
      var drone = {
        speed: 15,
        color: "orange"
      }
  
      console.log(drone[dynamicKey]);
  }
  testBracketsDynamicAccess();
















