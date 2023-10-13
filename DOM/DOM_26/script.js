//check once
const heading=document.querySelector('h1');
const btn=document.querySelector('.btn');
const link=document.getElementById('link');
heading.addEventListener('click',function(e)//Click event
{
    console.log(e.currentTarget);
});
btn.addEventListener('click',function(e)//Click event
{
    console.log(e.currentTarget);
    e.currentTarget.classList.add('blue');
    console.log(e.type);
});
