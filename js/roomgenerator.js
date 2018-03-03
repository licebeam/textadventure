/*eslint-env browser*/

var roomnum = 0; //starting room
roomnum = 0;
var north = 1;
var south = 2;
var west = 3;
var east = 4;

class room {
    constuctor(en, exit, obj, num, smell) {
        this.en = en;
        this.exit = exit;
        this.obj = obj;
        this.num = num;
        this.smell = smell;
    }
}

var ranRoom = new room();

function createRoom() {
    roomnum++;
    ranRoom.en = "south";
    ranRoom.obj = "Stone of Jordon";
    ranRoom.num = roomnum;
    ranRoom.smell = "The Sanctity of this place has been fouled by evil..";
}
