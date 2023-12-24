
/*
    Creating Promises 
    ---------------
    > new Promise( handler (resolve, reject) )
    > when consuming the promise, the resolve param is connected to  .then() and reject is connected to .catch()
    > note that resolve and reject are actually methods 


    
 *  fetch() global function
 * ---------------------
 * > the global fetch() method starts the process of fetching a resource from the network, returning a 
 *      promise which is fulfilled once the response is available 
 *  > mdn link : https://developer.mozilla.org/en-US/docs/Web/API/fetch
 */

// NOTE : if the fetch() returns a error code (eg:404) then we should know that it'll be available in the 
//            response and will not go to the reject method

/*
    NOTE : 
    > When we implement fetch() it has it's own special call back queue called "Micro Task Queue"
    > This is a priority queue and is a fast queue which is always executed first compared to the normal    
        callback queue  
*/

const promise1 = new Promise(function(resolve, reject){
    // do a async task
    // eg: DB calls, cryptography, network

    setTimeout(() => {
        console.log("Async task 1 is completed") ;
        resolve()           // notice how use the resolve method here. Only by calling the resolve mehtod can we 
                                 // link the to the .then() of the promise call
    }, 1000);
})

promise1
    .then(function () {
        console.log('Promise is consumed here')
    })


// 2nd way of creating promises : 
new Promise (function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2 completed") ;
        resolve() ;
    }, 1000)
}) 
.then(function(){
    console.log("Promise for Async task 2 resolved") ;
})


// 3. Passing data from promises to the .then() method : 
const promise3 = new Promise (function(resolve, reject){
    setTimeout(function () {
        // how to fetch things from servers and sending the data back to the .then call : 
        resolve({username:"Bunny",email:"bunny@google.com"}) ;
    }, 1000) ;
})
.then(function(user){
    console.log("User object : ", user)
})


// 4. use of Reject method (and also how callback hell happens and how to avoid)
const promise4 = new Promise(function (resolve,reject) {
    setTimeout(function(){
        let error = true ;
        if(!error){
            resolve({username:"Bunny",email:"bunny@gmail.com",password:"abc123"}) ;
        }
        else {
            reject("ERROR : something went wrong ...") ;
        }
    }, 1000)
})

// note the following ways of chaining to get the data required (the consecutive .then s). It is very useful for database situations 
const username = promise4
                            .then((user)=>{
                                console.log(user) ;
                                return user.username ;
                            })
                            .then((myusername)=>{
                                console.log(myusername) ;
                            })
                            .catch((err)=>{
                                console.log(err) ;
                            })
                            .finally(()=>console.log("The Promise is either resolved or rejected"))
// finally will execute always if all else fails



const promise5 = new Promise(function (resolve,reject) {
    setTimeout(function(){
        let error = true ;
        if(!error){
            resolve({username:"javascript", password:"abc123"}) ;
        }
        else {
            reject("ERROR : JS went wrong ...") ;
        }
    }, 1000)
})

// Async wait : it is a code blocking method
// How to handle errors using try catch 
async function consumePromise5(){
    try {
        const response = await promise5 ; // notice we do not use () to call promise5 because it is an object  
        console.log(response);
    } catch (error) {
        console.log(error) ;
    }
}
consumePromise5() ;



// Example of fetching and async-await 
async function getCatFacts() {
    try {
        const response = await fetch('https://catfact.ninja/fact')
        const data = await response.json()        // parsing the data into json format. But this also takes time as it is outsourced hence it is also a async op. Hence the await
        console.log(data)
    } catch (error) {
        console.log(error) ;
    }
}
getCatFacts() ;

//  another way oof doing the same thing : 
fetch('https://catfact.ninja/fact')
.then(response => response.json())
.then((data)=>console.log(data))
.catch(error => console.log(error))