/*have to write
When a web page is loaded, the browser creates a Document Object Model(DOM) of the page.
The DOM is constructed as a tree of objects.
JavaScript gets all the power it needs to create dynamic HTML.
1) Javascript 
*/
/*The window object in javascript represents*/
console.log(window.location);
console.log(window.history);
console.log(window.innerHeight);
console.log(window.innerWidth);
console.log(window.document);
console.log(window.screen);
console.log(window.navigator);
console.log(window.location.href);
console.log(window.navigator.userAgent);
console.log(window.screenX);
console.log(window.screenY);


//console.log(window.setTimeout());
//console.log(window.setInterval());
//These methods allow us to execute a function after a specified time inteval, either once ('setTimeout()') or repeatedly ('setInterval()')
console.log(window.scrollX);//scrollX is property not function
//This property returns the horizontal position of the window's scrollbar
console.log(window.scrollY);//scrollX is property not function
//This property returns the vertical position of the window's scrollbar


/*
window.alert('Hello Javascript');
//alert() is a method of window object. window.alert() method is used to display a message to the user in a pop-up window.
let confirmResult=window.confirm("Do you want to exit?");
console.log(confirmResult);
//The window.confirm() method is used to display a confirm dialog to the user with Ok and cancle button.
window.print();
*/
/*
//built in methods
//window.open(url,[name of browser],[options]);
//

let newWindow=window.open("https://www.google.com","Google","height=400,width=400");
setTimeout(function()
{
    newWindow.close();
},6000);//6000miliseconds=6seconds
setTimeout(function()
{
    window.scrollBy(0,100);
},2000);//2000miliseconds=2seconds
*/
//document object
/*
The document
*/
console.log(document.body);//when I'm taking mouse on body tag in console the body part of the html document is selected
