/**
 *      Agenda
 * -----------
 *  1. Objects 
 *  2. adding behaviours to objects 
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

console.log(person2)

/*
    Prototypes are the way an object inherits properties from it 's parent object 
    (Remember that everything in JS is an object)
    Prototype contains the inheritted property of an object and refers back to the parent object

    > NOTE : 
    > The difference between the 2 ways of creating an object :
    > The first one adds the properties directly to the object 
    > Second one adds the properties to the prototype of that object 
    > hence we can still access the properties even though, they are not shown in the console log
*/

console.log(person2.name);