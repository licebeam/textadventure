/*eslint-env browser*/

//input field 
var inp_field = document.getElementById("inpField");

var termText = document.getElementById("termText");
termText.textContent = "";


//TERMINAL CODE-----------
var termWriting = false; //makes sure we can't enter commands during writing.
var char_ind = 0;
var termString = "You have been met with your demise and will perish within the depths of this hellish nightmare.";
var addBreak = false;

//async text writer
setInterval(function () {
    'use strict';
    $("#termText").append(termString.charAt(char_ind));
    char_ind += 1;
    if (char_ind >= termString.length) {
        termString = " ";
        char_ind = 0;
        termWriting = false;

    } else {
        termWriting = true;
        termText.scrollBy(0, 50);
    }
}, 20);


//CHECKS FOR ENTER KEY ON INPUT
function handleKeyPress(e) {
    'use strict';
    var hitkey = e.keyCode && e.which;
    if (hitkey === 13) {
        if (termWriting === false) {
            $("#termText").append('<br/>');
            //termString = " " + inp_field.value;
            commands(inp_field.value);
            inp_field.value = '';

        }
    }
}

function sendtoWriter(a) {
    $("#termText").append('<br/>');
    termString = a;
    termText.scrollBy(0, 100);
}

function colortoWriter(a, b) {
    $("#termText").append('<em style="color:' +
        b + '">' + a + '</em>');
    termText.scrollBy(0, 100);

}

//test
/////////////////////////////


///UPDATE GAME LOGIC-------

//async updating game..
setInterval(function () {
    'use strict';
    //termString = "Updating Game Logic. "; //debug test
}, 10000);

///
