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

/* 
    map() method 
     ----------- 
*/
const numbers = [1,2,3,4,5] ;

// remember map doesn't change the original array
// just returns a new array as a result 

numbers.map(double)

function double(value, index, array) {
    
}