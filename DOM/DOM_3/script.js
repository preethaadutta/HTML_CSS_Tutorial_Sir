/*
const result=document.querySelector("#result");
console.log(result);
result.style.backgroundColor="orange";
result.style.color="blue";
*/
/*
const item1=document.querySelector(".veg");
console.log(item1);
const item2=document.querySelector("li:last-child");
console.log(item2);
*/
const li_items=document.querySelectorAll(".veg");
li_items.forEach(function(item)
{
    //console.log(item);//this will return each list item
    item.getElementsByClassName.color="green";
});