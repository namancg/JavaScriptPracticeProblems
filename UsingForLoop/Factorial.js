var prompt = require('prompt-sync')();
console.log("ENTER A NUMBER");
const n=prompt();
if(n<0)
{
    console.log("ENTER A POSITIVE NUMBER");
}
else if (n==0)
{
    console.log("1");
}
else 
{
    let factorial = 1;
    for (i = 1; i <= n; i++) {
        factorial *= i;
        console.log(i+"*");
    }
    console.log(`The factorial of ${n} is ${factorial}.`);
}