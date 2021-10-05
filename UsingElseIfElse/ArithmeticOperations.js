var prompt = require('prompt-sync')();
var a= prompt("ENTER THE VALUE OF A");
var b= prompt("ENTER THE VALUE OF B");
var c= prompt("ENTER THE VALUE OF C");
expression1=a+b*c;
expression2=a%b+c;
expression3=c+a/b;
expression4=a*b+c;
if(expression1>expression2 && expression1>expression3&&expression1>expression4)
{
    console.log("EXPRESSION 1 IS MAXIUMUM")
}
else if(expression2>expression3 && expression2>expression4 && expression2>> expression1)
{
    console.log("EXPERSSION 2 IS MAXIMUM");    
}
else if(expression3>expression4 && expression3>expression2 && expression3>expression1)
{
    console.log("EXPRESSION 3 IS MAXIMUM");
}   
else
console.log("EXPRESSION 4 IS MAXIMUM");

if(expression1<expression2 && expression1<expression3&&expression1<expression4)
{
    console.log("EXPRESSION 1 IS MINIMUM")
}
else if(expression2<expression3 && expression2<expression4 && expression2<expression1)
{
    console.log("EXPERSSION 2 IS MINIMUM");    
}
else if(expression3<expression4 && expression3<expression2 && expression3<expression1)
{
    console.log("EXPRESSION 3 IS MINIMUM");
}   
else
console.log("EXPRESSION 4 IS MINIMUM");



  
