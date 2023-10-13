/*
Arrays in JavaScript is an object that represents 
*/
/*
//Example1
let fruits=["Apple","Orange","Pineapple","Mango"];
console.log(fruits);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
*/
/*
//Example2
let vegetables=[];
vegetables[0]="Potato";
vegetables[1]="Onion";
vegetables[2]="Tomato";
vegetables[3]="Cabbage";
vegetables[4]="Cauliflower";
console.log(vegetables);
vegetables[4]="Ginger";
console.log(vegetables);
*/
/*
//Example3
let mixed=['Apple',45,"Onion",undefined,null,55.66,"Tomato"];
console.log(mixed);
let food_items=mixed[0]+" "+mixed[2]+" "+mixed[6];
console.log(food_items);
*/
//Methods of array:- JavaScript, React, Angular, NodeJS, Mobile app development
/*
//toString() method is used to convert an array to a string of common seperated Values.
let fruits=["Apple","Pinneapple","Orange","Blueberry"];
console.log("converting from array to string");
let new_items=fruits.toString();
console.log(`Strings:${new_items}\nType:${typeof new_items}`);
*/
/*
//join() method is used to join all array elements into a string. So basically it behaves like toString(), but along with that we need to specify the seperator.
let fruits=["Apple","Pinneapple","Orange","Blueberry"];
console.log("converting from array to string using join() method");
let new_items=fruits.join("-");
console.log(`Strings:${new_items}\nType:${typeof new_items}`);
*/
/*
//pop() method is used to remove last array element.
//Example1
let fruits=["Apple","Pinneapple","Orange","Blueberry"];
fruits.pop();
console.log(fruits);
let removedItem=fruits.pop();
console.log(removedItem);
console.log(fruits);
*/
/*
//Example2
let fruits=["Apple","Pinneapple","Orange","Blueberry"];
let arr_length=fruits.length;//length property of an array
for(let i=1;i<=arr_length;i++)//for loop
{
    console.log(`Extracted element:${fruits.pop()}\n`);
}
*/
/*
//push() method is used to add or insert one or more elements to end of array.
let fruits=["Apple","Pinneapple","Orange","Blueberry"];
let arr_length=fruits.length;//length property of an array
fruits.push("Grapes");
fruits.push("Banana");
fruits.push("Lemon");
console.log(fruits);
*/
/*
//concat() method is used to combine or merge two or more arrays and returns a new string.
let fruits1=["Apple","Pinneapple","Orange"];
let fruits2=["Banana","Grape","Onion"];
let fruits=fruits1.concat(fruits2);
console.log(fruits);
fruits=fruits2.concat(fruits1);
console.log(fruits);
*/
/*
let fruits1=["Apple","Pinneapple","Orange"];
let fruits2=["Banana","Grape","Onion"];
let fruits3=["Peach","Golden","Blueberry"];
let fruits=fruits1.concat(fruits2,fruits3);
console.log(fruits);
let new_items=fruits1.concat("Banana","Grape","Onion","Peach","Golden","Blueberry");
console.log(new_items);
*/
/*
//splice() method returns an array by adding or removing its elements in place.
//Syntax:Array.splice(starting_index,how many items to be deleted,item1...itemN);
//example1
let numbers=[1,2,3,4,5,6,7,8,9];
let removedItem=numbers.splice(3,1,25);
console.log(`Item removed:${removedItem}\n`);
console.log(`New Item added:${numbers}\n`);
*/
/*
//example2:-removed 2 items and replaced with 2 new items
let fruits=["Apple","Pinneapple","Orange","blueberry"];
let removedItem=fruits.splice(2,2,"Lemon","Grapes");
console.log(`Item removed:${removedItem}\n`);
console.log(`New Item added:${fruits}\n`);
*/
/*
//example3:- adding elements without deleting existing elements
let fruits=["Apple","Pinneapple","Orange","blueberry"];
let removedItem=fruits.splice(1,0,"Mango","Cherry");
console.log(`Item removed:${removedItem}\n`);
console.log(`New Item added:${fruits}\n`);
*/
/*
//example4:- removing 3 items without adding any item
let fruits=["Apple","Pinneapple","Orange","blueberry"];
let removedItem=fruits.splice(1,3);
console.log(`Item removed:${removedItem}\n`);
console.log(`New Item added:${fruits}\n`);
*/
/*
//if start position is greater than the length of the array, then it does not delete anything and starts adding to the end of the array.
let fruits=["Apple","Pinneapple","Orange","blueberry"];
let removedItem=fruits.splice(6,2,"Lemon");
console.log(`Item removed:${removedItem}\n`);
console.log(`New Item added:${fruits}\n`);
*/
/*
//if start position is less than 0, then the index is counted from backwards and items all added in the last position after removing.
let fruits=["Apple","Pinneapple","Orange","blueberry"];
let removedItem=fruits.splice(-1,1,"Grapes","Lemon");
console.log(`Item removed:${removedItem}\n`);
console.log(`New Item added:${fruits}\n`);
*/
/*
//if deleteCount is omitted or is greater than the number of items left in the array, then it deletes all elements from start to end of the array
let fruits=["Apple","Pinneapple","Orange","blueberry"];
let removedItem=fruits.splice(2);
console.log(`Item removed:${removedItem}\n`);
console.log(`New Item added:${fruits}\n`);
*/
/*
//if deleteCount is negative or zero then no element will be removed
let fruits=["Apple","Pinneapple","Orange","blueberry"];
let removedItem=fruits.splice(1,-2,"Grapes","Lemon");
console.log(`Item removed:${removedItem}\n`);
console.log(`New Item added:${fruits}\n`);
*/
/*
//Slice() method returns a copy of a partion of an array into a new array object.
//syntax: arr.slice(start,end);
let numbers=[2,3,4,5,11,12,33,66];
let newArray=numbers.slice(2,5);
console.log(newArray);
*/
/*
let numbers=[2,3,4,5,11,12,33,66];
let newArray=numbers.slice(2);
console.log(newArray);
*/
/*
let numbers=[2,3,4,5,11,12,33,66];
let newArray=numbers.slice(0,-1);
console.log(newArray);//[2,3,4,5,11,12,33]
*/
/*
let numbers=[2,3,4,5,11,12,33,66];
let newArray=numbers.slice(-3);
console.log(newArray);//[12,33,66]
*/
/*
//shift() method is used to remove the first element from an array and returns that element.
let numbers=[2,3,4,5,11,12,33,66];
let first=numbers.shift();
console.log(first);
console.log(numbers);
*/
/*
//Nested array: 
let numbers=
[
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
console.log(numbers[0]);
console.log(numbers[1][1]);
console.log(numbers.shift());
console.log(numbers);
*/
/*
//unshift() method is used to add one or more elements to the beginning of the array and returns the new length of the array
let numbers=[2,3,4,5,11,12,33,66];
let result=numbers.unshift("JavaScript");
console.log(numbers);
*/
/*
let numbers=[2,3,4,5,11,12,33,66];
let result=numbers.unshift(12,22,"C++","JavaScript");
console.log(numbers);
*/
/*
//Array.of() method is used to create a new array instance from the given arguments.
let numbers=Array.of(5);[5]
console.log(numbers);
*/
/*
let numbers=Array.of(3,4,5,7);[3,4,5,7]
console.log(numbers);
*/
/*
//isArray() method is used to check that given arguments is an array or not. it returns boolean value
let value1="preethaa";
console.log(Array.isArray(value1));
let array2=[2,3,4,5,11,12,33,66];
console.log(Array.isArray(array2));
let array3=Array.of(3,4,5,7);
console.log(Array.isArray(array3));
*/
