const btn=document.querySelector(".btn");
const heading=document.querySelector('h2');
function changeColor()
{
    //console.log("Button clicked");//for checking purpose that button is working or not
    let hasClass=heading.classList.contains('blue');
    if(hasClass)
    {
        heading.classList.remove('blue');
    }
    else
    {
        heading.classList.add('blue');
    }
}
btn.addEventListener("click",changeColor);