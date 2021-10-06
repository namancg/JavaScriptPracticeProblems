let numberArray = new Array();
let largestNumber = 100;
let secondLargestNumber = 100;
let smallestNumber = 999;
let secondSmallestNumber = 999;

for(let i=0;i<10;i++)
{
    let number=Math.floor(Math.random()*(900)+100);
    numberArray.push(number);

    if(number<smallestNumber)
    {
        smallestNumber=number;
    }
    else if(number>largestNumber)
    {
        largestNumber=number;
    }

}
console.log(numberArray)

for(let i=0;i<10;i++)
{
    let number=numberArray.pop();
    if(number>smallestNumber && number<secondSmallestNumber)
    {
        secondSmallestNumber=number;
    }
    else if(number<largestNumber && number>secondLargestNumber)
    {
        secondLargestNumber=number;
    }

}

console.log("SECOND MINIMUM NUMBER IS: "+secondSmallestNumber)
console.log("SECOND MAXIMUM NUMBER IS: "+secondLargestNumber)