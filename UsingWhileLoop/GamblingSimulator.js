const INITIAL_AMOUNT = 100;
const BET_PRICE = 1;
const MAX_AMOUNT = 200;
const MIN_AMOUNT = 0;
const GAME_WON = 1;
const GAME_LOST = 0;
function getResult(){
    return Math.floor(Math.random() * 10) %2;
}

let currentAmount = INITIAL_AMOUNT;
let count = 0;
let numberOfWins = 0;
let result;
while(currentAmount < MAX_AMOUNT && currentAmount > MIN_AMOUNT){
    result  = getResult();
    count++;
    if(result == GAME_WON){
        numberOfWins++;
        currentAmount += BET_PRICE;
    }
    else{
        currentAmount -= BET_PRICE;
    }
}
console.log("CURRENT PRICE: "+currentAmount+" WINS: "+ numberOfWins+" TIMES THE GAME WAS PLAYED: "+ count);