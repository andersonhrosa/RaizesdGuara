const images = [
    'img/index/home1.png',
    'img/index/home2.png',
    'img/index/home3.png',
    'img/index/home4.png',
    'img/index/home5.png'
];

let currentIndex = 2;

function updateBanner() {
    const banner = document.querySelector('.banner');
    banner.innerHTML = '';

    for (let i = -2; i <= 2; i++) {
        const img = document.createElement('img');
        img.src = images[(currentIndex + i + images.length) % images.length];
        img.classList.add('banner-img');

        if (i === 0) {
            img.style.transform = 'scale(1.2)';
        } else if (i === -1 || i === 1) {
            img.style.transform = 'scale(1)';
        } else {
            img.style.transform = 'scale(0.8)';
        }

        img.style.margin = '0 10px'; 

        banner.appendChild(img);
    }
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateBanner();
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateBanner();
}

document.addEventListener('DOMContentLoaded', () => {
    updateBanner();
});