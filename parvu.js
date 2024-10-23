const areaJuego = document.getElementById('area_juego');
const puntuacionElemento = document.getElementById('puntuacion-valor');
const tiempoRestanteElemento = document.getElementById('tiempo-restante');
let puntuacion = 0;
const duracionJuego =15; 
let tiempoRestante = duracionJuego;

// Crear globos aleatorios en el área del juego
function crearGlobo() {
    const tipos = ['estrella', 'corazon', 'osito', 'normal'];
    const colores = ['#FF4136'];
    const tipo = tipos[Math.floor(Math.random() * tipos.length)];
    const color = colores[Math.floor(Math.random() * colores.length)];
    
    const globo = document.createElement('div');
    globo.classList.add('globo', tipo);
    globo.style.backgroundColor = color;
    globo.style.width = '70px'; // Globos más grandes
    globo.style.height = '90px'; // Globos más grandes
    globo.style.left = Math.random() * (areaJuego.offsetWidth - 70) + 'px'; // Ajustar ancho del área
    globo.style.top = Math.random() * (areaJuego.offsetHeight - 90) + 'px'; // Ajustar alto del área
    
    globo.addEventListener('click', reventarGlobo); // Evento de clic para romper globo
    areaJuego.appendChild(globo);
    
    setTimeout(() => {
        globo.remove(); // Eliminar globo después de 3 segundos (más tiempo para Parvularia)
    }, 1500);
}

// Romper el globo
function reventarGlobo(event) {
    const globo = event.target;
    globo.remove(); // Eliminar globo
    incrementarPuntuacion(2); // Sumar puntos
}

// Incrementar la puntuación
function incrementarPuntuacion(puntos) {
    puntuacion += puntos;
    puntuacionElemento.textContent = puntuacion;
}

// Crear globos cada 2 segundos (más lento para Parvularia)
setInterval(crearGlobo, 2000);

// Temporizador
function actualizarTemporizador() {
    tiempoRestante -= 1;
    tiempoRestanteElemento.textContent = tiempoRestante;

    if (tiempoRestante <= 0) {
        clearInterval(temporizadorInterval);
        alert('¡Tiempo terminado! Tu puntuación final es: ' + puntuacion);
    }
}

const temporizadorInterval = setInterval(actualizarTemporizador, 1000);

