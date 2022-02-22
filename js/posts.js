function loadPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPost(data))
}
loadPosts()

function displayPost(posts){
    const postContainer = document.getElementById('posts');
    for(const post of posts){
        const div = document.createElement('div');
        div.classList.add('post');
        div.innerHTML = `
            <h1>${post.title}</h1>
            <p>${post.body}</p>
        `;
        postContainer.appendChild(div);
    }
};

function addAPost (){
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        },
    })
    .then(response => response.json())
    .then(data => console.log(data));
}