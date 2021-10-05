var prompt = require('prompt-sync')();
var number = prompt("ENTER THE NUMBER");
switch(number)
{
    case "1": console.log("UNIT");
    break;
    case "10":console.log("TEN");
    break;
    case "100":console.log("HUNDRED");
    break;
    case "1000":console.log("THOUSAND");
    break;
    case "10000":console.log("TEN THOUSAND");
    break;
    case "100000": console.log("HUNDRED THOUSAND");
    break;
    case "10000000":console.log("MILLION");
    break;
    default: console.log("VERY HUGE NUMBER"); 
}
