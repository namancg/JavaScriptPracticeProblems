var prompt = require('prompt-sync')();
console.log("PRIME NUMBER");
console.log("ENTER THE STARTING NUMBER");
var starting= prompt();
console.log("ENTER THE ENDING NUMBER");
var ending= prompt();
for(let i=starting;i<=ending;i++)
{
let flag=0;
for(let j=2;j<i;j++)
{
    if(i%j==0)
    flag=1;
    break;
}
if(i>1 && flag==0)
{
    console.log(i);
}
}

