/*create object
//let a = [1,2,3]

//const obj = (x:1, y="hello", z:true)

// 1) Object creation by using object literal{}

// syntax: let objectName=[{key1:value1,key2:value2,key3:value3.......}]

// let laptop = {
//                  price:45000 ,
//                 "color Name":"red", 
//                  "frontCamera":true,
//                  bluetooth:undefined,
//                  processor: NaN,
//                  RAM: null,
//                  x: [1,2,3,4,5,6],
//                  y: {a:10,b:20,c:30},
//                  z: () => {console.log("Hello");}
                
//             };

 what are the key and values can be

KEY: our key can be a normal variable
    our key can be a string value also

VALUES:  Our values can be any type of data.

if key values in object are a normal variable value we call that key as property.

if key values in object are function we call that key as methods. (function inside objects are called as methods).063



//console.log(laptop);



HOW TO READ AN OBJECT AND ITS PROPERTY AND METHODS

    to read entire object we can call object name

    to read property we call objectname with key 

    SYNTAX: object.property

    to read methods we can call objectname with key
    SYNTAX: object.methods()

    When our key is in string manner we need to call its by using array like literal.
    SYNTAX: object["property"]






// let laptop = {
//     price:46000 ,
//    "color Name":"red", 
//     "frontCamera":true,
//     bluetooth:undefined,
//     processor: NaN,
//     RAM: null,
//     x: [1,2,3,4,5,6],
//     y: {a:10,b:20,c:30},
//     z: () => {console.log("Hello");}
   
// };

// console.log(laptop["x"]);


//HOW TO  UPDATE AN OBJECT PROPERTIES

1)Reinitialize the obj property 

SYNTAX: object.property = new value.property;
                        or
        object["property"] = new value

2)Adding a new key a to object.

SYNTAX: object.newproperty = value 
                    or
        object["newproperty"] = value








const laptop = {
    price:46000 ,
   "color Name":"red", 
    "frontCamera":true,
    bluetooth:undefined,
    processor: NaN,
    RAM: null,
    x: [1,2,3,4,5,6],
    y: {a:10,b:20,c:30},
    z: () => {console.log("Hello");}
   
};



laptop.RAM="8GB";

laptop.storage="1TB"

console.log(laptop.storage);



//HOW TO DELETE AN OBJECT PROPERTIES

SYNTAX: delete object.property;
                or
        delete object["property"];





const laptop = {
    price:46000 ,
   "color Name":"red", 
    "frontCamera":true,
    bluetooth:undefined,
    processor: NaN,
    RAM: null,
    x: [1,2,3,4,5,6],
    y: {a:10,b:20,c:30},
    z: () => {console.log("Hello");}
   
};



delete laptop.bluetooth;
delete laptop["color Name"]

console.log(laptop);

*/

// var a = 40;

// var b = 20;

// var c = 10;

// console.log(Math.max(a,b,c));
// console.log(Math.min(a,b,c));

// var a= [2,4,5,1,7];

// console.log(Math.max(...a));
// console.log(Math.min(...a));



// var a = 64;

// console.log(Math.sqrt(a));
// console.log(Math.cbrt(a));

// console.log(a**(1/2));
// console.log(a**(1/3));

// function TotalDistance({milage , fuelCapacity}) 
// {
//     const total_distance = milage * fuelCapacity;

//     console.log(total_distance + "kilometers");
// }


// var car = {
//     brand : "volkwagan",
//     price : 200000,
//     color : "red",
//     cc : 1500,
//     FuelType : "petrol",
//     milage : 15,
//     fuelCapacity : 20

// }

// TotalDistance(car);

//Incapsulation //Capsule -> (__|__) -> protection     -> class
            //                       -> medicine       -> properties,methods()

// class Car 
// {
//     constructor (brand, color, price)
//     {
//         this.brand = brand;
//         this.color = color;
//         this.price = price;
//     }

//     run()
//     { 
//         console.log("Strt the engine and run car");

//     }

//     stop()
//     {
//         console.log("Apply the brake, turn off the engine");
//     }

// }

//Interitance                  
//Super class
class Car1 
{
    constructor (brand, color, price)
    {
        this.brand = brand;
        this.color = color;
        this.price = price;
    }

   run()
    { 
        console.log("Strt the engine and run car");

    }

    stop()
    {
        console.log("Apply the brake, turn off the engine");
    }

}

var swift = new Car1("suzuki", "red", 200000)

class Car2  extends Car1
{
    constructor(brand, color, price, milage)
    {
        super(brand, color, price) 
//this create super object and indirectly executes super class constructor so we can get super class properties also.

        this.milage = milage;
    }
   
    audio()
    {
        console.log("Play the music");
    }

}

// var swift = new Car2("suzuki", "red", 200000, 20)

// swift.run();
// swift.stop();
// swift.audio();

// console.log(swift.brand);
// console.log(swift.color);
// console.log(swift.price);
// console.log(swift.milage);

class Car3  extends Car2
{
    constructor(brand, color, price, milage, fuel_cap)
    {
        super(brand, color, price, milage) 
//this create super object and indirectly executes super class constructor so we can get super class properties also.

        this.milage = milage;
    }
   
    fuel_cap()
    {
        console.log("Play the music");
    }

}

class Car4  extends Car2
{
    constructor(brand, color, price, milage, fuel_type)
    {
        super(brand, color, price, milage) 
//this create super object and indirectly executes super class constructor so we can get super class properties also.

        this.milage = milage;
    }
   
    video()
    {
        console.log("Play the movie");
    }

}

var swift = new Car4 ("suzuki", "red", 200000, 20,"petrol")