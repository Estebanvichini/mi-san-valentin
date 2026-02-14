// Flores emoji flotando
const flores = ['🌹','🌸','🌺','🌷','🌼','💐'];

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
const carta = document.getElementById('carta');
const musica = document.getElementById('musica');

// Abrir carta
carta.addEventListener('click', () => {
    carta.style.display = "none";
    inicial.style.display = "block";
    musica.play();
});

// Botón No imposible de tocar (funciona en celular)
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
btnNo.addEventListener('touchstart', function(e){
    e.preventDefault();
    moverBoton();
});

// Botón Sí
btnSi.addEventListener('click', () => {
    inicial.style.display = 'none';
    final.style.display = 'block';

    confetti({
        particleCount: 200,
        spread: 90,
        origin: { y: 0.6 }
    });
});
