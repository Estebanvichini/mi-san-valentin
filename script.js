// 🌸 Flores emoji (igual que tu versión)
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

// 🔥 Botón No imposible de tocar (PC + celular)
function moverBoton() {
    const container = document.querySelector('.buttons');

    const maxX = container.clientWidth - btnNo.offsetWidth;
    const maxY = container.clientHeight - btnNo.offsetHeight;

    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;

    btnNo.style.left = newX + "px";
    btnNo.style.top = newY + "px";
}

btnNo.addEventListener('mouseover', moverBoton);

// Importante para celular
btnNo.addEventListener('touchstart', function(e) {
    e.preventDefault();
    moverBoton();
});

// 💖 Botón Sí
btnSi.addEventListener('click', () => {
    inicial.style.display = 'none';
    final.style.display = 'block';

    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 }
    });
});
