// Use promises to load multiple images asynchronously and webpage.

function loadImage(url){
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = url;

        img.onload = () => resolve(img);
        img.onerror = () => reject(new Error(`Failed to load image at ${url}`));
    });
}

function loadImages(imageUrls){
    const imagePromises = imageUrls.map(url => loadImage(url));
    return Promoise.all(imagePromises);
}

// Usage
const imageUrls = [
    'https://example.com/image1.jpg',
    'https://example.com/image2.jpg',
    'https://example.com/image3.jpg'
];

loadImages(imageUrls)
.then(images => {
    const container = document.getElementById('image-container');
    images.forEach(img => {
        container.appendChild(img);
    });
    console.log('All images loaded successfullly')
})
.catch(error => {
    console.error('Error loading images:', error.message);
});

// You will need a div with id name image-container