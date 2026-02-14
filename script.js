// --- 1. CONFIGURACIÓN DEL JARDÍN AUTOMÁTICO ---
// Definimos las flores (Rosas y Gerberas)
const flores = ['🌹', '🌸', '🌺', '🌷', '🌼'];

function crearFlor() {
    const flor = document.createElement('div');
    flor.classList.add('flower');
    
    // Selección aleatoria de emoji
    flor.innerText = flores[Math.floor(Math.random() * flores.length)];
    
    // Posición aleatoria en toda la pantalla
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    
    flor.style.left = x + 'px';
    flor.style.top = y + 'px';
    
    // Tamaño aleatorio para que se vea más natural
    const size = Math.random() * (45 - 20) + 20;
    flor.style.fontSize = size + 'px';
    
    document.body.appendChild(flor);

    // Opcional: Limpiar flores viejas para no sobrecargar el navegador después de 1 minuto
    setTimeout(() => {
        flor.remove();
    }, 60000);
}

// Crear una flor cada 400ms para llenar el fondo poco a poco
setInterval(crearFlor, 400);


// --- 2. LÓGICA DE INTERACCIÓN ---
const btnNo = document.getElementById('btnNo');
const btnSi = document.getElementById('btnSi');
const inicial = document.getElementById('contenido-inicial');
const final = document.getElementById('mensajeFinal');
const container = document.querySelector('.container');

// FUNCIÓN PARA MOVER EL BOTÓN "NO" DENTRO DE LA TARJETA
btnNo.addEventListener('mouseover', () => {
    // Obtenemos dimensiones de la tarjeta blanca y del botón
    const containerRect = container.getBoundingClientRect();
    const btnRect = btnNo.getBoundingClientRect();

    // Calculamos los límites máximos (ancho/alto de tarjeta menos ancho/alto de botón)
    // Restamos 20px extra de margen de seguridad
    const maxX = containerRect.width - btnRect.width - 20;
    const maxY = containerRect.height - btnRect.height - 20;

    // Generamos coordenadas aleatorias dentro de esos límites
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    // Aplicamos la posición relativa al contenedor
    btnNo.style.left = randomX + 'px';
    btnNo.style.top = randomY + 'px';
});

// EVENTO PARA EL BOTÓN "SÍ" (LA VICTORIA)
btnSi.addEventListener('click', () => {
    // 1. Intercambiamos las vistas
    inicial.style.display = 'none';
    final.style.display = 'block';
    
    // 2. Lanzamos la lluvia de confeti
    lanzarConfeti();
});

// FUNCIÓN DEL CONFETI (Dura 3 segundos)
function lanzarConfeti() {
    const duration = 3 * 1000;
    const end = Date.now() + duration;

    (function frame() {
        // Lanzar desde la izquierda
        confetti({
            particleCount: 5,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: ['#ff4d6d', '#ff8fa3', '#ffffff']
        });
        // Lanzar desde la derecha
        confetti({
            particleCount: 5,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: ['#ff4d6d', '#ff8fa3', '#ffffff']
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());
}
