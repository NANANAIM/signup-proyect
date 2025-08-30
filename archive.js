const slides = document.querySelectorAll('#image-slider img');
let current = 0;

function showSlide(index) {
    slides.forEach((img, i) => {
        img.style.opacity = (i === index) ? '1' : '0';
        img.style.transition = 'opacity 1s';
        img.style.position = 'absolute';
        img.style.top = '0';
        img.style.left = '0';
        img.style.width = '100%';
        img.style.height = '100%';
        img.style.objectFit = 'cover';
    });
}

setInterval(() => {
    current = (current + 1) % slides.length;
    showSlide(current);
}, 2000); // cambia cada 2 segundos

showSlide(current);

