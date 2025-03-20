// Rewrite the previous exercise using async/await.

async function loadImage(url) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = url;

        img.onload = () => resolve(img);
        img.onerror = () => reject(new Error(`Failed to load image at ${url}`));
    });
}

async function loadImages(imageUrls) {
    try {
        const images = await Promise.all(imageUrls.map(url => loadImage(url)));
        const container = document.getElementById("image-container");
        images.forEach(img => {
            container.appendChild(img);
        });
        console.log('Alll images were loaded successfully');
    }
    catch(error){
        console.error('Error loading images:', error.message);
    }
}

// Usage
const imageUrls = [
    'https://example.com/image1.jpg',
    'https://example.com/image2.jpg',
    'https://example.com/image3.jpg'
];

loadImages(imageUrls);

// need a div container with the name image-conatainer
