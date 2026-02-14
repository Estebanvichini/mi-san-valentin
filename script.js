// Generar flores
const flores = ['🌹', '🌸', '🌺', '🌷', '🌼'];

setInterval(() => {
    const flor = document.createElement('div');
    flor.classList.add('flower');
    flor.innerText = flores[Math.floor(Math.random() * flores.length)];
    flor.style.left = Math.random() * window.innerWidth + 'px';
    flor.style.top = Math.random() * window.innerHeight + 'px';
    flor.style.fontSize = (Math.random() * 30 + 20) + 'px';
    document.body.appendChild(flor);
}, 500);

const btnNo = document.getElementById('btnNo');
const btnSi = document.getElementById('btnSi');
const inicial = document.getElementById('contenido-inicial');
const final = document.getElementById('mensajeFinal');
const container = document.querySelector('.buttons-container');

// Movimiento del botón No SOLO dentro del área de botones
btnNo.addEventListener('mouseover', () => {
    
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;

    const btnWidth = btnNo.offsetWidth;
    const btnHeight = btnNo.offsetHeight;

    const newLeft = Math.random() * (containerWidth - btnWidth);
    const newTop = Math.random() * (containerHeight - btnHeight);

    btnNo.style.left = `${newLeft}px`;
    btnNo.style.top = `${newTop}px`;
});

// Botón Sí
btnSi.addEventListener('click', () => {
    inicial.style.display = 'none';
    final.style.display = 'block';

    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 }
    });
});
