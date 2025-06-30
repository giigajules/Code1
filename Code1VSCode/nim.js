"use strict";
// declare variables player & a,b,c,d
// use prompt to fill a,b,c,d
// if time, check validity of numbers
var nim;
(function (nim) {
    let player = 0;
    let playerName;
    let a;
    let b;
    let c;
    let d;
    let doonce = 0;
    function fetch() {
        a = parseInt(prompt("How many items should be in row A?", "1") || "1", 10);
        b = parseInt(prompt("How many items should be in row B?", "1") || "1", 10);
        b = parseInt(prompt("How many items should be in row C?", "1") || "1", 10);
        d = parseInt(prompt("How many items should be in row D?", "1") || "1", 10);
        doonce = 1;
    }
    //display state: player, rows with amount
    function displayState() {
        console.log("Row 1:", "O".repeat(a));
        console.log("Row 2:", "O".repeat(b));
        console.log("Row 3:", "O".repeat(c));
        console.log("Row 4:", "O".repeat(d));
    }
    function getPlayer() {
        switch (player) {
            case 0:
                playerName = "Player 1";
                break;
            case 1:
                playerName = "Player 2";
                break;
        }
    }
    //prompt for row & amount
    function turn() {
        let row = parseInt(prompt(playerName + ": Choose a row.", "1") || "1", 10);
        let count = parseInt(prompt(playerName + ": Choose how many Os you want to remove.", "1") || "1", 10);
        switch (row) {
            case 1:
                a = a - count;
                break;
            case 2:
                b = b - count;
                break;
            case 3:
                c = c - count;
                break;
            case 4:
                d = d - count;
                break;
        }
    }
    function switchPlayer() {
        if (player == 0) {
            player = 1;
        }
        //else if (player == 5) {
        //console.log("Nein");
        //}
        else {
            player = 0;
        }
    }
    //win=checkWin()
    function checkWin() {
        if (a + b + c + d == 1) {
            return true;
        }
        return false;
    }
    //play function
    function play() {
        if (doonce == 0) {
            fetch();
        }
        displayState();
        getPlayer();
        turn();
        switchPlayer();
        let won = checkWin();
        if (won == false) {
            play();
        }
        else {
            console.log(playerName, "won!");
        }
    }
    play;
})(nim || (nim = {}));
//# sourceMappingURL=nim.js.map