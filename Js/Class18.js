// "use strict"
/**
 *  Agenda 
 * --------
 * 1. Constructors
 * 2. 'This' keyword and it's behaviours
 * 3. Binding of 'This' in arrow fucntions 
 * 4. This in Strict mode 
 * 5. Call, apply and Bind
*/

/*
    Constructors 
    ------------
    > useful when we want to define some sort of a template object 
    > It's a special kinda function which will initialize the values of a template object
    > As convention, constructor functions are written with a capital letter 
*/

// Template object we want to create multiple of 
// let student = {
//     fname:'Alpha',
//     lname:'Beta',
//     age:21,
//     email:'abc@gmail.com',
//     score:89
// } 

// This is a constructor function
function Student (fname,lname,age,email,score) {
    this.fname = fname ;
    this.lname = lname ;
    this.age = age  ;
    this.email = email ;
    this.score = score ;
}

// Calling the constructor. Note it requires the new keyword to call constructor 
let S1 = new Student('Alpha','Varma',22,'abc@gmail.com',89) ;
let S2 = new Student('Beta','Varma',25,'def@gmail.com',70) ;
console.log(S1,S2) ;

// Accessing specific parts of the constructor 
console.log(S1.fname);
console.log(S2.email);


/*
    'This' keyword
    -------------
    > It is a keword which always points to the object/fucntion it is called from 
    > in the constructor above , this.property will point to that object properties only 
        (here the object S1)
*/

let obj = {
    name: 'Soma',
    age: 22,
    getInfo : function () {
        console.log("'this' keyword inside the object : ",this );
    } 
}

function demo() {
    console.log("'this' keyword outside the object : ",this) ;
}

console.log("'this' keyword in global scope : ",this) ;

obj.getInfo();
demo();


/*
    Strict Mode 
    ----------
    > it is a mode in Js which won't allow some mistakes which we can get away with while
        using JS normally . (Eh : using a variable without decalring it first)
    > To enable Strict mode in java we write the following line at the top of the script :
        "use strict"
    > Notice in the above eg, when strict mode is enabled, the 'this' keyword inside the 
        demo function becomes undefined (while the other 2 'this' keyword remain same)
    > This is cause when using stict mode, it restrictes the binding of the 'this' to global 
        scopes, as it was not called by an object. ('this' is actually meant for objects) 
 */


/*
    Arrow Functions 
    ---------------
    > We typically have used arrow functions where we do not want to write the function
        decalration 
    > But, diff between arrow function and normal function is that noraml function will
        always have a binding of 'this' keyword
    > eg : Take the obejct from before with the noraml function getInfo and convert it into
        a arrow function. It will now not recognize the 'this' of the object instead show the 
        window as the refernce to the 'this' keyword
    
*/
obj = {
    name: 'Soma',
    age: 22,
    getInfo :  () => {
        console.log("'this' keyword inside the arrow function : ",this );
    } 
}
obj.getInfo();


/*
    Call , Apply, Bind 
    -----------------
    > In below scenario, when we have a function which is same in both objects, we want 
        to reduce the redundancy, so want to write it only once and have it bind with 
        'this' of each of the obejct once 
*/

let student0 = {
    name:"abc",
    age:12,
    printInfo: function () {
        console.log(`${this.name} is ${this.age} years old`)
    }
}

let teacher0 =  {
    name:"def" ,
    age:40,
    printInfo: function () {
        console.log(`${this.name} is ${this.age} years old`)
    }
}

/*
    > Syntax for Calling and binding a seperate function to a object : 
    nameOfCommonFunc.call(objectUwannaBind, args) ;

    > Hence for the situation above we can have something like :  
*/

let student = {
    name:"student",
    age:12,
}

function printInfo(score) {
    console.log(`${this.name} is ${this.age} years old with score = ${score}`) ;  
    // watch out for the ``
}

let teacher =  {
    name:"teacher" ,
    age:40,
}

printInfo.call(student, 89);
printInfo.call(teacher);

printInfo.apply(student, [89]);

/*
    > Note that when using apply : passing arguements to the common function, we have to passs them
        them in arrarys like : printInfo.call( student, [89,true,130] )
    > .call and .apply are almost the same , they both bind and immedeately call the fucntion 
    > but bind is little different

    > bind returns a binded fucntion which can be called later 
*/

let studentBindedFunc = printInfo.bind(student, [89]);
let teacherBindedFunc = printInfo.bind(teacher, [50]) ;
studentBindedFunc();
teacherBindedFunc();