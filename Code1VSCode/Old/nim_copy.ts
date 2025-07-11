// declare variables player & a,b,c,d
// use prompt to fill a,b,c,d
// if time, check validity of numbers
namespace debug {
    let player:number = 0
    let playerName:string;
    let rows;
    let doonce:number = 0;

    function fetch(): void {
        rows = prompt("Enter lengths for the four rows, divided by a comma.", "1,1,1,1")!.split(",").map(Number);
        var [a, b, c, d] = rows;
        console.log(rows);
        doonce = 1;
    }
    
    //display state: player, rows with amount
    function displayState(): void{
        console.log("Row 1:", "O".repeat(a));
        console.log("Row 2:", "O".repeat(b));
        console.log("Row 3:", "O".repeat(c));
        console.log("Row 4:", "O".repeat(d));
    }

    function getPlayer(): void{
        switch(player) {
            case 0:
                playerName = "Player 1"
                break;
            case 1:
                playerName = "Player 2"
                break;
        }
    }

    //prompt for row & amount
    function turn(): void{
        let row:number = parseInt(prompt(playerName + ": Choose a row.", "1") || "1", 10);
        let count:number = parseInt(prompt(playerName + ": Choose how many Os you want to remove.", "1") || "1", 10);
        switch(row) {
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

    function switchPlayer(): void {
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
    function checkWin(): boolean {
        if (a+b+c+d == 1) {
            return true;
        }
        return false;
    }

     //play function
    function play(): void {
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
            console.log(playerName, "won!")
        }
    }

    play();
}
