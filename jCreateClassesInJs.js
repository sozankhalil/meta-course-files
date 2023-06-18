class Train{
constructor(color,lightsOn){
this.color=color;
this.lightsOn=lightsOn;
}
toggleLights() {
    this.lightsOn = !this.lightsOn;
}
lightsStatus() {
    console.log('Lights on?', this.lightsOn);
}
getSelf() {
    console.log(this);
}
// To get the prototype, you'll be using JavaScript's built-in Object.getPrototypeOf() method, and passing it this object - meaning, the object instance inside of which this method is invoked.
getPrototype() {
    var proto = Object.getPrototypeOf(this);
    console.log(proto);
}
}

// here is an instance object of Train
var myFirstTrain =new Train('red',false);




// You can continue building instances of the Train class. Even if you give them exactly the same properties, they are still separate objects.
var mySecondTrain=new Train ('blue',false);
var myThirdTrain = new Train('blue', false);

var train4= new Train('pink',false);
train4.toggleLights();
train4.lightsStatus();
train4.getSelf();
train4.getPrototype();

//  In the code that follows, you will observe another class being coded, which is named HighSpeedTrain and inherits from the Train class.

// This makes the Train class a base class, or the super-class of the HighSpeedTrain class. Put differently, the HighSpeedTrain class becomes the sub-class of the Train class, because it inherits from it.

class HighSpeedTrain extends Train {
    constructor(passengers, highSpeedOn, color, lightsOn){
        // Notice the slight difference in syntax in the constructor of the HighSpeedTrain class, namely the use of the super keyword.
        // In JavaScript classes, super is used to specify what property gets inherited from the super-class in the sub-class.
        super(color,lightsOn);
        this.passengers = passengers;
        this.highSpeedOn = highSpeedOn;
    }
    toggleHighSpeed() {
        this.highSpeedOn = !this.highSpeedOn;
        console.log('High speed status:', this.highSpeedOn);
    }
    // imagine you realized that you don't like how the toggleLights() method from the super-class works, and you want to implement it a bit differently in the sub-class. You can add it inside the HighSpeedTrain class. 
    toggleLights() {
        super.toggleLigths();
        super.lightsStatus();
        console.log('Lights are 100% operational.'); 
        
//  You've added this third line to show that I can combine the "borrowed" method code from the super-class with your own custom code in the sub-class.// Now you're ready to build some train objects.
    }
}
// Notice that in addition to the inherited properties, you also automatically inherit all the methods that exist on the Train prototype, namely, the toggleLights(), lightsStatus(), getSelf(), and getPrototype() methods.

var train5 = new Train('blue', false);
var highSpeed1 = new HighSpeedTrain(200, false, 'green', false);

train5.toggleLights(); // undefined
train5.lightsStatus(); // Lights on? true

highSpeed1.toggleLights(); // Lights on? true, Lights are 100% operational.

train5.getPrototype(); // {constructor: ƒ, toggleLights: ƒ, lightsStatus: ƒ, getSelf: ƒ, getPrototype: ƒ}
highSpeed1.getPrototype(); // Train {constructor: ƒ, toggleHighSpeed: ƒ, toggleLights: ƒ}





