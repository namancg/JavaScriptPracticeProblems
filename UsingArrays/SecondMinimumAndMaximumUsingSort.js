function randomNumberGenerator(){
    return Math.round(Math.random() * 999);
}
let numberArray = new Array();
for (let i = 0 ; i < 10 ; i++){
    numberArray.push(randomNumberGenerator());
}
numberArray.sort();
console.log("THE SORTED ARRAY IS:");
for (let i = 0 ; i < 10 ; i++){
    console.log(numberArray[i]);
}
console.log("THE SECOND SMALLEST IS:"+numberArray[1]+" AND THE SECOND LARGEST IS: "+numberArray[numberArray.length-2])