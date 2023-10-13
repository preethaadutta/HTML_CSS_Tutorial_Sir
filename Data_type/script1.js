/*
//typeof operator
//in javascript we can use typeof operator to find the type of data of a JavaScript variable.
let name1="Rajat";
console.log(name1);
console.log(typeof name1);

let number1=35;
console.log(number1);
console.log(typeof number1);

let number2=55.45;
console.log(number2);
console.log(typeof number2);

let learning_js=true;
console.log(learning_js);
console.log(typeof learning_js);

let numbers=[22,33,44,55];//it's an array in javascript
console.log(numbers);
console.log(typeof numbers);//object
//javascript is Object oriented language and dynamically typed language means no need to specify datatype of variable

let a;
console.log(a);
console.log(typeof a);//undefined 
//undefined is also a datatype

let age=null;//if we want to keep any variable empty then null
console.log(age);
console.log(typeof age);//object 
//object is also a datatype
*/

/*
let firstName="Rahul";
let lastName="Kumar";
let fullName=firstName + " " + lastName;
console.log(fullName);
console.log(typeof "Krian");
console.log(typeof 88);
console.log(typeof false);
*/
/*
//console object:-console object in javascript gives access to the debugging console of the browser. There are some methods avaiable in console object in javascript: 
//log(), is a method of console object, which is used to print the output to the console
console.log(77);
console.log("Javascript");
console.log(undefined);
console.log(true);
console.log([5,6,7,8]);
//error() method in console object is used to show error messages in console of the browser
console.error("Virus Alert");
//warn() method in console object is used to show warning messages in console of the browser
console.warn("Warning");
//clear() method in console object is used to clear the console of the browser
console.clear();
//table() method in console object is used to clear the console of the browser
console.table({Name:"Rahul", Age:35});
*/
//group() and groupEnd() method in console object is used to group contents.
console.group("using group method");
console.warn("Warning");
console.log("log method");
console.error("Error message");
console.groupEnd("using groupEnd method");
