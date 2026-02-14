// --- GENERADOR DE FLORES ---
const flores = ['🌹', '🌸', '🌺', '🌷', '🌼'];
setInterval(() => {
    const flor = document.createElement('div');
    flor.classList.add('flower');
    flor.innerText = flores[Math.floor(Math.random() * flores.length)];
    flor.style.left = Math.random() * window.innerWidth + 'px';
    flor.style.top = Math.random() * window.innerHeight + 'px';
    flor.style.fontSize = (Math.random() * 30 + 20) + 'px';
    document.body.appendChild(flor);
}, 400);

// --- LÓGICA DE BOTONES ---
const btnNo = document.getElementById('btnNo');
const btnSi = document.getElementById('btnSi');
const inicial = document.getElementById('contenido-inicial');
const final = document.getElementById('mensajeFinal');
const container = document.querySelector('.container');

// Mover botón "No" SOLO dentro de la tarjeta
btnNo.addEventListener('mouseover', () => {
    const containerRect = container.getBoundingClientRect();
    const btnRect = btnNo.getBoundingClientRect();

    // Calculamos posiciones máximas dentro del container (menos el tamaño del botón)
    const maxX = containerRect.width - btnRect.width;
    const maxY = containerRect.height - btnRect.height;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    btnNo.style.left = randomX + 'px';
    btnNo.style.top = randomY + 'px';
});

// Al darle Sí
btnSi.addEventListener('click', () => {
    inicial.style.display = 'none';
    final.style.display = 'block';
    
    // Lanzar confeti
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 }
    });
});