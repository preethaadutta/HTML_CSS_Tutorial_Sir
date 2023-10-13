/*
//if statement checking for single condition
//Example1
let x=25;
if(x>10)
{
    console.log("Value of x is greater than 10");
}
*/
/*
//if-else statement checking for two condition
//Example1
let x=5;
if(x>10)
{
    console.log("Value of x is greater than 10");
}
else
{
    console.log("Value of x is less than 10");
}
*/
/*
//Even-odd
let x=24;
if(x%2==0)
{
    console.log("Even number");
}
else
{
    console.log("Odd number");
}
*/
//if else if statement(ladder if-else)
let marks=76;
if(marks>85 && marks<=100)
{
    console.log("Congrats! you scored Grade A");
}
else if(marks>60 && marks<=85)
{
    console.log("you scored Grade B+");
}
else if(marks>40 && marks<=60)
{
    console.log("you scored Grade B");
}
else if(marks>35 && marks<=40)
{
    console.log("you scored Grade C");
}
else
{
    console.log("Sorry you've failed this time");
}