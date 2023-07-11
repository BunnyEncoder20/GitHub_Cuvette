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

document.getElementById('h2').innerText = "Changed using JS" ;
let htmlCollection1 = document.getElementsByClassName('head3')
htmlCollection1[0].innerHTML = "<u>Changed using JS</u>"


// Changing the stlye of DOM elements 
let htmlCollection2 = document.getElementsByTagName('h1');
htmlCollection2[0].style.color = 'violet' ;