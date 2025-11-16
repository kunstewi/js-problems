// Create an image gallery using dynamically generated elements.

function createImageGallery(imageUrls){
    const galleryContainer = document.createElement('div');
    galleryContainer.classList.add('image-gallary');

    imageUrls.forEach(url => {
        const img = document.getElementById('img');
        img.src = url;
        img.alt = 'Gallery Image';
        img.classList.add('gallery-image'); // add a class for styling
        galleryContainer.appendChild(img); // append the image to the container
    });

    document.body.appendChild(galleryContainer);
}

// Usage
const imageUrls = [
    'https://example.com/image1.jpg',
    'https://example.com/image2.jpg',
    'https://example.com/image3.jpg'
];

createImageGallery(imageUrls);