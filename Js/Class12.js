/* 
    Agenda
    -------
    > Conditionals in JS 
        - if else 
        - switch 
    
    > Ternary Operator
        - (condition) ? If true : if false
    > Loops in JS
        - for 
        - while 
        - do while 

    > break & continue 
*/

console.log("Installing Node.js latest version...\n(node -v to check)\nInstallation completed.\n\n");
console.log("To run js file from the terminal using Node.js : node filename.js\n\n")

let age = 28; 

console.log("If else conditional statement :-")
if(age > 18 ){
    console.log("Go ahead and perform your right to vote") ;
}
else if(age==18){
    console.log("Go ahead and register yourself as a voter !") ;
}
else {
    console.log("You are not aligible to vote yet") ;
}


console.log("\n\nTernary Operator :-") ;
age>18 ? console.log("Go ahead and perform your right to vote") : console.log("You are not aligible to vote yet") ;