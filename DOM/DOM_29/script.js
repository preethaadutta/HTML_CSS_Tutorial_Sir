//have to write
const parent=document.querySelector("#div1");
const child=document.querySelector("#btn1");
child.addEventListener("click",function(e)
{
    //we can use e.stopPropagation() to stop the event bubbling
    e.stopPropagation();
    console.log("Button clicked");
});
parent.addEventListener("click",function()
{
    console.log("Div element clicked");
});
document.body.addEventListener("click",function()
{
    console.log("Body clicked");
});
/*
*/
