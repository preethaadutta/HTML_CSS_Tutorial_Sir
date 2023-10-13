const changeBtn=document.querySelector(".change-bg");
const resetBtn=document.querySelector(".reset-bg");
/*
changeBtn.addEventListener("dblclick",function()//Doubleclick event
{
    document.body.style.backgroundColor="dodgerblue";
    console.log("The change button has been double clicked");
});
resetBtn.addEventListener("dblclick",function()//Doubleclick event
{
    document.body.style.backgroundColor="#fff";
    console.log("The reset button has been double clicked");
});
*/
/*
changeBtn.addEventListener("mouseover",function()//Mouseover event
{
    document.body.style.backgroundColor="dodgerblue";
    console.log("The change button has been mouse over");
});
resetBtn.addEventListener("mouseout",function()//Mouseout event
{
    document.body.style.backgroundColor="#fff";
    console.log("The reset button has been mouse out");
});
*/
window.addEventListener("scroll",function()//Scroll event
{
    console.log("Scroll event");
    document.body.style.backgroundColor="coral";
    document.body.style.color="white";
    document.body.style.lineHeight="2.1";
});