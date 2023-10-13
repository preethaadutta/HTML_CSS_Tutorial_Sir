const container=document.querySelector('#container');
const box=document.querySelector('#box');
box.addEventListener('mouseover',function()
{
    container.style.backgroundColor='red';
    box.style.backgroundColor='violet';
});
box.addEventListener('mouseout',function()
{
    container.style.backgroundColor='#eee';
    box.style.backgroundColor='#ccc';
});
/*Mouseover and mouseenter difference*/
let outer=document.getElementById("outer");
let inner=document.getElementById("inner");
outer.addEventListener("mouseover",function()
{
    console.log("mouseover on outer");
});
inner.addEventListener("mouseover",function()
{
    console.log("mouseover on inner");
});
outer.addEventListener("mouseenter",function()
{
    console.log("mouseenter on outer");
});
inner.addEventListener("mouseenter",function()
{
    console.log("mouseenter on inner");
});