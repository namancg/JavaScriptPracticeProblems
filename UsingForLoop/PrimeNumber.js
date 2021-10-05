var prompt = require('prompt-sync')();
console.log("PRIME NUMBER");
console.log("ENTER THE NUMBER");
var n= prompt();
let isPrime = true;
if(n==1)
{
    console.log("ENTER A VALUE MORE THAN 1");
}
else if(n>1)
{
    for(let i=2;i<n;i++)
    {
        if(n%i==0)
        {
            isPrime=false;
            break;
        }
    }
}
if(isPrime){
console.log("IS A PRIME NUMBER");
}
else {
    console.log("IS A NOT PRIME NUMBER");
}