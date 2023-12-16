/*
    Agenda
    -------
    > Functions and hoisting
    > Scopes 
    > function Expression
    > functions within function
    > Passing functions as a arguement 


    Function defination :-
    function functionName (paremeters) {
        // body : what the function will do here

        // return statement - when the function has to return some value back
    } 

    Function call :-
    functionName( parameters to be passed , seperated by commas) ;
*/

let u1 = sayHello("Soma");
let u2 = sayHello("Bunny");
let u3 = sayHello("Puneet");

// console.log(add(4,5)) ; //throws an error
// notice that when calling a function express, it is not hoisted and needs to be called only after the declaration is made

// console.log(u1)
// console.log(u2)
// console.log(u3)

// Function declaration
function sayHello(user) {
    console.log("Hello ",user) ;
    return "Legend_"+user
}
// Note that functions declaration can be anywhere in the code. You can define it after the code calls it unlike some other coding languages
// This is due to FUNCTION HOISTING where when the JS is executed, the browser or node.js moves all the function defination to the top of all the other code


// Function expression (assign a function to a variable. Notice there is no function name on the RHS, only the variable name is used to call)
let add = function (a,b) {
    return a+b;
}

console.log("Adding After the declaration of function expression : ",add(4,5)) ;


/* 
    Function Scopes 
    --------------
    variables , functions defined within a function are only accessible inside that function
    an functions scope is defined by it's parenthesis {}
    Eg : Global scope , function scope , block scope (when you define something inside the {} of a loop or if else statements)

    Passing parameters to Function
    ---------------------------
    This causes the changes made to the parameters variables not noticble outside that function (cause the function makes a copy of it's own - Pass by value !)
    This will be important when we are dealing with JS objects 
*/


// Exploring passing Functions as arguements 
function greet(hellofunc) {     // Notice that the hellofunc name behaves like parameters name and doesn't matter as long as the calling statement has the correct function passed  
    hellofunc("Soma Senpai") ;   // parameters for the passed function need to be sent from here only 
    // whatever you wanna do

    function doSomething() {
        console.log("\n\n Doing something...\n\n") ;
    }

    return doSomething ; // Note the lack of () even when returing a function
} 

greet(sayHello); // Note the lack of brackets (). if brackets are added, it becomes a invocation


// Revision code 

// Form 1 : function declaration 
let loaves = makeBread(7);
console.log('loaves : '+loaves);
function makeBread(quantity){
    const bread = '🍞'.repeat(quantity);
    return bread;
}

// Form 2 : function expression (uses an anonymous function = function without a name)
const makeBeer = function (qty) {
    return  '🍺'.repeat(qty);
}
console.log('Beers : '+makeBeer(7));

// NOTE : function declarations are hoisted but function expressions are not. so they must be declared 
// first before calling 
// NOTE : most use function expressiong and arrow functions because they do not get hoisted and are less 
// likey to pollute the global namespace 

// Form 3 : IIFE - Immediately invoked fucntion expression
( function () {
    console.log('Dougnut : '+'🍩'.repeat(3));
}) ();


// Form 4 : Arrow Functions (remove function keyword and have a => pointing to function body)
// when we write the arrow functions wihtout parathesis , it returns the value automatically. If we use 
// paranthesis, then we will have to explicitally return the function value
const makeWine = (qty) => '🍷'.repeat(qty);
console.log('Wine : '+makeWine(5))

const makeCoffee = (qty) => {
    return '☕'.repeat(qty);
}
console.log('Coffee : ' + makeCoffee(5));


/**
 *  Pure functions : which only depend on their inputs parameters and always will give the same output as 
 *                              long as the inputs remain the same 
 *  Impure Functions : have some sort of global variable modification within them (either use a global variable
 *                                 in their function or modfiy and return it). They are dependent on that global variable too 
 *                                 and hence may give different outputs for same input.
 */



// Arguements
function make_breakfast(main, side, drink) {
    console.log(arguments); // arguments is a keyword which is an array with all the arguements
    return `includes ${main}, ${side} and ${drink}` ;
}
 console.log('Breakfast '+make_breakfast('🥞','🥓','🥛'))

//  When faced with a lot of arguments use NAMED ARGs and then destructure it 
// NOTE : the paranthesis should be {} because it is passed as an object
function makeLunch(lunchbox) {
    let {main,side,drink} = lunchbox;
    return `includes ${main}, ${side} and ${drink}` ;
}
console.log("Lunch "+makeLunch({main:'🌯', side:'🍟', drink:'🥤'}))

// REST PARAMs : send multiple items as args without naming them and access them like a array in the function
// NOTE : the ...args tells that these are rest arguments 
// NOTE : careful about the parathesis should be [] because it's an array
function makeDinner(...dinnerbox) {
    let [i1,i2,i3,i4,i5] = dinnerbox;
    return `includes ${i1}, ${i2}, ${i3}, ${i4} and ${i5}` ;
}
console.log("Dinner "+makeDinner('🍜','🍲','🥣','🍑','🍤'));



// Higher Order Functions : HOF or First Class Functions (Callback functions)
// ----------------------------------------------------------------
/**
 * These functions take other functions as input arguements or are returning a function.
 * An good example is the seTimeout(func,timeDelay) - executes a function after a certain time delay
 */
havefun=()=>console.log("3 seconds : Are you having fun ?!");
setTimeout(havefun,3000);       // delay time in ms
// if you want to make it an anonymous function :
setTimeout(()=>console.log("5 seconds : Are you having fun ?!"),5000);