//check once
const btns=document.querySelectorAll('.btn');
btns.forEach(btn=>
{
    //currentTarget- always refers to the element to which the event handler has been attached to
    //target- identifies the element on which the event occured
    btn.addEventListener('click',function(e)//Click event
    {
        //console.log(e.currentTarget);
        //e.currentTarget.style.color='green';
        console.log('current',e.currentTarget);
        console.log('target',e.target);
    });
});