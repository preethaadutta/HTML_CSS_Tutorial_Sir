/*

*/
//example1
const promise1=new Promise((resolve,reject)=>
{
    setTimeout(()=>
    {
        resolve('Hello JS');
    },2000);
});
const promise2=new Promise((resolve,reject)=>
{
    setTimeout(()=>
    {
        resolve('Hello Java');
    },2000);
});
Promise.all([promise1,promise2])
.then(values=>
    {
        console.log(values);
    });