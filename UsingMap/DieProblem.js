let dieMap=new Map();
let leastNumberRolled=Number.MAX_VALUE;
let highestNumberRolled=Number.MIN_VALUE;
let leastNumberRolledCount=Number.MAX_VALUE;;
let highestNumberRolledCount=Number.MIN_VALUE;
function getDieValue(){
    return ((Math.floor(Math.random()*10))%6)+1;
}
while(!Array.from(dieMap.values()).includes(10)){
    let dieValue = getDieValue();
    if(dieMap.has(dieValue)){
        dieMap.set(dieValue, dieMap.get(dieValue)+1);
    }
    else{
        dieMap.set(dieValue, 1);
    }
}
console.log(dieMap);
for(const [key, value] of dieMap.entries()){
    if(highestNumberRolled < value){
        highestNumberRolled = value;
        highestNumberRolledCount = key;
    }
    if(leastNumberRolled > value){
        leastNumberRolled = value;
        leastNumberRolledCount = key;
    }
}
console.log("LEAST ROLLED NUMBER IS: "+leastNumberRolled+" AND COUNT :" +leastNumberRolledCount);
console.log("HIGHEST ROLLED NUMBER IS: "+highestNumberRolled+"AND COUNT :" +highestNumberRolledCount);