/*selecting methods-getting HTML elements by their class*/
const heading=document.getElementsByClassName("title");
console.log(heading);
/*have to write
This code uses the getElementsByClassName() method of the document object in javascript to retrieve an HTML element with the class attribute of title. */

/*selecting methods-getting HTML elements by their id*/
let dogImg=document.getElementsByID("dog-img");
console.log(dogImg);
/*have to write
This 
*/

/*selecting methods-getting all HTML elements with the given same class name*/
let items=document.querySelectorAll(".item");
console.log(items);
/*have to write
*/

/*
selecting methods-getting single HTML element with the given id name
using querySelector() method we can select id also and class also
to select class querySelector(".classname");
to select id querySelector("#classname");
*/
let dogImg1=document.querySelector("#dog-img");
console.log(dogImg1);
/*have to write
*/
