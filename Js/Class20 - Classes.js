/**
 *      Agenda 
 * ------------
 *  1. What are Classes in JS 
 *  2. Classes declarations and expression 
 *  3. Hoisting in Classes 
 *  4. Inheritance using Classes 
 */

/* 
    Classes : 
    ---------
    > They are like a blurprint of an object 
    > They are not very powerful in JS (unlike Java or C++)
    > They can be seen as another way of writting a function. As they way of syntax are kinda similar 
    > Eg : 
*/

class Person {
    // convention to write the class name with a Captial letter 
    name
    constructor(name) {
        this.name = name ;
    }
}

// Way to access the class methods : 
const person1 = new Person("Soma") ;
console.log(person1.name);

const person2 = new Person ("Bunny") ;
console.log(person2.name);

/*
    > Remember that classes are not hoisted at all
    > Hence we cannot acces the, before initialization 
    
    > This is how you inherit the properties from another class 
*/

class Teacher extends Person {
    constructor(name) {
        super(name);    // note that super refers to the constructor of the parent class
    }
}
const tch = new Teacher ("Soma Senpai") ;
console.log(tch.name);