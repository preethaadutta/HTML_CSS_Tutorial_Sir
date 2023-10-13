const textInput=document.querySelector('input[type="text"]');
/*
textInput.addEventListener('keydown',function()//Keypress event when any key is pressed
{
    console.log("You pressed a key");
});
textInput.addEventListener('keyup',function()//Keypress event when any key is released
{
    console.log("You released a key");
});
*/
textInput.addEventListener("click",function(e)//e means event object itself
//we are passing event object
{
    console.log(e);
    console.log(e.target);//the element that triggered the event
    console.log(e.target.value);
    console.log(e.clientX);
    console.log(e.clientY);
});