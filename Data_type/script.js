//single line comment
/*multiline comments*/
/*variables:- a variable name can be declared using var, let and const in JavaScript.
Rules:-
1) Variable names are case-sensitive, which means name and Name are different variables.
2) Variable names can contain only letters, underscore, numbers, or dollar signs and it can't contain spaces.
3) Variable names can begin with letter, dollar sign or underscore.
4) Variable names can't contain any keywords(reserved words of JavaScript).
5) Variable names always use camel case. Ex: FullName.
*/
//console application is to check the output
//variable declaration using var
var a =25;
console.log(a);
var _value=12;
console.log(_value);
var $x=55;
console.log($x);
//invalid
//var 1a=35;
//var * er=55;
//var n ame="JavaScript";

//using var
//declaration of variable
var name1="Rahul";
console.log(name1);
//reassignment of variable
name1="Kiran";
console.log(name1);
//redeclaration of same variable name
var name1="Rajat";
console.log(name1);

//using let(let is a part of ES6(Ecma Script 2015 or EcmaScript 6) and ES6 is advanced javascript)
let name2="Rahul";
console.log(name2);
//reassignment of variable
name2="Kiran";
console.log(name2);
//redeclaration of same variable name
//let name2="Rajat";//will givce error
//console.log(name2);

//using const(constant in javascript)
const name3=44;
console.log(name3);
//reassignment of variable
//name3=55;//will givce error
//console.log(name3);
//redeclaration of same variable name
//let name2="Rajat";//will givce error
//console.log(name2);

