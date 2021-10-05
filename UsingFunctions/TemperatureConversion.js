var prompt = require('prompt-sync')();
let celsius;
let fahrenheit;
console.log("ENTER 1. CELSIUS TO FAHRENHEIR and 2. FAHRENHEIT TO CELSIUS");
let choice =prompt();
switch(choice){
    case "1": celciusToFahrenheit();
    break;
    case "2": fahrenheitToCelsius();
    break;

}

function celciusToFahrenheit()
{
    console.log("ENTER CELSIUS");
    celsius=prompt();
    var postConversion = (celsius * (9/5))+32;
    console.log(postConversion);
}
function fahrenheitToCelsius()
{
    console.log("ENTER FAHRENHEIT");
    fahrenheit=prompt();
    var postConversion = (fahrenheit -32)*5/9;
    console.log(postConversion);
}