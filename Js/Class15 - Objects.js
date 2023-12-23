/*
    Agenda : Objects and Events (Mastering these 2 == Knowing almost all of JS)
    -----------------------------------------------------------------
    Objects: 
    -> Object
    -> accessing properties of object
    -> deleting properties of object
    -> iteration over object
    -> Arrays + Objects 

    Events 
    -> timing events 

    Remember (interview prep) : 
    singleton object - when we make a object using a CONSTRUCTOR the object is one of a kind 
    when we create object using other methods (using literals), then there are multiple instances of teh object created 
*/

/*
Objects 
-------
> not like the objects in other programming languages 
> objects are containers which have properties in form of key-value pairs and can also
    have behaviors in the form of methods (functions)
> In JS, objects are most important. If you understand objects, you understand JS
> In JS almost everything is an object 
*/

/*
    Object literals (is a simple way of creating objects)
    --------------------------------------------
*/
let bestfriend = {
    name: "Somya Kumari" ,
    nickname: "Soma" ,
    age: 22 ,

    talk: () => {
        console.log("I'm Talking function inside Bestfriend object") ;
    }
}

console.log(bestfriend) ;
console.log(bestfriend.nickname) ;      // most of the time we access object properties like this only but there are a few exception cases discussed below 
console.log(bestfriend['name']) ;
console.log(bestfriend['age']) ;
console.log(bestfriend.age) ;
console.log(bestfriend.talk()) ;
// console.log(bestfriend[age]) ;  * Calling this will create an error because behind the scenes, the keys of the object are stored as strings
// this way of accessing object should be know because if the key is of 2 words, we cannot access it using obj.key method
// also this is the way to access symbols as object keys

// Declaring and Accessing Symbols within an object : 
const mySymbol = Symbol("key1") ;

const user = {
    username : "bunny" ,
    "Full name" :  "Varun Verma",
    age : 18 ,
    location : "Chennai" ,
    email : "varun.verma@microsoft.com" ,
    isLoggedIn : true ,
    lastLoginDays : ["Monday","Saturday"] ,
    [mySymbol] : "myObjectKey1"
}

console.log("Full Name : "+user["Full name"])  // this is the only way to access teh Full name key
console.log("Accessing the symbol : "+user[mySymbol])
console.log("check the type of symbol : "+typeof mySymbol)


/*
    Declaring an object using an constructor : 
    -------------------------------------
*/
const tinderUser = new Object() // this will become a singleton object 
// const tinderUser = {}   // this is a non singleton object 

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false 
console.log(tinderUser)

// We can also declare another object inside another object 
// notice how name key has value of an object which has 3 values one of which is again an object (fullName)
const regularUser = {
    email:"someone@gmail.com",
    name:{
        fullName:{
            firstName:"Varun",
            lastName:"Verma"
        } ,
        username:"BunnyEncoder1505",
        nickname:"Bunny"
    }
}

console.log("First name : "+regularUser.name.fullName.firstName);
console.log("Last name : "+regularUser.name.fullName.lastName);
console.log("username : "+regularUser.name.username);
console.log("nickname : "+regularUser.name.nickname);




/*
Adding properties to an objects
*/
bestfriend.height = "5'2" ;
console.log(bestfriend) ;

// adding functions into objects : 
regularUser.greetings1 = function() {
    console.log("Hello user !")
}
regularUser.greetings2 = function() {
    console.log(`Hello user from : ${this.name.username}`)
    // using `` (back ticks) is used for string interpolation
}

//console.log("Greeting 1 \n"+user.greetings1);       
//console.log("Greeting 2 \n"+user.greetings2);       // these will only return a reference to the function 
console.log("Greeting 1 \n"+regularUser.greetings1());
console.log("Greeting 2 \n"+regularUser.greetings2());     // this will actually execute the function




/*
NOTE : when we declare an object as a const, it doesn't stop us from modifying the 
            properties of that object. 
            Remember const denies changing of the a memory block (eg: increasing, decreasing it)
            it doesn't stop if something is being changed within that memory block
*/

const dontChangeThisObject = {
    key1: "Value1",
    key2: "Value2",
    key3: "Value3",
}

dontChangeThisObject.AddedKey4 = "Value4" ;
console.log(dontChangeThisObject) ;                 //it get's changed 

/*
    > If we want the object to not change then we can Freeze the object 
    > this stops the propagation of changes made after it to the object (it'll not show up as an error)
    > Object.Freeze( object2beFrozen ) 
*/

Object.freeze(dontChangeThisObject)              // freezing the object here
dontChangeThisObject.AddedKey5 = "Value5" ; // trying to change it 
console.log(dontChangeThisObject) ;              //it doesn't get changed 


/*
Iterating Over Object properties
> we use a "for in" loop for that 
*/

for (const key in bestfriend) {
    console.log(key) ;
}


/*
Array of objects 
*/
let arrObjects = [
    {
        name:"a",
        marks:60
    },
    {
        name:"b",
        marks:92
    },
    {
        name:"c",
        marks:24
    },
    {
        name:"d",
        marks:33
    },
    {
        name:"e",
        marks:60
    }
]

/*
Q) How to find the students which are failing even after giving grace marks of 5 ? Also
find the overall average of those failing students.s
*/

let failedStudentsMarkSum = arrObjects.map(students=>{
    return {...students, marks: students.marks+5} ;
    // remember the ... is the spread operator of JS which is used to copy the original 
    // values of the students , while the marks property is updated using the current
    // objects (students) .marks 
}).filter(students => {
    return students.marks<40;
}).reduce((sum, students) => {
    return sum+students.marks ;
}, 0)
console.log("failedStudentsMarkSum length : ",failedStudentsMarkSum.length) ;
console.log("Average marks of failed students (After 5 Marks Grace) : ", failedStudentsMarkSum/2) ;
// Note that chaining the functions like this will not make it possible to get the length of the array
// Cause the reduce function will return a single value (the sum).
// if we want the length , then we should store it seperately before performing the 
// reduce function.

failedStudents = arrObjects.map(students=>{
    return {...students, marks: students.marks+5} ;
}).filter(students => {
    return students.marks<40;
})
console.log("Average marks of failed students (After 5 Marks Grace :: Proper Method) : ", failedStudents.reduce((sum,student)=>{return sum+student.marks},0)/failedStudents.length) ;
// NOTE : the return statement in the arr.reduce method is necessary and will not function 
// if that is not mentioned in the block.

/*
Iterating over a Array of Objects 
*/
increasedMarksBy10 = arrObjects.map(students => {
    return students.marks += 10 ;
})
console.log(increasedMarksBy10) ;



// Revision 
// 1. Spread operator : ... - allows an iterable (eg: array, string) to be expanded into seperate elements  
// (unpacks the elements) 
let numbers = [1,2,3,4,5];
let maxi = Math.max(numbers)        // this returns NaN because we directly passed an array 
maxi = Math.max(...numbers)          // here we passed the unpacked elements of the array 
console.log("Maximum = "+maxi);
let mini = Math.min(...numbers);
console.log("Minimum = "+mini);

let username = "Bunny Encoder";
console.log(...username);
let letters = [...username];
console.log(letters);
letters = [...username].join("-");
console.log(letters);

let fruits1 = ["🍎", "🍊","🍌"] ;
let vegetables = ["🥕","🥔","🍆"] ;

let foods = [...fruits1, ...vegetables, "🥛", "🥚"] ;
console.log(foods);


// Array of Objects : 
const fruits = [ {name: "apple", color: "red", calories: 95}, 
                          {name: "orange", color: "orange", calories: 45}, 
                          {name: "banana", color: "yellow", calories: 105}, 
                          {name: "coconut", color: "white", calories: 159}, 
                          {name: "pineapple", color: "yellow", calories: 37}];

// Access properties of a fruit object
console.log(fruits[0].name);
console.log(fruits[0].color);
console.log(fruits[0].calories);

// Add a new fruit object
fruits.push({ name: "grapes", color: "purple", calories: 62});

// Remove the last fruit object
fruits.pop();

// Remove fruit objects by indices
fruits.splice(1, 2);

// ---------- forEach() ----------
fruits.forEach(fruit => console.log(fruit));
fruits.forEach(fruit => console.log(fruit.name));
fruits.forEach(fruit => console.log(fruit.color));
fruits.forEach(fruit => console.log(fruit.calories));

// ---------- map() ----------
const fruitNames = fruits.map(fruit => fruit.name);
const fruitColors = fruits.map(fruit => fruit.color);
const fruitCalories = fruits.map(fruit => fruit.calories);

console.log(fruitNames);
console.log(fruitColors);
console.log(fruitCalories);

// ---------- filter() ----------
const yellowFruits = fruits.filter(fruit => fruit.color === "yellow");
const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
const highCalFruits = fruits.filter(fruit => fruit.calories >= 100);

console.log(yellowFruits);
console.log(lowCalFruits);
console.log(highCalFruits);

// ---------- reduce() ----------
const maxFruit = fruits.reduce( (max, fruit) =>
                                                        fruit.calories > max.calories ?
                                                        fruit : max);

const minFruit = fruits.reduce( (min, fruit) =>
                                                       fruit.calories < min.calories ?
                                                       fruit : min);

console.log(maxFruit);
console.log(minFruit); 