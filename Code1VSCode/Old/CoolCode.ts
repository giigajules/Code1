console.log("Hello, World! You sucker.");
let v: number = 1;
v = v + 1;
console.log(v);

namespace fuckOff{
    let a: number = 10;

    for (let i = 0; i <10; i++) {
        //let a = "Fuck off"
        console.log(a);
    }
    console.log(a);

    if (a == 1){
        console.log("Ja, a ist 1 du Sherlock.");
    }
    else if (a == 10){
        console.log("Auch dies ist eine valide Möglichkeit.");
    }
    else{
        console.log("a ist nicht 1, das ist ja mal was Neues!");
    }

    let c: number = 2;
    
    switch(c){
        case 1:
            console.log("c is 1.");
            break;
        case 2:
            console.log("c is 2.")
        case 3:
            console.log("c is 3.")
            break;
    }
}