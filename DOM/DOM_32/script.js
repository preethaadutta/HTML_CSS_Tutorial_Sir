//have to complete
const container=document.querySelector(".container");
const btn=document.querySelector('.btn');
btn.addEventListener('click',function(e)
{
    const element=document.createElement('h1');
    element.classList.add('heading');
    element.textContent=`I am inside container`;
    container.appendChild(element);
});
