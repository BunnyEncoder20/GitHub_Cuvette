/**
 *      Agenda : API and Promises in JS
 * ---------------------------------
 *  1. Asynchronous Behavior of JS
 *  2. API and How to fetch response from API
 */

/*
    Blocking Code VS Non Blocking code 
    -------------------------------
    > Blocking code stops the execution/flow of the program
    > Non blocking code doesn't stops the flow of the program, lets the next steps get executed while it deals with that task
    > blocking code ==> Sync ops            (NOTE that sync/blocking not always bad : eg: DB searches)
    > non blocking code ==> Async ops
*/

/*
    Synchronous and Asynchronous
    ----------------------------
    > JS most of the operations are synchronous & single threaded (default JS behavior)
    >  Synchronous = line by line execution
    > each operation waits for the previous one to completed before executing itself 

    > when we are trying to fetch some response from an external server , there will 
        always be some sort of delay (API calls, network calls). These sort of lines actions are called asynchronous 
        lines 
    > Asynchronous nature of JS : JS will skip all the asynchronous lines and will execute 
        all the synchronous lines first and then only focus the asynchronous lines

    > Call Stack is where all the synchronous scope's and function's execution contexts are stacked and 
        operated upon.  Topmost context execution is done and popped (unloaded) like ops of  stack

    > For Asynchronous functions, there is a separate thing called the "Call Back" Queue
    > Once the call stack is empty, then one by one, the remaining lines are sent
        from the Call back QUEUE to the call STACK for execution
    > This process of taking things out of the call back queue and putting them in the 
        call stack for execution is called event loops 
    
    > Important terms for interview : 
        1. Synchronous and Asynchronous 
        2. Call stack 
        3. Call back queue
        4. Event loops 
    
    > Note that whenever a function returns an promise , it is definitely an asynchronous
        operation
    > Promises are async ops which get loaded into a separate queue called : Promise Queue (or sometimes called high priority queue)
    > Generally seen with fetch() ops
*/

console.log("First")

// Kinda Asynchronous operation
setTimeout(()=>{
    console.log("one and a half") ;
},1000)

console.log("Second")


/*
    API : Application Programming Interface 
    -----------------------------------
    > it is a like a tunnel between 2 parties with authentication at both sends
    > also maybe called an endpoint 
    > API is simply a language between frontend and backend which can be used for 
    > API are responses from a server and the responses need to be read and understood before we can work on them
    > For this we can use websites like { JSON formatter }

    > Fetch is an method in Js which helps in getting responses from an API
    > It is a method which starts the process of fetching resources from an network / API
*/

let result1 = fetch('https://catfact.ninja/fact') ;  //statement 1
console.log(result1) ;                                            // statement 2

/*
    Promise in JS   (also ref document "Class22.25 - Promise.js")
    ------------
    > Promise object represented the eventual completion (or failure) of an Async operation and it's resulting value
    > did you notice in the above example
    > the statement 1 is asynchronous 
    > statement 2 is synchronous 
    > then why is it working normally and not getting undefined in the log?

    > This is what promise does 
    > Promise is a special JS object which returns an object when you make a asynchronous
        call and which will return you an result in a future , in case it is successful
    
    > Promise can have 3 states : 
        1. pending : initial state 
        2. fulfilled : completed execution
        3. rejected : was not possible to complete or failed to complete

    > Instead of return back asynchronous functions results, we can use promises
    > We can use the following : 
        1) callback 
            (an function which is attached internally which will run only when the promise 
            was successfully completed, else the function will not run only)
            [not recommended method cause of nested functions and callbacks (callback hell / pyramid)]

        2) .then .catch 
                syntax : 
                                promise
                                .then(()=>{
                                    # will execute this function if resolved
                                }).catch(()=>{
                                    # will execute this function if rejected
                                })

        3) Async await

*/





let result2 = fetch('https://catfact.ninja/fact') ;
result2
.then((returnedByPromise)=>{
    console.log("Running only after promise resolved") ;
    console.log(returnedByPromise); 
    // this not in readable format. we use another promise for that called .json()
    // and for that again we can use the .then().catch()
}).catch(()=>{
    console.log("Running cause promise got rejected");
})

let result3 = fetch('https://catfact.ninja/fact') ;
result3
.then((returnedFromFetch)=>returnedFromFetch.json()).then((returnFromJSON)=>{
    console.log("Using .then().catch() await : \n",returnFromJSON) ;
}).catch(()=>{
    console.log("Error in calling the JSON promise");
}).catch(()=>{
    console.log("Error in calling the Fact API")
})

/*
    > Thus using chaining of .then().catch() we can avoid the callback hell pyramind

    > We will now try to do the same using async await 
    > await basically replaces the .then()
    > but we need to always wrap it in a async function 
*/

async function wrappingFunction() {
    let returnedData = await fetch('https://catfact.ninja/fact') ;
    let readibleData = await returnedData.json() ;

    console.log("Using async await : \n",returnedData);
}
// don't forget to call the async function
wrappingFunction() ;