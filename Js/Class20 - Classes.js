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
    > They are like a blueprint of an object 
    > They are not very powerful in JS (unlike Java or C++)
    > They can be seen as another way of writing a function. As they way of syntax are kinda similar 
    > Eg : 
*/

// Form 1 : declaration
class Person1 {
    // convention to write the class name with a Capital letter 
    name
    constructor(name) {
        this.name = name ;
    }
}

// Form 2 : expression
const Person2 = class {
    name
    constructor(name){
        this.name=name;
    }
}

// Way to access the class methods : create a instance of the class
const p1 = new Person1("Soma") ;
console.log(p1.name);

const p2 = new Person2("Bunny") ;
console.log(p2.name);

/*
    > Remember that classes are not hoisted at all
    > Hence we cannot access them, before initialization 
    
    > This is how you inherit the properties from another class :
*/

class Teacher extends Person2 {
    constructor(name) {
        super(name);    // note that super refers to the constructor of the parent class
    }
}
const tch = new Teacher ("Soma Senpai") ;
console.log(tch.name);