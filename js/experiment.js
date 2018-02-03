/*eslint-env browser*/


var poop = document.getElementById("poop");
var tnum = document.getElementById("tnum");
var but1 = document.getElementById("but1");
var div1 = document.getElementById("div1");
var gnum = 1;

//input field 
var inp_field = document.getElementById("inpField");

var termText = document.getElementById("termText");
termText.textContent = "";

poop.textContent = "Bone Saw";
poop.style.color = 'white';

//TERMINAL CODE-----------
var termWriting = false; //makes sure we can't enter commands during writing.
var char_ind = 0;
var termString = "You have been met with your demise and will perish within the depths of this hellish nightmare.";


//async text writer
setInterval(function () {
    'use strict';
    termText.textContent = termText.textContent + termString.charAt(char_ind);
    char_ind += 1;
    if (char_ind >= termString.length) {
        termString = "";
        char_ind = 0;
        termWriting = false;
    } else {
        termWriting = true;
    }
}, 50);


//CHECKS FOR ENTER KEY ON INPUT
function handleKeyPress(e) {
    'use strict';
    var hitkey = e.keyCode && e.which;
    if (hitkey === 13) {
        if (termWriting === false) {
            termString = " " + inp_field.value;
            inp_field.value = '';
        }
    }
}

//start blank at specifc length
if (termText.textContent.length >= 10) {
    termText.textContent = "";
}
/////////////////////////////


///UPDATE GAME LOGIC-------

//async updating game..
setInterval(function () {
    'use strict';
    termString = "Updating Game Logic. ";
}, 10000);

///

//Player Text Commands BASIC----

//command function.
function commands(iText) { //checks the input field
    'use strict';


}



//



setInterval(function () {
    'use strict';
    if (gnum >= 10) {
        gnum = 0;
    }
    gnum += 1;
    tnum.textContent = gnum;

}, 1000);



function loadDoc() {
    'use strict';
    //poop.style.color = 'black';
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            div1.textContent = this.responseText;

        }
    };
    xhttp.open("GET", "../files/ajax.txt", true);
    xhttp.send();
}

but1.onclick = function () {
    'use strict';
    loadDoc();


};

