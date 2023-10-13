/*
//Example1
let name1="Rahul";
let age=25;
let sentence="My name is "+name1+" and my age is "+age;
console.log(sentence);
*/

/*
template literal:- Template Literal use backticks(``), with this template literal we can use both double and single quotes inside a string. It also allows multiline strings. It provides an easy way to interpolate variables and expressions into strings, which is called string interpolation (${}).
*/

/*
//Example2
let name1="Rahul";
let age=25;
let sentence=`My name is ${name1} and my age is ${age}`;
console.log(sentence);
*/

//Example3
let firstName="Sam";
let lastName="Setty";
let job="developer";
let birthYear=1995;
let year=2022;
let sentence=`I'm ${firstName} ${lastName}.\nMy age is ${year-birthYear} years old.\nI'm working as a ${job}.`;
console.log(sentence);