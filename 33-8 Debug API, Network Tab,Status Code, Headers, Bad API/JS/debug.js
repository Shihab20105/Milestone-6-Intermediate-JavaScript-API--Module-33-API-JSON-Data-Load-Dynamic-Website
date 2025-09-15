/*                          33-8 Debug API, Network tab,Status code, headers, bad API */

/*
function loadPosts(){
    // console.log('Loading Posts Data');
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => console.log(data));
}

function displayPosts(posts){

}

loadPosts();
*/



/*
function loadPosts(){
    // console.log('Loading Posts Data');
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPosts(data));
}


function displayPosts(posts){
    // console.log(posts);
    for(const post of posts){
        console.log(post);
    }
}

loadPosts();
*/



function loadPosts() {
    // console.log('Loading Posts Data');
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayPosts(data));
}

/* 
1. Get the container element where you want to add the new elements
2. Create child element 
3. Set innerText or innerHTML
4. appendChild
*/

function displayPosts(posts) {
    const postsContainer = document.getElementById('posts-container')
    for (const post of posts) {
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');
        console.log(post);
        postDiv.innerHTML = `
        <h4>User-${post.userId}</4>
        <h5>Post title: ${post.title}</5>
        <p>Post Description: ${post.body}</p>
        `;
        postsContainer.appendChild(postDiv);
    }
}

loadPosts();

