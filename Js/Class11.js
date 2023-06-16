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