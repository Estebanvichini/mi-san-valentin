/* ===== SOBRE CON TEMBLOR ===== */

const envelope = document.getElementById("envelope");

setTimeout(() => {
    envelope.classList.add("shake");
}, 400);

setTimeout(() => {
    envelope.classList.remove("shake");
    envelope.classList.add("open");
}, 1200);

/* ===== TEXTO TIPO MAQUINA ===== */

const text = "¿Rosita, querés ser mi San Valentín?";
const typed = document.getElementById("typedText");
let i = 0;

function typeWriter() {
    if (i < text.length) {
        typed.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 60);
    }
}
setTimeout(typeWriter, 1500);

/* ===== MÚSICA (requiere interacción en móvil) ===== */

document.body.addEventListener("click", () => {
    document.getElementById("musica").play();
}, { once: true });

/* ===== PARTÍCULAS MÁGICAS ===== */

const bgCanvas = document.getElementById("backgroundCanvas");
const bgCtx = bgCanvas.getContext("2d");

bgCanvas.width = window.innerWidth;
bgCanvas.height = window.innerHeight;

class Sparkle {
    constructor() {
        this.reset();
    }
    reset() {
        this.x = Math.random()*bgCanvas.width;
        this.y = Math.random()*bgCanvas.height;
        this.size = Math.random()*2+1;
        this.alpha = Math.random();
        this.speed = Math.random()*0.5+0.2;
    }
    update() {
        this.y -= this.speed;
        this.alpha -= 0.005;
        if(this.alpha<=0) this.reset();
        bgCtx.fillStyle = `rgba(255,255,255,${this.alpha})`;
        bgCtx.beginPath();
        bgCtx.arc(this.x,this.y,this.size,0,Math.PI*2);
        bgCtx.fill();
    }
}

const sparkles=[];
for(let i=0;i<80;i++) sparkles.push(new Sparkle());

function animateBg(){
    bgCtx.clearRect(0,0,bgCanvas.width,bgCanvas.height);
    sparkles.forEach(s=>s.update());
    requestAnimationFrame(animateBg);
}
animateBg();

/* ===== BOTÓN NO IMPOSIBLE ===== */

const btnNo = document.getElementById('btnNo');
const btnSi = document.getElementById('btnSi');
const inicial = document.getElementById('contenido-inicial');
const final = document.getElementById('mensajeFinal');
const container = document.querySelector('.buttons-container');

function moverBoton() {
    const w = container.clientWidth - btnNo.offsetWidth;
    const h = container.clientHeight - btnNo.offsetHeight;
    btnNo.style.left = Math.random()*w+"px";
    btnNo.style.top = Math.random()*h+"px";
}

btnNo.addEventListener('mouseenter', moverBoton);
btnNo.addEventListener('touchstart', e => {
    e.preventDefault();
    moverBoton();
});
btnNo.addEventListener('click', e => {
    e.preventDefault();
    moverBoton();
});

/* ===== BOTÓN SÍ ===== */

btnSi.addEventListener('click', () => {
    inicial.style.display='none';
    final.style.display='block';

    confetti({
        particleCount: 300,
        spread: 90,
        origin: { y: 0.6 }
    });
});
