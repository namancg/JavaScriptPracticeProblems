let a=473;
let b=334;
let c=707;
let d=302;
let e=938;

if(a>b && a>c && a>d && a>e)
{
    console.log("A IS GREATER");
}
else if(b>c && b>d && b>e && b>a)
{
    console.log("B IS GREATER");
}
else if (c>d && c>e && c>b && c>a)
{
    console.log("C IS GREATER");
}
else if (d>e && d>a && d>b && d>c)
{
    console.log("D IS GREATER");
}
else
{
    console.log("E IS GREATER");
}