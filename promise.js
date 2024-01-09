const posts = [
    {title: 'Post One', body: 'This is post one'},
    {title: 'Post two', body: 'This is post two'}
];

function getPosts(){
    setTimeout(() => {
        let output = '';
        posts.forEach((post,index)=>{
            output += `<li>${post.title}</li>`
        });
        document.body.innerHTML=output;
    }, 1000);
}

function createPost(post) {

    return new Promise((resolve, reject) => {
    setTimeout(()=>{
        posts.push(post);

        const error = false;

        if(!error){
            resolve();

        }
        else{
            reject('Error : Something went wrong')
        }
    },2000);
});
}

//createPost({ title: 'Post three' , body: 'this is post three'})
 //.then(getPosts)
 //.catch(err => console.log(err));

 //Promise.all

 const promise1 = Promise.resolve('Hello world');
 const promise2 = 10;
 const promise3 = new Promise((resolve,reject) => 
    setTimeout(resolve, 2000, 'goodbye')
    );

 Promise.all([promise1, promise2, promise3]).then(values => console.log(values));

 function updateLastUserActivityTime() {
    return new Promise((resolve) => {
        setTimeout(() => {
            lastActivityTime = new Date();
            resolve(lastActivityTime);
        }, 1000);
    });
}

function deletePost() {
    return new Promise((resolve) => {
        // Assuming you want to delete the last post
        const deletedPost = posts.pop();
        resolve(deletedPost);
    });
}

// Update last activity time whenever a post is created
function createPostAndUpdateActivity(post) {
    createPost(post)
        .then(() => updateLastUserActivityTime())
        .then((updatedTime) => {
            console.log('Posts:', posts);
            console.log('Last Activity Time:', updatedTime);
            return deletePost();
        })
        .then((deletedPost) => {
            console.log('Deleted Post:', deletedPost);
            console.log('Remaining Posts:', posts);
        })
        .catch((err) => console.log(err));
}

// Example usage
createPostAndUpdateActivity({ title: 'Post three', body: 'This is post three' });