const para=document.querySelector('p');
para.innerText="Preethaa learning JS";
const paras=document.querySelectorAll('p');
paras.forEach
(p=>
    {
        console.log(list.innerText);
    }
);
const content=document.querySelector('.content');
console.log(content.innerHTML);
const persons=['Rakesh','Suresh','Satish'];
persons.forEach
(persons=>
    {
        content.innerHTML+=`<p>${person}</p>`
    }
);
console.log(content.children);
console.log(content.children[0].textContent);