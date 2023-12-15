/* 
    Agenda 
    ------
    1. window object 
    2. debugging 
    3. scopes 
    4. Closures 
    5. iife (immediately invoked function expression)
*/

/*
    Window Object 
    -------------
    > it is a global object (Parent object, like document object)
    > Window object is like a parent to document obejct 
    > It comprises of all the browser window (in case of document obejct , it only comprises of the viewable area of the browser (everything excluding the titlebar, tabs, menubar, bookmark bar, etc; these come under the window object))
    > It contains more functionality than the document obejct (like setTimer(), setInterval(), popups(), alerts(), etc)
    > It is like a umbrella under which all of the variables and functions can be found (well, almost all. See exmple below, a variable will not be in the window object)
*/

let a = 10 ;
var b = 20 ;
const c = 30 ;

/* 
    Take aaway from above is that variables are a little dangerous to define as they 
    make a copy of themselves in teh global object. We want to generally avoid variables 
    that stick to the global object.
*/

function AAAsayMyName(name) {
    console.log(name) ;
}

/*
    Scopes 
    -------
    Global scopes : the variables which can be accesssed thorughtout the JS script 
                                from starting to the end 
    
    Functional Scopes : the variables that are declared within a function are accessible 
                                    only within the function and not outside it 

    Block scopes : the variables which are defines inside { } and will not be accessible 
                            outside those { } (eg: if{} else {})
                            
    However not all variables declarations follow these scopes eg: var keyword defined variables
    eg : 
*/

var global1 = 10 ;

function dummy1 () {
    var functional1 = 20 ;

    if(true) {
        var block1 = 30 ;
    }
    console.log(global1);
    console.log(functional1); //should  be accessible 
    console.log(block1); //should not be accessible but it is 
}

dummy1() ;

/*
    Thus when dealing with block scope, var fails.
    We repeat the same process with 'let' time.
*/

let global2 = 10 ;

function dummy2 () {
    let functional2 = 20 ;

    if(true) {
        let block2 = 30 ;
    }
    console.log(global2);
    console.log(functional2); //should  be accessible 
    //console.log(block2); //should not be accessible Hence gives the error
}

dummy2() ;



/*
    Debugging
    ---------
    > It is helpful  as it tells if all the lines / funcitons / methods are getting 
    executed as exepected.  
    > Gives more info than just seeing the final output 
    > Breakpoints are the lines where the execute will pause 
    > DEbugging can be done in the console window in the browser 
    > Can also be done in VS code inbuilt debugger by chosing your debugger accordingly 
    > Can also add code breakpoints by writing the the keyword debugger
*/
debugger
console.log("This line comes only after you click on resume in the debugger !")


/**
 * VERY IMPORTANT TOPIC : Closures 
 * -----------------------------
 * > Closure in short can be defined as the function, it's block and the scopes in it's environment 
 * > Closure is the combination of a function bundled together (enclosed) with references
 *      to it's surrounding state (it's lexical environment / scopes)
 * > In the below code, even though we are calling the inner() function, we are still 
 *      able to access all the variables, which belong to the environment of that function
 *      (here, all the variables present in it's lexical scope)
 * > It is a featuer of JS which allows inner functions to access the outer scope of a function
 * 
 */

let globalVariable = 10 ;
function outer() {
    let outerVariable = 20;
    function inner() {
        let innerVariable = 30 ;
        console.log(globalVariable, outerVariable, innerVariable) ;
    }
    return inner();
}
outer() ;

// This is Lexical Scoping. When the Inner function doesn't find the variable in it's 
// current scope, it'll try to find it in it's parent scope. If not even there , then it's 
// grandparent scope and so on


/**
 *  IIFE (Immediately Invoked Function Expression)
 * ------------------------------------------
 * > we write a function which will run and get over then and there 
 */

function immediate() {
    console.log("I'm an normal function!") ;
}
immediate() ; // normal function call 

// By adding a () around the function and then invoking it using another (), 
// it becomes an IIFE
(function immediate() {
    console.log("I'm an IIFE!") ;
}) () ;