//have to complete
const newH5=document.createElement("h5");
const newH3=document.createElement("h3");
console.log(newH5);
console.log(newH3);
newH5.innerText="This is heading 5";
newH3.innerText="This is heading 3";
const mainHeading=document.querySelector("h1");
mainHeading.append(newH5,newH3);//appenchild can add one element but append can add more than one element
const listItems=document.querySelector("ol");
const olist=document.querySelector("ol");