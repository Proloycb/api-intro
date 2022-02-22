function loadData(){
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => displayComments(data));
}
loadData();

function displayComments(comments){
    const commentContainer = document.getElementById('comments');
    for(const comment of comments){
        const div = document.createElement('div');
        div.innerHTML = `
            <h5>${comment.email}</h5>
            <p>${comment.body}</p>
        `;
        commentContainer.appendChild(div);
    }
}