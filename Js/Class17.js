/**
 *  Agenda : 
 * ---------
 * 1. let VS var VS const
 * 2. let and var in loops 
 * 3. arrow fucntions 
 */

/*
    1. Let VS var VS const 
    -------------------
    > let and const are relatively newer addition to JS 
    > They have the feature of block scope which was missing in Var
    > var only had feature of global and fucntion scope. Meaning 
        Even thought you were declare a var in a block, it would 
        still have a functional scope visibility 
    > Eg : 
*/
for( let i=0;i<5;i++) {
    var x = 10 ;
}
console.log(x) ; //ideally x should not be accessible / visibile outside the for block

/*
    > Reassignment is possible in case of var and let , but not const (obvisouly)
    > Redeclaration is allowed in case of var but not in case of let and const 
    > Eg : 
*/

var a = 10; 
var a = 20;
console.log(a) ;
let b = 10 ;
// let b = 20 ;  // will give an error
console.log(b)

/*
    > Hoisting and TDZ (Temporary Dead Zone)
    > Remember that all the fucntions are hoisted to the top of the script so that they
        can be accessed from anywhere in the script
    > Similarly all the variables are also hoisted 
    > Eg : 
*/

console.log(variable) ;
var variable = 40 ;
console.log(variable) ;

// console.log(letVariable) ; //gives an error 
let letVariable = 50 ;

/*
    > The reason it says undefined for var is cause it is hoisted but it is not initialized
    > The reason for the let variable giving the error "Cannot access 'letVariable' before 
        initialization" is cause the let variable is in the TDZ. It is a zone where the vairbales 
        are declares (hoisted) but they have not been initialized. 
    > The new JS just doesn't allow us to acces uninitialized vairables in js 
*/


/**
 * let and var in Loops 
 */

for(var i=0;i<5;i++){
    console.log(i) ;
}
console.log("outside the car for loop. i = ",i) ;

for(let j=0;j<5;j++) {
    console.log(j);
}
// console.log(j) ; // will give an error

/*
    > Remember how var will create a global scope i here in the first for loop. which will
        stay in the memory for the entire execution (hence it is accessible after the loop also)
    > Where as the j will get destroyed after the execution of the for loop block
*/


/**
 *  Arrow Fucntions 
 * ---------------
 * > they are just functions written in a different way with some structural differences 
 * > one fucntional diff is the way they bind to the 'this' keyword (to be discussed in future classes) 
 */

function normalFunc(a,b) {
    return a+b ;
}
// converting the above into an arrow fucntion
let arrowFunc = (a,b) => {
    return a+b ;
}
// if you are making a arrow function with only one line which is returning something :
let arrowFuncWithReturn = (a,b) => a+b ;
