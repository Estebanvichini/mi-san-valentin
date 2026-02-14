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
const container = document.getElementById('mainContainer');

// Lógica para que el botón No se mueva SOLO dentro de la tarjeta
btnNo.addEventListener('mouseover', () => {
    // Dimensiones de la tarjeta blanca
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;

    // Dimensiones del botón
    const btnWidth = btnNo.offsetWidth;
    const btnHeight = btnNo.offsetHeight;

    // Calcular nuevas posiciones aleatorias (dejando 20px de margen)
    const newLeft = Math.random() * (containerWidth - btnWidth - 20);
    const newTop = Math.random() * (containerHeight - btnHeight - 20);

    // Aplicar la nueva posición
    btnNo.style.position = 'absolute';
    btnNo.style.left = `${newLeft}px`;
    btnNo.style.top = `${newTop}px`;
});

// Lógica para el botón Sí
btnSi.addEventListener('click', () => {
    inicial.style.display = 'none';
    final.style.display = 'block';
    
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 }
    });
});
