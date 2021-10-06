let array = new Array();
const MAX_LIMIT=100;
for(let i=0;i<=MAX_LIMIT;i++)
{
    if(i>9)
    {
        let unitDigit=i%10;
        let tensDigit=parseInt(i/10);
        if(unitDigit==tensDigit)
        {
            array.push(i)
        }    
    }
    
}
console.log(array)