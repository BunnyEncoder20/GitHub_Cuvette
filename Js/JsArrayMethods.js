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
var numbers = [1,2,3,4,5] ;

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
console.log("\n\n") ;
// Note that Number is a constructor which converts the string into numbers




// Filter array method
numbers.push(6,7,8,9,10);
console.log(numbers) ;
var isEven = numbers.filter(callback2)
function callback2(value, index) {
    // checks if the number is even. if value%2 == 0 then only this callback function will return that value
    return value%2===0;
}
console.log(isEven)


var people = [
    {
        name : 'Bunny',
        age : 22 
    } ,
    {
        name : 'Soma',
        age : 22
    } ,
    {
        name:'Puneet',
        age:17
    }
] ;

var adults = people.filter(person => person.age>=18);
console.log(adults);

// removing Duplicates from array 
var duplicateNumArray = [1,2,1,2,1,1,1,4,5,6,5,4,3,3,4,8,7,7,8,9,10,10] ;
var noDupsNumArray = duplicateNumArray.filter((number,index,array) =>{
    return array.indexOf(number) === index ;
    // array.indexOf(value) will always return the index of the first occurance of the number 
    // hence after the first occurance, none of the same numbers will be returned from the function
});
console.log(noDupsNumArray) ;
console.log("\n\n") ;



// Reduce array mehtod : used to return a singular value from a array
console.log(numbers);
initialValue = 0 ;

// Example 1
var summation = numbers.reduce(callback3, initialValue) ;
function callback3(accumulator, value, index, array) {
    // accumulator is the value which will be returned in the end 
    // it is initialized with the values passed as initialValue
    // if initialValue is not passed then it is taken as the first element of the array

    return accumulator+value;  // whatever is returned from reduce callback is stored in the accumulator for the next iteration
}
console.log("Summation : "+summation);

// Example 2
initialValue = -Infinity;
var maximum = numbers.reduce((accumulator,value)=>{
    if(accumulator > value)
        return accumulator ;
    else if (accumulator < value)
        return value ;
    else 
        return accumulator;
}) ;
console.log("Maximum = "+maximum) ;

// Example 3
var store = [
    {
        product:'laptop',
        value:1000,
        count:3
    } ,
    {
        product:'desktop',
        value:1500,
        count:4
    } ,
    {
        product:'mobile',
        value:500,
        count:10
    } ,
];

var totalValueOfStore = store.reduce((accu, item) => {
    return accu + (item.value*item.count) ;
},0);
// Note the ",0" in the end. This is the initial value being passed after the callback fucntion 
console.log("Total Assets in store : "+totalValueOfStore);
console.log("\n\n");



// Sort array method
names = ['Varun','Tarun','Soma','Senpai','Hoods','Bunnu','Bunny','Somya'];
numbers = [1,3,6,2,9,7,12,89,79,23,56,28];
names.sort() ; // default is in acending order 
numbers.sort() ;
console.log(names);
console.log(numbers);
// note the numebrs one doesn't work
// is this cause the sort method converts the integers into strings 
// Here is how we can make a custom callabck func for comparing numbers
numbers.sort(compareFunc) ;
function compareFunc(a,b) {
    // 1. if return < 0 : a comes first 
    // 2. if return == 0 : nothing changes 
    // 3. if return > 0 : b comes first 
    return a-b ;
}
console.log(numbers); 


// Comparing object using sort 
var products = [
    {
        name : 'laptop',
        price : 1000
    } ,
    {
        name:'desktop',
        price:1500
    } ,
    {
        name:'phone',
        price:500
    }
];
// acsending order 
products.sort((a,b)=>{
    return a.price-b.price ;
});
console.log(products);

// descending order 
products.sort((a,b)=> b.price-a.price);
console.log(products);

// notice the different ways to call write the function