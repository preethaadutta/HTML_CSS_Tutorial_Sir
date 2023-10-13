//have to complete
const button=document.querySelector('button');
const ul=document.querySelector('ul');
button.addEventListener('click',()=>
{
    const li=document.createElement('li');
    li.textContent='Adding elements';
    ul.appendChild(li);
    //ul.prepend(li);//append before
});

const items=document.querySelectorAll('li');
/*
items.forEach(item=>
{
    item.addEventListener('click',e=>
    {
        //e.target.style.textDecoration='line-through';
        e.target.remove();//removing by clicking on item
    });
});
*/
ul.addEventListener("click",e=>
{
    console.log('event in ul');

});