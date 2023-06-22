const meal = ["soup", "steak", "ice cream"]
let [starter] = meal;
console.log(starter);

//What values will be stored in the  set  collection after the following code runs?
let set = new Set();
set.add(1);
set.add(2);
set.add(3);
set.add(2);
set.add(1);



// What value will be printed out when the following code runs?
function count(...basket) {
    console.log(basket.length)
}

count(10, 9, 8, 7, 6);

// Additional resources
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters
// https://data-flair.training/blogs/javascript-data-structures/

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals