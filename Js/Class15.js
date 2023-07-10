/*
    Agenda : Objects and Events
    ------------------------
    Objects: 
    -> Object
    -> accessing properties of object
    -> deletiong properties of object
    -> iteration over object
    -> Arrays + Objects 

    Events 
    -> timing events 

*/

/*
Objects 
-------
> not like the objects in other programming languages 
> objects are contains which have properties in form of key-value pairs and can also
    have behaviours in the form of methods (functions)
> In JS, objects are most important. If you understand objects, you understand JS
> In JS almost everything is an object 

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
console.log(bestfriend.nickname) ;
console.log(bestfriend['name']) ;
// console.log(bestfriend[age]) ;  * Calling this will create an error 
console.log(bestfriend.talk()) ;

/*
Adding properties to an objects
*/
bestfriend.height = "5'2" ;
console.log(bestfriend) ;

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

dontChangeThisObject.AddedKey4 = "Value5" ;
console.log(dontChangeThisObject) ;


/*
Iterating Over Object properties
> we use a "for in" loop for that 
*/

for (const key in bestfriend) {
    console.log(key) ;
}


/*
Array og objects 
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