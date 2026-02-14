// Flores automáticas
const flores = ['🌹', '🌸', '🌺', '🌷', '🌼'];
setInterval(() => {
    const flor = document.createElement('div');
    flor.classList.add('flower');
    flor.innerText = flores[Math.floor(Math.random() * flores.length)];
    flor.style.left = Math.random() * window.innerWidth + 'px';
    flor.style.top = Math.random() * window.innerHeight + 'px';
    flor.style.fontSize = (Math.random() * 30 + 20) + 'px';
    document.body.appendChild(flor);
}, 450);

const btnNo = document.getElementById('btnNo');
const btnSi = document.getElementById('btnSi');
const inicial = document.getElementById('contenido-inicial');
const final = document.getElementById('mensajeFinal');
const container = document.querySelector('.container');

// Mover el botón "No" dentro de la tarjeta
btnNo.addEventListener('mouseover', () => {
    const containerRect = container.getBoundingClientRect();
    const btnRect = btnNo.getBoundingClientRect();

    // Límites para que no se salga de la tarjeta blanca
    const maxX = containerRect.width - btnRect.width - 20;
    const maxY = containerRect.height - btnRect.height - 20;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    btnNo.style.left = randomX + 'px';
    btnNo.style.top = randomY + 'px';
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
