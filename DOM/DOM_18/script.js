let button=document.querySelector('#btn');
console.log(button);
function display()
{
    alert('Button clicked');
}
button.addEventListener('click',display);