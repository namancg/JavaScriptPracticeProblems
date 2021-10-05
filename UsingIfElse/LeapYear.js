let year = 1996;
if (((year % 4 == 0) && (year % 100!= 0)) || (year%400 == 0))
{
    console.log(year+"IS A LEAP YEAR");
}
else 
console.log(year+"IS NOT A LEAP YEAR");