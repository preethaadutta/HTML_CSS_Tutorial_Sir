//Function
/*
syntax: 
function functionName()
{
    function body;
}
function calling;
*/
/*
function showMessage()
{
    console.log("Hi, I'm learning JavaScript.");
}
showMessage();//calling the function
showMessage();
*/
/*
let username="Rahul";
function showMessage()
{
    let message=`Hello ${username}`;
    username="Rakesh";
    console.log(message);
    message=`Hello ${username}`;
    console.log(message);
}
console.log(username);
showMessage();
console.log(username);
*/
/*
function showMessage(color1,color2,color3,color4)//color1,color2,color3,color4 parameters
{
    let colors=`${color1} ${color2} ${color3} ${color4}`;
    console.log(colors);
}
showMessage("Green","Red","Blue","Violet");//"Green","Red","Blue","Violet" arguments
showMessage("Coral","pink","Black","purple");
*/
/*
function colors(color1, color2="Green")
{
    let colors=`${color1} ${color2}`;
    console.log(colors);
}
colors("Blue");
*/
/*
function colors(color1, color2="Green")
{
    let colors=`${color1} ${color2}`;
    console.log(colors);
}
colors("Red","White");
*/
/*
function add(x,y)
{
    let result=x+y;
    console.log(`The addition of two numbers:${result}`);
}
function sub(x,y)
{
    let result=x-y;
    console.log(`The substraction of two numbers:${result}`);
}
function mul(x,y)
{
    let result=x*y;
    console.log(`The multiplication of two numbers:${result}`);
}
function div(x,y)
{
    let result=x/y;
    console.log(`The division of two numbers:${result}`);
}
add(100,200);
sub(500,200);
mul(10,20);
div(100,2);
*/
/*
//return statement
//The return statement is used to return a value to a function call. If nothing is returned, then function returns an undefined value.
function add(x,y)
{
    let result=x+y;
    return result;//return x+y;//same
}
function sub(x,y)
{
    let result=x-y;
    return result;//return x-y;
}
function mul(x,y)
{
    let result=x*y;
    return result;//return x*y;
}
function div(x,y)
{
    let result=x/y;
    return result;//return x/y;
}
let addition=add(100,200);
console.log(`The addition of two numbers:${addition}`);
let substraction=sub(500,200);
console.log(`The substraction of two numbers:${substraction}`);
let multiplication=mul(10,20);
console.log(`The multiplication of two numbers:${multiplication}`);
let division=div(100,2);
console.log(`The division of two numbers:${division}`);
*/
/*
//function expression:functions can also be defined as expressions.
let addition=function add(x,y)
{
    return x+y;
}
console.log(addition(5,4));
let substraction=function sub(x,y)
{
    return x-y;
}
console.log(substraction(5,4));
let multiplication=function mul(x,y)
{
    return x*y;
}
console.log(multiplication(5,4));
let division=function div(x,y)
{
    return x/y;
}
console.log(division(4,2));
*/
/*
//square of a number
let sq=function sq(x)
{
    return x*x;
}
console.log(sq(3));
let result=sq(4);
console.log(result);
*/
/*
let check_Score=function check_Score(currentScore,passingScore)
{
    if(currentScore>=passingScore)
    {
        return "Passed";
    }
    else
    {
        return "Failed";
    }
}
let firstScore=check_Score(90,55);
console.log(`The result is:${firstScore}`);
let secondScore=check_Score(15,55);
console.log(`The result is:${secondScore}`);
*/
/*
let movie_Performance=function moviePerf(movieName, boxOffice)
{
    return `The ${movieName} has grossed ${boxOffice} billion`;
}
let first_movie_Performance=movie_Performance("Jurrasic Park", 1.8);
console.log(first_movie_Performance);
let second_movie_Performance=movie_Performance("Inception", 2.3);
console.log(second_movie_Performance);
*/
/*
//function can also be passed as values
function add(x,y)
{
    return x+y;
}
let substraction=function sub(x,y)
{
    return x-y;
}
function mul(x,y)
{
    return x*y;
}
function div(x,y)
{
    return x/y;
}
let arithmetic_operators=[add,substraction,mul,div];
//for of loop is used to iterate over any object like array, string etc.
for (let func of arithmetic_operators)
{
    let result=func(20,10);
    console.log(`The arithmetic operation:${result}`);
}
*/
/*
//function accepts another function as an argument: Here this function called and taking as an argument as a function, here the function is shout and cry. So indirectly we are calling shout() and cry() function 2 times using call_function()
function call_function(func)
{
    console.log(func); //for checking which function it's taking
    func();
    func();
}
function shout()
{
    console.log("Speak loudly");
}
function cry()
{
    console.log("Crying...");
}
call_function(shout);
call_function(cry);
*/
/*
function callTimes(fnc,number)
{
    for(let i=1;i<=number;i++)
    {
        fnc();
    }
}
function smile()
{
    console.log("Smiling");
}
function happy()
{
    console.log("Happy");
}
callTimes(smile,5);
callTimes(happy,3);
*/
/*
function pickOne(fnc1,fnc2)
{
    //random() will give values from 0 to 1 as output//in game development broadly used
    let random=Math.random();
    if(random<0.5)
    {
        fnc1();
    }
    else
    {
        fnc2();
    }
}
function smile()
{
    console.log("Smiling...");
}
function happy()
{
    console.log("Happy...");
}
pickOne(smile,happy);
*/
/*
//Returning multiple values from a function using an array
function names()
{
    let name1="Rohit";
    let name2="Ronit";
    let name3="Rogit";
    let name4="Roait";
    let name5="Rovit";
    //returning as an array
    return [name1,name2,name3,name4,name5];
}
let name_list=names();
console.log(`List of names:${name_list}`);
*/
/*
function names(n1,n2,n3,n4,n5)
{
    let name1=n1;
    let name2=n2;
    let name3=n3;
    let name4=n4;
    let name5=n5;
    //returning as an array
    return [name1,name2,name3,name4,name5];
}
let name_list1=names("Rohit","Robut","Seema","Rajat","Koli");
console.log(`List of names:${name_list1}`);
*/
/*
//function returns a function
function multiplyBy(num)
{
    return function n(n1)
    {
        return n1*num;
    }
}
let triple=multiplyBy(3);
console.log(triple);
console.log(triple(4));//3*4=12
console.log(triple(5));//3*5
console.log(triple(6));//3*6
*/
/*
function makeBetweenFunc(x,y)
{
    return function m(num)//here m is the function name
    {
        return num>=x && num<=y;
    }
}

let range1=makeBetweenFunc(0,18);
console.log(range1(10));//true
console.log(range1(-10));//false
let isNineties=makeBetweenFunc(1990,1999);
console.log(isNineties(1994));
console.log(isNineties(2020));
*/
/*
//anonymous function: the function which has no name that is called anonymous function. this function has no name between function keyword and paranthesis()
let func=function ()
{
    console.log("anonymous function");
}
func();//calling the function by function expression
*/
/*
//a function that is passed as argument to another function and get involved in that another function
let callback1=function(name,age)
{
    console.log(`Callback 1: Name is ${name} and age is ${age}`);
}
let callback2=function(name,age)
{
    console.log(`Callback 2: Name is ${name} and age is ${age}`);
}
function MainFunction(name,age,myFunction)
{
    name="Mr"+name;
    age=age+1;
    myFunction(name,age);//calls callback function
}
MainFunction("Rahul",21,)
*/
/*
//arguments:- arguments keyword represents the list of arguments received in the current function, we can access each argument value by using index,arguments[0],arguments[1],....arguments[N].
let shoppingBill=function()
{
    let sum=0;
    for(let i=0;i<arguments.length;i++)
    {
        sum=sum+arguments[i];
    }
    return sum;
}
*/
/*
//function with no argument and return
function frontEndDev()
{
    console.log("Front end Development");
    javaScript();
}
function javaScript()
{
    console.log("JavaScript");
    css();
}
function css()
{
    console.log("CSS");
    html();
}
function html()
{
    console.log("HTML");
}
frontEndDev();
*/
/*
//pure functions don't modify the arguments and it returns identical return value to identical arguments. It does not access any external values, code of pure function depends on the arguments.
let getCube=function (a)
{
    let cube=a*a*a;
    return cube;
}
console.log(getCube(5));
console.log(getCube(3));
*/
/*
let isValidLogin=function(username,password)
{
    if(username ==="admin" && password ==="1234")
    {
        return true;
    }
    else
    {
        return false;
    }
}
console.log(isValidLogin("system","password"));
console.log(isValidLogin("admin","1234"));
*/
/*
//recursion:- recursion is a technique in programming language like javaScript, which a function calls itself repeatedly untill a certain condition is met. It can be used to solve problems that can be broken into smaller steps, which is repeatable steps.
function countDown(n)
{
    if(n==0)
    {
        console.log("Its zero");
        return;
    }
    console.log(n);
    countDown(n-1);
}
countDown(8);
*/
/*
let factorial=function (n)
{
    if(n==1)
    {
        return 1;
    }
    else
    {
        return factorial(n-1)*n;
    }
}
console.log(factorial(5));
*/
/*
//currying is a technique of converting a function that takes multiple arguments into sequence of nested functions that each take a single argument.
//Advantage: It simplifies the larger code into smaller functions that performs each smaller tasks.
let multiply=function (a) //first function
{
    return function(b) //second function
    {
        let result1=a*b;
        return function(c)
        {
            let result2=result1*c;
            return result2;
        };
    };
};
let fun2=
*/
/*
let logMessage=function(receiver)
{
    let result1=`@${receiver}`;
    return function(message)
    {
        let result2=`${result1} ${message}`;
        return function(hours,minutes,timePeriod)
        {
            let result3=`${result2} at ${hours} ${minutes} ${timePeriod}`;
            return function(sender)
            {
                let result4=`${result3} - from ${sender}`;
                return result4;
            };
        };
    };
};
console.log(logMessage("Rahul")("Hi ")(11, 30, "am")("Rajat"));
*/
/*
//setTimeout() function is used to execute a function
function hello()//hello() is a callback function
{
    console.log("Hello JavaScript!");
}
setTimeout(hello, 3000);//3000miliseconds=3 seconds so  after 3seconds Hello JavaScript! will be printed
*/
/*
setTimeout(function ()//anonymous function
           {
                console.log("Hello JavaScript!");
           }, 
           2000*2
           );//4000miliseconds=4 seconds so  after 4seconds Hello JavaScript! will be printed
*/
/*
//setInterval() function 
function callback()
{
    console.log("Hello");
}
let myInterval=setInterval(callback, 4000);
setTimeout(function ()
{
    clearInterval(myInterval);
},20*1000
);
*/
/*
//IIFE(Immediately Invoked Function Expression):-If we want to create a function that will execute immediately after the declaration we can use anonymous function.
//example1
(
    function ()
    {
        console.log("Immediately Invoked Function Expression");
    }
)();
*/
/*
//example2
(
    function (x,y)
    {
        let result=x+y;
        console.log(result);
    }
)(12,12);
*/
/*
//example3
let myFunc=function (v)
{
    console.log(`Your value is ${v}`);
}
myFunc
(
    //IIFE
    {
        function (n)
        {
            return n*n;
        }
    }(15)
);
*/