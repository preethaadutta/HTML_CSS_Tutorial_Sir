const link=document.querySelector('a');
console.log(link.getAttribute("href"));
link.setAttribute('href','https://www.google.com');
link.textContent='Search Engine';