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
// if the name has spaces then use : node 'node js filename'

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


console.log("\n\n While loop\n");
let i = 1 ;
while(i<=10) {

    if (14*i >= 100)
        break;
    
    if (i == 5)
    {i++ ; continue ;}

    console.log("14 x ", i, " = " , i*14);
    i++;
}

console.log("\n\n For loop in JS \n");
for(let j=1; j<=10 ; j++)
    console.log(j);


// DO while is a exit controlled loop (it will run once (first iteration) without checking the conditional statement)
console.log("\n\n Do While loop in JS \n");
let j=10 ;
do{
    console.log(j);
}while (j<10) ; //notice even though j already greater that 10 it still ran once unlike while or for loops
