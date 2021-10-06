let HEAD = 1;
let TAIL = 2;

function tossCoin(){
    return Math.floor(Math.random() * 10) % 2;
}

let tailWins = 0;
let headWins = 0;

while(tailWins<11 || headWins < 11){
    coinFace = tossCoin();
    if(coinFace == HEAD){
        console.log("Heads");
        headWins++;
    }
    else{
        console.log("Tails");
        tailWins++;
    }
}
if(headWins == 11) console.log("HEAD WON 11 TIMES");
else console.log("TAIL WON 11 TIMES");