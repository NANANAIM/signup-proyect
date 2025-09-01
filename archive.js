const slides = document.querySelectorAll('#image-slider img');
let current = 0;

///////////
const creditDiv = document.getElementById('poster-credit');
const creditTexts = [
    '© Belarusfilm / Mosfilm / Sovexportfilm',
    '© Columbia Pictures / Sony Pictures Entertainment',
    '© Les Productions Lazennec / Le Studio Canal+ / La Sept Cinéma / Kasso Inc. / MKL Distribution',
    '© 20th Century Fox (y/o IFC Films según edición)',
    'Fidélité Films / Wild Bunch / BIM Distribuzione'
];
///////////
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
    creditDiv.textContent = creditTexts[index];
}

setInterval(() => {
    // Fade out el texto
    creditDiv.style.opacity = '0';
    // Espera el fade out antes de cambiar el texto y la imagen
    setTimeout(() => {
        current = (current + 1) % slides.length;
        showSlide(current);
        // Fade in el texto
        creditDiv.style.opacity = '1';
    }, 500); // 500ms para coincidir con la transición
}, 2000);
showSlide(current);


