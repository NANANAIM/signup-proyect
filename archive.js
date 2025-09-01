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

/////////
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const message = document.getElementById('password-message');
const submitBtn = document.querySelector('.submit-button');
const form = document.querySelector('.sign-up-form');

function checkPasswords() {
  if (password.value !== confirmPassword.value) {
    message.textContent = "Las contraseñas no coinciden";
    message.style.color = "red";
    submitBtn.disabled = true;
  } else {
    message.textContent = "";
    submitBtn.disabled = false;
  }
}

form.addEventListener('submit', function(e) {
  if (password.value !== confirmPassword.value) {
    e.preventDefault();
    message.textContent = "Las contraseñas no coinciden";
    message.style.color = "red";
    // No deshabilites el botón aquí
  }
});