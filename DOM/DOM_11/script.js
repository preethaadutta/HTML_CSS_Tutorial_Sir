const first=document.getElementById('first');
const second=document.getElementById('second');
const third=document.getElementById('third');
//const classValue=first.className;
//console.log(classValue);
//adding class dynamically by js
first.classList.add('text','colors');
third.classList.add('text');
//removing class dynamically by js
third.classList.remove('text');
//checking condition
let result=third.classList.contains('text');
if(result)
{
    console.log('Text color is present');
}
else
{
    console.log('Text color is not present');//as we've removed so it is coming
}