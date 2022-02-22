function loadPhoto(){
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res => res.json())
    .then(photo => displayPhoto(photo));
};
loadPhoto();

function displayPhoto(photos){
    const photosContainer = document.getElementById('photos');
    for(const photo of photos){
        const div = document.createElement('div');
        div.innerHTML = `
            <p>${photo.title}</p>
            <img src = "${photo.thumbnailUrl}">
        `;
        photosContainer.appendChild(div);
    }
}