/*eslint-env browser*/


//Player Text Commands BASIC----
//command function.
function commands(iText) { //checks the input field
    'use strict';
    if (iText === "help") {
        termString = "You asked for help with a command! Wow!";
        inp_field.value = '';
    }

    if (iText === "up") {
        termString = "You walk North.";
        inp_field.value = '';
    }
    
     if (iText === "down") {
        termString = "You walk South.";
        inp_field.value = '';
    }
    
     if (iText === "smell") {
        termString = "It smells like death in here!";
        inp_field.value = '';
    }
}

//
