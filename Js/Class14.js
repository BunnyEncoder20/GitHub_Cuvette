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