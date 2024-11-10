let currentIndex = 2;
const images = document.querySelectorAll('.banner-img');

function updateImages() {
    images.forEach((img, index) => {
        img.classList.remove('center', 'left', 'right', 'far-left', 'far-right');
        if (index === currentIndex) {
            img.classList.add('center');
        } else if (index === (currentIndex - 1 + images.length) % images.length) {
            img.classList.add('left');
        } else if (index === (currentIndex + 1) % images.length) {
            img.classList.add('right');
        } else if (index === (currentIndex - 2 + images.length) % images.length) {
            img.classList.add('far-left');
        } else if (index === (currentIndex + 2) % images.length) {
            img.classList.add('far-right');
        }
    });
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImages();
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateImages();
}

document.addEventListener('DOMContentLoaded', () => {
    updateImages();
});