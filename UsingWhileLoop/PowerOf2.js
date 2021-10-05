var prompt = require('prompt-sync')();
console.log("ENTER HOW MANY POWERS OF 2");
var n= prompt();
var exponent=0;
var currentPower=1;
while(n>exponent)
{
    currentPower=currentPower*2;
    exponent++;
    console.log(currentPower);
}
