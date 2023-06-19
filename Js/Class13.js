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