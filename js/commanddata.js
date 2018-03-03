/*eslint-env browser*/
var interacting = "nothing";

//Player Text Commands BASIC---- command function.
function commands(iText) { //checks the input field
    'use strict';
    switch (iText) {
        case "help":
            termString = "You asked for help with a command! Wow!";
            inp_field.value = '';
            break;

            //walking
        case "up":
            termString = "You walk North.";
            inp_field.value = '';
            break;

        case "down":
            termString = "You walk South.";
            inp_field.value = '';
            break;

        case "update": //test input
            colortoWriter("updating", "green");
            updateStats();
            inp_field.value = '';
            break;
    }

    if (iText === "left") {
        termString = "You walk West.";
        inp_field.value = '';
    }

    if (iText === "right") {
        termString = "You walk East.";
        inp_field.value = '';
    }

    // interact commands
    if (iText === "interacting") {
        colortoWriter("I am interacting with " + interacting, "yellow");
        inp_field.value = '';

    }
    if (iText === "interact " + ranRoom.obj) {
        interacting = ranRoom.obj;
        colortoWriter("The " + interacting + " Glows...", "yellow");
        inp_field.value = '';

    }

    //senses
    if (iText === "smell") {
        termString = ranRoom.smell;
        inp_field.value = '';
    }
    if (iText === "look") {
        colortoWriter("You see a ", "white");
        colortoWriter(ranRoom.obj, "yellow");
        colortoWriter(" nearby.", "white");
        inp_field.value = '';
    }
    //test commands
    if (iText === "fill") {
        colortoWriter("this has two spaces because I'm testing a fucking function", "blue");
        inp_field.value = '';
    }

    if (iText === "croom") {
        createRoom();
        colortoWriter("Creating Room" + ranRoom.num, "blue");
        inp_field.value = '';

    }
    if (iText === "obj") {
        colortoWriter("there is a " + ranRoom.obj, "yellow");
        inp_field.value = '';

    }

}

//