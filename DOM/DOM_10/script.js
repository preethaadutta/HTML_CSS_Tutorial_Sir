const first=document.querySelector('.first');
const idValue=first.getAttribute('id');
console.log(idValue);

const link=document.getElementById('link');
const showLink=link.getAttribute('href');
console.log(showLink);

const last=link.nextElementSibling;
last.setAttribute('class','first');
last.textContent='This ialso have a class of first';
