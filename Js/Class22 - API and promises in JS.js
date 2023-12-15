/**
 *      Agenda : API and Promises in JS
 * ---------------------------------
 *  1. Asynchronous Behaviour of JS
 *  2. API and How to fetch response from API
 */

/*
    Synchronous and Asynchronous
    ----------------------------
    >  Synchronous = line by line execution
    > when we are trying to fetch some response from an external server , there will 
        always be some sort of delay (API calls, network calls). These sort of lines actions are called asynchronous 
        lines 
    > Asynchronous nature of JS : JS will skip all the ansynchronous lines and will execute 
        all the synchronous lines first and then only focus the asynchronous lines

    > Call Stack is where all the synchronous scopes and functions are stacked and 
        operator upon
    > For Asynchronous functions, there is a seperate thing called the "Call Back" Queue
    > Once the call back stack is empty, then one by one, the remaining lines are sent
        from the Call back queue to the call stack for execution
    > This process of taking things out of the call back queue and putting them in the 
        call stack for execution is called event loops 
    
    > Important terms for interview : 
        1. Synchronous and Asynchronous 
        2. Call stack 
        3. Call back queue
        4. Event loops 
    
    > Note that whenever a function returns an promise , it is definatedly an asynchronous
        operation
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
    > it is a like a tunnel between 2 servers with authentication at both sends
    > also maybe called an endpoint 

    > Fetch is an method in Js which helps in getting responses from an API
    > It is a method which starts the process of fetching resources from an network / API
*/

let result1 = fetch('https://catfact.ninja/fact') ;  //statement 1
console.log(result1) ;                                              // statement 2

/*
    > did you notice in the above example
    > the statement 1 is asynchronous 
    > statement 2 is synchronous 
    > then why is it working normally and not getting undefined in the log?

    > This is what promise does 
    > Promise is a special JS obejct which returns an object when you make a asynchronous
        call and which will return you an result in a future , in case it is successful
    
    > Promise can have 2 states : 
        1. Resolved / fullfilled 
        2. Intermediate / rejected 

    > Instead of return back asynchronous functions results, we can use promises
    > We can use the following : 
        1) callback 
            (an function which is attached internally which will run only when the promise 
            was successfuly compelted, else the function will not run only)
            [not recomended method cause of nested functions and callbacks (callback hell / pyramind)]

        2) .then .catch 
                syntax : promise.then(()=>{
                    # will execute this function if resolved
                }).catch(()=>{
                    # will execute this fucntion if rejected
                })

        3) async await
*/

let result2 = fetch('https://catfact.ninja/fact') ;
result2.then((returnedByPromise)=>{
    console.log("Running only after promise resolved") ;
    console.log(returnedByPromise); 
    // this not in readable format. we use another promise for that called .json()
    // and for that again we can use the .thn().catch()
}).catch(()=>{
    console.log("Running cause promise gor rejected");
})

let result3 = fetch('https://catfact.ninja/fact') ;
result3.then((returnedFromFetch)=>returnedFromFetch.json()).then((returnFromJSON)=>{
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