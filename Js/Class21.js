/**
 *      Agenda : Intro to JQuery 
 * ---------------------------
 *  1. introduction
 *  2. selectorts using Jquery
 *  3. modification of CSS using jquery
 * 
 */

function showMagic() {
    $("p").fadeToggle(3000) ;
}

function showMagic2() {
    $("#p2").fadeToggle(1000) ;
}

/*
    > there are multiple weays to select the html element just like in CSS
    > eg : $("#id"), $(".class"), $("html_element"), $("element1, element2")    
*/

$("h1").click(changeCSS);
function changeCSS () {
    $("h1").css('color','red');
}