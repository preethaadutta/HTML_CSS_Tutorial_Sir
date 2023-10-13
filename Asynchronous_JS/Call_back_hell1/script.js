const languages=[];
//callback hell means complex nested callback
function favoriteLanguage()
{
    setTimeout(()=>{
        languages.push('Python','C#','JavaScript','C++','Java','C');
        console.log('Languages are added in the array...');
        setTimeout(()=>{
            console.log('Displaying Array after using push method...');
            console.log(languages);
            setTimeout(()=>{
                const randomIndex=Math.floor(Math.random()*(languages.length-1));
                console.log(`Favorite language:${languages[randomIndex]}`);
            },8000);
        },6000);
    },3000);
}
favoriteLanguage();