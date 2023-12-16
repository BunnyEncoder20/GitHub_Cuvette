/*
    Agenda : Array and Methods 
    ------------------------
    > Arrays
    > Iterating over Arrays 
*/


let arr = [];
console.log(typeof arr) ; // arrays are a object type

// Rememeber in Js, array can have any data types within it self (items need not necesarily be of the same data type)
arr = [1,2,3,"Bunny","Soma",8.5,9.2,true] ;
console.log(arr);
console.log("3rd element of arr : ",arr[3]);

// editing array elements 
arr[4] = "Soma Senpai" ;
console.log(arr) ;

// adding new elements into Arrays 
arr.push("Puneet") ;
arr.push(24) ;
console.log(arr) ;
console.log("Length : ",arr.length) ;

// removing elements from arrays 
arr.pop() ;
arr.pop() ;
console.log(arr);
console.log("Length : ",arr.length) ;

// Iterating over Arrays 
/*
    Higher Order fucntions 
    --------------------
    > are functions which can accept another function as parameter 
    or returning a function

    CallBack Functions
    -----------------
    > an function which executes automatically when the main fucntion is called
    > In foreach(callBack(){}) , callback will run on each and every element of that array 
*/

// Syntax of .forEach()
// array.forEach( (item , index , array) => {
//  body of callback function here
// } ) ;


arr.forEach(
    function (element) {            // notice no name given for the callback func => anonimous function
        console.log(element);      // the parameter name will be the current element of the array 
        console.log("due to callback func");    
    }
) ;


let arr2 = [10,20,30,40,50]; let sum=0;

arr2.forEach(element => {
    sum += element ;
   console.log(element) ; 
});

console.log("Sum of the arr2 = ",sum);

arr2.forEach(element => {       // notice this is the arrow method to do the same thing as before 
    element+=100 ;                      // remember pass by value and pass by reference. There is no such concept in JS
   console.log(element) ; 
});
console.log(arr2) ;     // note the changes are not visible cause of property of arrays (it passes references only - a property of arrays)

// Map function is used to make Transformation/changes to an array
// It returns the updated value from the callback fucntion. Hence in the end returning an array with the changes made
// Syntax 
// array.map((item, index, array) => {body of callback func here} )

updated_arr2 = arr2.map(item => {
    item+=100;
    return item ;
});
console.log("Did the array update ? ",updated_arr2) ;
console.log("NOTE : It is not possile to make changes to an array elements once it is added to it. In Map also, it only possible to make a completely new updated array, the original array still stays the extact same");
console.log("Original arr2 : ",arr2);

// We can however, assign the updated array back to the original array like : 
arr2 = arr2.map(currentValue => {
    return currentValue+=100 ;
});
console.log("Original arr2 : ",arr2);

// Note an object is always passed by refernce, hence any changes made to it, are seen outside the functions also
// Short example showcasing the difference between arrays and objects

let object = [{val:10},{val:20},{val:30},{val:40},{val:50}] ;
// Notice the similarity and difference between defining an array and object
console.log(object) ;

object.forEach( currentValue => {
    currentValue.val += 100;
}) ;
console.log(object) ;



//  Revision for HOF : ForEach()
let numbers = [1,2,3,4,5];

// The callback functions : 
let display = element => {console.log(element);}
let double = (element, index, array) => array[index]=element*2;
let triple = (element,idx,arr) => arr[idx]=element*3;
let squared =  (element,idx,arr) => {
    arr[idx] = Math.pow(element,2);
}
let uppercase = (element,idx,arr) => arr[idx]=element.toUpperCase();
let lowercase = (element,idx,arr) => arr[idx]=element.toLowerCase();
let capitalize = (element,idx,arr) => arr[idx]=element.charAt(0).toUpperCase()+element.slice(1);
// Remember that function declarations are only hoisted and not function expressions and arrow functions

// The forEach function calling the callbacks functions by passing them as it's input arguements
numbers.forEach(display);
console.log("Doubled");
numbers.forEach(double)
numbers.forEach(display);
console.log("Times 3");
numbers.forEach(triple);
numbers.forEach(display);
console.log("Squared")
numbers.forEach(squared)
numbers.forEach(display);



let fruits = ["Apple","Orange","Banana","Coconut"];

console.log("Fruits :");
fruits.forEach(display);
console.log("To uppercase : ");
fruits.forEach(uppercase);
fruits.forEach(display);
console.log("To Lower case");
fruits.forEach(lowercase);
fruits.forEach(display);
console.log("Capitalize the first character : ");
fruits.forEach(capitalize);
fruits.forEach(display);


//  Revision for HOF : map()
// very similar to the forEach() but it returns a brand new array 

const number2 = [1,2,3,4,5];
const squaredNumber2 = number2.map(square);
console.log("Squared Number2");
console.log(squaredNumber2);
const cubedNumber2 = number2.map(cube);
console.log("Cubed Number2");
console.log(cubedNumber2);

function square(element) {
    return Math.pow(element,2);
}
function cube(element){
    return Math.pow(element,3);
}


const students = ["bunnY","SoMa","PunEet","varUn"] ;
const uppercased = students.map(upper);
const lowercased = students.map(lower);
console.log("All Upper : ");
console.log(uppercased);
console.log("All lower : ");
console.log(lowercased);
console.log("Original : ")
console.log(students);

function upper(element) {
    return element.toUpperCase();
}
function lower(element) {
    return element.toLowerCase();
}


const dates = ["2022-1-10","2023-12-31","2023-5-15","2001-1-6"];
const corrected_dateformat = dates.map(format); 
console.log(corrected_dateformat);

function format(element) {
    let parts = element.split("-");
    return `${parts[2]}/${parts[1]}/${parts[0]}` ;
}


//  Revision for HOF : .filter()
// creates a new array by filtering out elements
const number3 = [1,2,3,4,5,6,7,8,9,10];
console.log("Even Numbers : ");
const evennums = number3.filter(isEven);
console.log(evennums);
console.log("Odd Numbers : ")
const oddnums = number3.filter(isOdd);
console.log(oddnums);

function isEven(e) {
    return e%2 === 0;
}
function isOdd(e) {
    return e%2 !== 0;
}

const ages = [16,17,18,18,20,19,60];
let isAdult = e => e>=18 ;
let isChild = e => e<18 ;

const adults = ages.filter(isAdult);
console.log("Adults : ");
console.log(adults);
const children = ages.filter(isChild);
console.log("Children : ");
console.log(children);

const fruits2 =["apple","banana","orange","kiwi","pomegranate","coconut"]
console.log("pomegranate : "+fruits2[4].length);
let shortword = str => str.length <= 6 ;
let longword = str => str.length > 6 ;
console.log("Short Words");
const shortwords = fruits2.filter(shortword);
console.log(shortwords);
console.log("Long Words");
const longwords = fruits2.filter(longword);
console.log(longwords);


//  Revision for HOF : .reduce()
// reduced all the elements of a array into a single value 
const prices = [5, 30, 25, 10, 15, 20] ;
let billing = (accumulator, element) => {
    return accumulator+element;
}
const total = prices.reduce(billing)
console.log(`Total : ${total.toFixed(2)}`)      // .toFixed(n) fixes the decimal values of the numebr till n places

const marks = [75, 50, 90, 80, 65, 95];
const getMax = (acc, next) => Math.max(acc,next) ;
const getMin = (acc,next) => Math.min(acc,next);

const maxMark = marks.reduce(getMax);
const minMark = marks.reduce(getMin);
console.log("Maximum Marks : ")
console.log(maxMark);
console.log("Minimum Marks : ")
console.log(minMark);

