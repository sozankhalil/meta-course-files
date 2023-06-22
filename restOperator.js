// the rest operator must be the last parameter in the function
function addTaxToPrice(taxRate, ...itemsBought){
return itemsBought.map(item => taxRate*item)
}

let shoppingCart = addTaxToPrice(1.1,46,89,35,79);

console.log(shoppingCart)