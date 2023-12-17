/**
 *      Agenda
 * -----------
 *  1. Objects 
 *  2. adding behaviors to objects (methods/functions)
 *  3. functions to create object 
 *  4. Prototypes : What and Why ?
 *  5. Properties around prototypes
 */

let person = {
    name : "Alpha" ,
    age:18 ,
    talk : function () {
        console.log("Alpha is talking now ....") ;
    }
}

person.favoriteColor = "black" ;
console.log(person);

//  Another way of creating objects : 
let person2 = Object.create ({
    name : "Beta" ,
    age:20 ,
    talk : function () {
        console.log("Beta is talking now ....") ;
    }
})

console.log(person2)    // the object properties is created under prototype which visible when you run this in the browser command window

/*
    > Prototypes are the way an object inherits properties from it's parent object
    > (Remember that everything in JS is an object)
    > Prototype contains the inherited property of an object and refers back to the parent object
    > When a object is created it is inheriting a lot of additional functions (visible in browser console) from 
        it's Parent object. This inheritance is called prototype inheritance 

    > NOTE : 
    > The difference between the 2 ways of creating an object :
    > The first one adds the properties directly to the object 
    > Second one adds the properties to the prototype of that object 
    > hence we can still access the properties even though, they are not shown in the console log

    > __proto__ is reference back to parent object from which we are inheriting the properties
    > will be null for the Largest parent object. Will contain the properties of the parent if any
    > when a object doesn't find a property name within itself, it'll check for it in it's prototype, that's how 
        we are able to see the below peron2.name

*/

console.log(person2.name);