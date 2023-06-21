const car= {
    engine:true,
    steering:true,
    speed:'slow'
}
const sportCar=Object.create(car);
sportCar.speed='fast';

console.log('the sportCar object:',sportCar)
for (const prop in sportCar) {
   console.log(prop,':',sportCar[prop])
}
for ( prop of Object.keys(sportCar)) {
    console.log(prop+':'+sportCar[prop])
}