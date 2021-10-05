var prompt = require('prompt-sync')();
console.log("ENTER A NUMBER FROM 0-100");
var n=prompt();
guessNumber(0,n-1);

function guessNumber(start, end)
{
if(start==end)
{
    console.log("YOUR NUMBER IS "+start);
}
const mid=(start+end)/2;
console.log("IS YOUR NUMBER BETWEEN "+start+"& "+mid+"THEN PRESS 1");
console.log("IS YOUR NUMBER BETWEEN "+(mid+1)+"& "+end+"THEN PRESS 0");
var temp=prompt();
if(temp == 1)
{
    guessNumber(start,mid);
}
else
{
    guessNumber(mid+1,end);
}
}