/*
    Agenda : Objects and Events
    ------------------------
    Objects: 
    -> Object
    -> accessing properties of object
    -> deletiong properties of object
    -> iteration over object
    -> Arrays vs Objects 

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