var prompt = require('prompt-sync')();
console.log("ENTER TWO NUMBERS");
var value1=prompt();
var value2=prompt();
checkPalindrome(value1,value2);

function checkPalindrome(value1 , value2){
    let reverse = 0,remainder;
    while(value1 > 0){
        remainder = value1 % 10;
        reverse *= 10;
        reverse += remainder;
        value1 = Math.floor(value1/10);
    }
    if(reverse == value2) return true;
    return false;
}
console.log("FIRST NUMBER IS: "+ value1+ " AND SECOND NUMBER IS: "+ value2);
console.log("PALINDROME?: "+ checkPalindrome(value1,value2));