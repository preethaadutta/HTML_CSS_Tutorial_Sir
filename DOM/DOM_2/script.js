//select the element or group of elements that we want
//getElementsByTagName("tagname") method selects all HTML elements with that given tag
const headings=document.getElementsByTagName("h2");
console.log(headings);
headings[0].style.color="red";//changing color of 1st heading
console.log(headings.length);//returning 2 because there are 2 headings

const items=document.getElementsByTagName("li");
console.log(items);
items[2].style.color="green";//changing color of 3rd list item

