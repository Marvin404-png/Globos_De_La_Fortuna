const areaJuego = document.getElementById('area_juego');
const puntuacionElemento = document.getElementById('puntuacion-valor');
const tiempoRestanteElemento = document.getElementById('tiempo-restante');
let puntuacion = 0;
const duracionJuego = 30; // 2 minutos en segundos
let tiempoRestante = duracionJuego;

// Crear globos aleatorios en el área del juego
function crearGlobo() {
    const tipos = ['estrella', 'corazon', 'osito', 'normal'];
    const colores = ['#FF4136', '#FF69B4', '#FFD700', '#2ECC40'];
    const tipo = tipos[Math.floor(Math.random() * tipos.length)];
    const color = colores[Math.floor(Math.random() * colores.length)];
    
    const globo = document.createElement('div');
    globo.classList.add('globo', tipo);
    globo.style.backgroundColor = color;
    globo.style.left = Math.random() * (areaJuego.offsetWidth - 50) + 'px'; // Ajustar ancho del área
    globo.style.top = Math.random() * (areaJuego.offsetHeight - 70) + 'px'; // Ajustar alto del área
    
    globo.addEventListener('click', reventarGlobo); // Evento de clic para romper globo
    areaJuego.appendChild(globo);
    
    setTimeout(() => {
        globo.remove(); // Eliminar globo después de 1 segundo
    }, 1000);
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

// Crear globos cada 1 segundo
setInterval(crearGlobo, 700);

// Temporizador
function actualizarTemporizador() {
    tiempoRestante -= 1;
    tiempoRestanteElemento.textContent = tiempoRestante;

    if (tiempoRestante <= 0) {
        clearInterval(temporizadorInterval);
        alert('¡Tiempo terminado! Tu puntuación final es: ' + puntuacion);
        // alert('¡Tiempo terminado! Tu puntuación final es: ' + puntuacion);
    }
}

const temporizadorInterval = setInterval(actualizarTemporizador, 1000);
