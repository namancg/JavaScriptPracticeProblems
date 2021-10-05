var prompt = require('prompt-sync')();
console.log("HARMONIC SERIES");
console.log("ENTER n VALUE");
var n=prompt();
let i;
let s=0.0;
for(i=1;i<=n;i++)
{
    s=s+1/i;
}
console.log(s);