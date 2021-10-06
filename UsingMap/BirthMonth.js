let birthYearMap=new Map();
let birthYear,birthMonthMap;
birthYearMap.set(1992,new Map())
birthYearMap.set(1993,new Map())
for (let i = 1; i <= 50; i++) 
{
    let year = Math.floor(Math.random() * 10) % 2;
    if(year==0)
    {
        birthYear=1992;
    }
    else if(year==1)
    {
        birthYear=1993;  
    }
    birthMonthMap=birthYearMap.get(birthYear);
    let birthMonth = (Math.floor(Math.random() * 100) % 12)+1;
    if (birthMonthMap.has(birthMonth)) 
    {
        let sameBirthMonthArray = birthMonthMap.get(birthMonth);
        sameBirthMonthArray.push(i);
        birthMonthMap.set(birthMonth, sameBirthMonthArray);
    }
    else 
    {
        let sameBirthMonthArray = new Array();
        sameBirthMonthArray.push(i);
        birthMonthMap.set(birthMonth, sameBirthMonthArray);
    }
    birthYearMap.set(birthYear, birthMonthMap)
}
console.log("PEOPLE WITH SAME BIRTH MONTH ")
console.log(birthYearMap)