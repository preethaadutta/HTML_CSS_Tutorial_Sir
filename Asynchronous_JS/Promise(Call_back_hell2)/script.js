console.log("Login started");
function loginUser(email,password)
{
    return new Promise((resolve,reeject)=>
    {
        setTimeout(()=>
        {
            userData={userId:234,status:"success"};
            console.log("Inside Loginuser");
            resolve(userData);
        },2000);
    });
}
function getUserTweets(userId)
{
    return new Promise((resolve,reject)=>
    {
        setTimeout(()=>
        {
            tweetData=
            [
                {tweetId:1,content:"ABC"},
                {tweetId:2,content:"CDE"}
            ];
            console.log("Inside getUserTweets");
            resolve(tweetData);
        },2000);
    });
}
function getTweetComments(tweetId)
{
    return new Promise((resolve,reject)=>
    {
        setTimeout(()=>
        {
            commentData=
            [
                {commentId:1,content:"Good"},
                {commentId:2,content:"Awesome"}
            ];
            console.log("Inside getTweetComments ");
            resolve(commentData);
        },2000);
    });
}
loginUser("preethaa@gmail.com","random")
.then(userData=>getUserTweets(userData.userId))
.then(tweetData=>getTweetComments(tweetData[1].tweetId))
.then(commentData=>console.log(commentData))
.then(error=>console.log(error));
console.log("Finish");