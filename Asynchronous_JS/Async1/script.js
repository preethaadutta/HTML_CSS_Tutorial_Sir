/*

*/
console.log("Hello JS");//synchronous JS because executing synchronously 
setTimeout(function(){
    console.log("Asynchronous 2");
},6000);
console.log("Hello React");//synchronous JS because executing synchronously
setTimeout(function(){
    console.log("Asynchronous 1");
},3000);
console.log("Hello Angular");//synchronous JS because executing synchronously