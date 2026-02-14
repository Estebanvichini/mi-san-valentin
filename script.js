/* ====== ABRIR SOBRE ====== */

const envelope = document.getElementById("envelope");

setTimeout(() => {
    envelope.classList.add("open");
}, 800);

/* ====== FLORES ====== */

const canvas = document.getElementById("flowerCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

class Flower {
    constructor() { this.reset(); }

    reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 20 + 20;
        this.opacity = 0;
        this.grow = true;
        this.type = Math.floor(Math.random() * 3);
    }

    drawPetals(color, petals) {
        for (let i = 0; i < petals; i++) {
            ctx.beginPath();
            ctx.fillStyle = `rgba(${color},${this.opacity})`;
            ctx.ellipse(this.x, this.y, this.size, this.size/2, i*Math.PI/(petals/2), 0, Math.PI*2);
            ctx.fill();
        }
    }

    update() {
        if (this.grow) {
            this.opacity += 0.02;
            if (this.opacity >= 0.5) this.grow = false;
        } else {
            this.opacity -= 0.01;
        }

        if (this.opacity <= 0) this.reset();

        if (this.type === 0) this.drawPetals("255,105,180", 12);
        if (this.type === 1) this.drawPetals("255,140,180", 16);
        if (this.type === 2) this.drawPetals("255,182,193", 6);
    }
}

const flowers = [];
for (let i = 0; i < 15; i++) flowers.push(new Flower());

function animate() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    flowers.forEach(f => f.update());
    requestAnimationFrame(animate);
}
animate();

/* ====== BOTONES ====== */

const btnNo = document.getElementById('btnNo');
const btnSi = document.getElementById('btnSi');
const inicial = document.getElementById('contenido-inicial');
const final = document.getElementById('mensajeFinal');
const container = document.querySelector('.buttons-container');

function moverBoton() {
    const w = container.clientWidth - btnNo.offsetWidth;
    const h = container.clientHeight - btnNo.offsetHeight;

    btnNo.style.left = Math.random() * w + "px";
    btnNo.style.top = Math.random() * h + "px";
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

btnSi.addEventListener('click', () => {
    inicial.style.display = 'none';
    final.style.display = 'block';

    confetti({
        particleCount: 200,
        spread: 80,
        origin: { y: 0.6 }
    });
});
