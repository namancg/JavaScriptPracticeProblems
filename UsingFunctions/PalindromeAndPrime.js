var prompt = require('prompt-sync')();
console.log("ENTER THE NUMBER");
var number=prompt();
if(!isPrime(number)){
    console.log("IT IS NOT A PRIME NUMBER");
    return;
}
let palindrome = isPalindrome(number);
console.log("PALINDROME IS: "+palindrome);
if(isPrime(palindrome))
{
    console.log("IT IS A PRIME NUMBER AND A PLAINDROME TOO");
}
else
{
    console.log("IT IS NOT A PRIME PALINDROME");
}
function isPrime(number){
    for(let i=2;i<number/2;i++){
        if(number % i == 0) return false;
    }
    return true;
}

function isPalindrome(number){
    let reverse  =0, remainder;
    while(number > 0){
        remainder = number % 10;
        reverse *= 10;
        reverse += remainder;
        number = Math.floor(number/10);
    }
    return reverse;
}
