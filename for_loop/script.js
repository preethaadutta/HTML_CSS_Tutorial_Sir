/*
Syntax:
for(initialization;test_condition;repetition)
{
    body of for loop
}
*/
/*
//Example1
let i=0;
for(let i=0;i<5;i++)
{
    console.log(i);
}
*/

/*
(i=0) initially i is 0 that means that it executes once upon entering the loop.
(i<5) It checked before every loop iteration, if false the loop SVGTextPositioningElement.
*/
/*
//global and local variable
let i=0;//i is global variable so global scope
for(let i=0;i<5;i++)//i is local variable so local scope
{
    console.log(i);//5
}
console.log(i);//0
*/
/*
//skipping parts inside for loop
//We can omit the beginning or start mode inside the for loop, if we don't need to do anything at the loop start.
let i=0;
for(;i<5;i++)
{
    console.log(i);
}
*/
/*
//skipping parts inside for loop
//We can omit the beginning or start and end part inside the for loop, if we don't need to do anything at the loop start.
let i=0;
for(;i<5;)
{
    console.log(i);
    i++
}
*/
/*
//If we remove everything, then that will be infinite loop
for(;;)
{

}
//inside the for loop we need to specify ; or otherwise it'll give syntax error.
*/
/*
//print in reverse order
for(let number=11;number>=0;number--)
{
    console.log(`Number is:${number}`);
}
*/
/*
//print even-odd
for(let i=1;i<=0;i++)
{
    if(i%2==0)
    {
        console.log(`Even Number:${i}`);
    }
    else
    {
        console.log(`Odd Number:${i}`);
    }
}
*/
/*
//continue statement will skip the step
for(let i=0;i<10;i++)
{
    if(i%2==0)
    {
        continue;
    }
    else
    {
        console.log(`Odd Number:${i}`);
    }
}
*/
