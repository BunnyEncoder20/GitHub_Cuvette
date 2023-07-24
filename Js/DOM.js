/*
    DOM Manipulation
    ----------------

    Remember that : 
    -> document.getElementByID() returns one unique html element
    -> document.getElementsByClassName() returns an htmlCollection
        (an array of elements), in which  the actual html elements are 
        accessible using index
    -> document.getElementByTagName() also behaves same as ClassName()
    
*/

// Accessing an DOM element 
document.getElementById('h2').innerText = "Changed using JS" ;
let htmlCollection1 = document.getElementsByClassName('head3')
htmlCollection1[0].innerHTML = "<u>Changed using JS</u>"


// Changing the stlye of DOM elements 
let htmlCollection2 = document.getElementsByTagName('h1');
htmlCollection2[0].style.color = 'violet' ;


// Creating a DOM element 
let buttonElement = document.createElement('button') ;
buttonElement.innerText = "Click to Submit" ; 

// Adding attribute to the elements 
let imageElement  = document.createElement('img');
imageElement.setAttribute('src','../HTML/Images/catgiggle.gif') 
imageElement.setAttribute('alt','Image Added using created DOM element')

// adding the created DOM element to the document 
document.body.appendChild(buttonElement) ;
document.body.appendChild(imageElement) ;

// Events in JS
let eventBtn = document.getElementById('eventbtn') ;
eventBtn.onclick = function clickedEvent() {
    console.log('Event broughyt to you by DOM.js') ;
} ;

function changeHeading() {
    document.getElementById('eventsHeading').innerHTML = '<h3 id="eventsHeading"><u><b>Events in JS in Bold & Underline</b></u></h3>'
}


// Adding Events listeners 
eventBtn.addEventListener('dblclick',changeBack) //Note that the 2nd Parameter is a callback function name (hence no () after the function name)
function changeBack() {
    document.getElementById('eventsHeading').innerHTML = '<h3 id="eventsHeading">Events in JS </h3>' ;
}

// PointerEvent Object 
let pointerEvent = document.getElementById('PointerEventbtn') ;
pointerEvent.addEventListener('click',printPointerEvent) ;  //remember that the event object is sent by default to the callback fucntion of the eventListener

function printPointerEvent(event) {
    console.log(event) ;
} ;


/*
    Event Bubbling
    -------------
    > occurs when an child and parent are listening for the same events
    > eg: when the parent is also listening for a click and child inside that parent is also listening for a click
    > Then if we want to click for only the button, the event will propogate to the parent also

    > To avoid this situation, we can use the eventObject.stopPropagation()
    > An silent parameter (event object) is passed to the callback function when event is heard
    > Eg :
 */
let parentElement = document.getElementById("parentElement") ;
let childElement1 = document.getElementById("childElement1") ;
let childElement2 = document.getElementById("childElement2") ;

parentElement.addEventListener('click',parentListener) ;
childElement1.addEventListener('click',childListener1) ;
childElement2.addEventListener('click',childListener2) ;

function parentListener (event) {
    console.log("Parent Listener activated") ;
    document.getElementById("divHeading").innerText="Change brought you by parentListener()"
}

function childListener1 (event) {
    console.log("Child Listener 1 activated") ;
    childElement1.innerText = "Change Brought to you by childListener1()"
}

function childListener2 ( event ) {
    console.log("Child Listener 2 activated") ;
    childElement2.innerText = "Notice that the Heading did not change this time !"
    event.stopPropagation() ;
}