console.log("Login Started");
function loginUser(email,password,callback)
{
    setTimeout(()=>{
        userData={userId:211,status:"success"};
        console.log("Login User Done");
        callback(userData);
    },2000);
}
function getUserTweets(userId,callback)
{
    setTimeout(()=>{
        tweetData=
        [
            {tweetId:1,content:"WER"},
            {tweetId:2,content:"KJH"}
        ];
        console.log("Inside getUserTweets");
        callback(tweetData);
    },1000);
}
function getTweetComments(tweetId,callback)
{
    setTimeout(()=>{
        commentData=
        [
            {commentId:1,content:"Good"},
            {commentId:2,content:"Awesome"}
        ];
        console.log("Inside getTweetComments");
        callback(commentData);
    },1000);
}
loginUser("preethaa@gmail.com","random",(userData)=>
{
    getUserTweets(userData.userId,()=>
    {
        getTweetComments(tweetData[0].tweetId,(commentData)=>
        {
            console.log(commentData);
        });
    });
});
console.log("completed");
/*

*/