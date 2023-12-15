/* 
    Agenda : 
    -------
    - Intro into JS
    - Chrome Dev tools
    - variables 
    - data types 
    - types of Operators 
    - type coehersion
    - adding JS to html & console logging 



    JavaScript
    ----------
    1. It is a Programming language (unlike html or css)
    2. It is dynamic typed (do need to declare the data type of a variable). Opposite of static typed languages (eg: Java)
    3. It is High Level Programming Langauge
    4. Scripting Language 
*/



function addition() {
    const num1 = parseInt(document.getElementById("num1").value); console.log("num1 = "+num1);
    const num2 = parseInt(document.getElementById("num2").value); console.log("num2 = "+num2);
    resultElement = document.getElementById("ans");
    
    console.log("Adding"+num1+" & "+num2);
    
    var result = num1+num2;
    resultElement.innerHTML = result;
}

function substraction(){
    const num1 = parseInt(document.getElementById("num1").value); console.log("num1 = "+num1);
    const num2 = parseInt(document.getElementById("num2").value); console.log("num2 = "+num2);
    resultElement = document.getElementById("ans");
    
    console.log("Substracting"+num1+" & "+num2);
    
    if (num1>num2) {
        var result = num1-num2;    
    } else {
        var result = num2-num1;    
    }
    
    resultElement.innerHTML = result;
}

function Multiplication() {
    const num1 = parseInt(document.getElementById("num1").value); console.log("num1 = "+num1);
    const num2 = parseInt(document.getElementById("num2").value); console.log("num2 = "+num2);
    resultElement = document.getElementById("ans");
    
    console.log("<Multiplying>"+num1+" & "+num2);
    
    var result = num1*num2;
    resultElement.innerHTML = result;
}

function Division() {
    const num1 = parseFloat(document.getElementById("num1").value); console.log("num1 = "+num1);
    const num2 = parseFloat(document.getElementById("num2").value); console.log("num2 = "+num2);
    resultElement = document.getElementById("ans");
    
    console.log("Dividing"+num1+" by "+num2);
    
    if (num2!=0) {
        var result = num1/num2;    
    } else {
        var result = "Error : Divide by 0 error";    
    }
    
    resultElement.innerHTML = result;
}

/*
    Data Types in JS 
    --------------
    Two major types of data in JS : 
    1. Primitive - string, number, boolean, Null, undefined, BigInt, Symbol
    2. Non-primitive - object

    NOTE : arrays, functions in JS are a derived type of objects only

    var a ;     # undefined (decalred but not initialized)
    var b = <null>      # Null value (declared and initialized) 

    To check the datatype of a variable : 
    > typeof variable_name    
    < string
*/

/**
 *  Type Cohersion in JS
 *  ------------------
 *  When 2 different data types are given and a common operation is done on them , JS auto converts some 
 *  of the data into the other 
 *  Eg : 
 */
let var1 = "123" ;
let var2 = 10 ;
let result = var1+var2;
console.log("Type Cohersion : "+result)
/**
 *  We see that instead of adding like numbers, JS has concatenated the variables
 *  But sometimes it'll convert the String into numbers when substraction is done : 
 */
result = var1-var2 ;
console.log(result) ;
/**
 *  Because there is no operation with subsraction in string , hence js converts the variables to numbers
 */