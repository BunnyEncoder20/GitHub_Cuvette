const arr = [ 1,2,3,4,5] ;

/* 
    forEach() method 
     --------------- 
*/
arr.forEach( callback1 ) ;

function callback1(value, index, array){
    console.log(value);
}

arr.forEach( function (value,index,array){
    console.log("a["+index+"] = "+value );
}) ;

arr.forEach((value,index,array) => {
    console.log(array) ;
});

var sum = 0 ;
arr.forEach( value => {
    sum += value;
});
console.log(sum);

// editing an object using callback function 
var count = {};
var items = ['a','b','c','b','c','a','a','c','b','b','b','c','d','d']; 

items.forEach( item => {
    if(count[item]){
        count[item]++;
    }
    else{
        count[item]=1;
    }
}) ;

console.log(count);

console.log("\n\n")
/* 
    map() method 
     ----------- 
*/
const numbers = [1,2,3,4,5] ;

// remember map doesn't change the original array
// just returns a new array as a result. This first block does nothing 
numbers.map(double);
function double(value, index, array) {
    return value*2 ;
}
console.log(numbers);

var newnumbers = numbers.map(double) ;
console.log(newnumbers);

// can also be done using arrow fucntions (function expression)
newnumbers = numbers.map(value => value*2) ;
console.log(newnumbers)

// this is a array of objects 
const logbook = [
    {
        category: 'laptops',
        price : 7000,
        inStock : 20 
    },
    {
        category: 'mobiles',
        price : 500,
        inStock : 50 
    },
    {
        category: 'desktops',
        price : 10000,
        inStock : 5 
    }
];

var shopEvaluation = logbook.map(item => {
    return item.price * item.inStock ;
});
console.log(shopEvaluation);

// How to return an array object as 
shopEvaluation = logbook.map(item => (
    {
        Category : item.category,
        Cost : item.price * item.inStock 
    }
));
console.log(shopEvaluation);


// Converting a array of string numbers into array of numbers 
const str = ['1','2','3','4','5'] ;
var nums = str.map(item => {
    return Number(item);
}) ;
console.log(nums);

// alternative 
nums = str.map(item => Number(item)) ;
console.log(nums);