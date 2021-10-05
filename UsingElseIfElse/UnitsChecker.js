var prompt = require('prompt-sync')();
var number = prompt("ENTER THE NUMBER");
if(number == 1) 
        console.log("UNIT");
    else if(number == 10) 
        console.log("TEN");
    else if(number == 100)
        console.log("HUNDRED");
    else if(number == 1000)
        console.log("THOUSAND");
    else if(number == 10000)
        console.log("TEN THOUSAND");
    else if(number == 100000)
        console.log("HUNDRED THOUSAND");
    else if(number == 1000000)
        console.log("MILLION");
   else
        console.log("VERY HUGE NUMBER"); 

