function redirigir() {
    const nombre = document.getElementById('nombre').value;
    const edad = parseInt(document.getElementById('edad').value);

    // Verificar si la edad es válida
    if (!edad || edad < 0) {
        alert('Por favor, ingresa una edad válida.');
        return;
    }

    // Redirige a la página de inicio
    window.location.href = 'principal.html';

    // Guardar nombre y edad en el almacenamiento local (para acceder desde la página de inicio)
    localStorage.setItem('nombre', nombre);
    localStorage.setItem('edad', edad);
}


/*// validacion.js

document.getElementById("form-validacion").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevenir el envío del formulario por defecto

    const nombre = document.getElementById("nombre").value;
    const edad = parseInt(document.getElementById("edad").value);
    
    // Validación de edad y redirección según el nivel
    if (edad >= 4 && edad <= 9) {
        // Redirigir a la página de inicio y mostrar nivel Parvularia
        mostrarNivel("Nivel 1", nombre);
        deshabilitarNiveles("Nivel 1");
    } else if (edad >= 10 && edad <= 13) {
        // Redirigir a la página de inicio y mostrar nivel Básica
        mostrarNivel("Nivel 2", nombre);
        deshabilitarNiveles("Nivel 2");
    } else if (edad >= 14 && edad <= 18) {
        // Redirigir a la página de inicio y mostrar nivel Bachillerato
        mostrarNivel("Nivel 3", nombre);
        deshabilitarNiveles("Nivel 3");
    } else {
        alert("Lo sentimos, no tienes acceso a la feria."); // Mensaje para edades fuera del rango
    }
});

// Función para redirigir a la página de inicio y mostrar el nivel correspondiente
function mostrarNivel(nivel, nombre) {
    // Guardar el nombre en el almacenamiento local (opcional)
    localStorage.setItem("nombre", nombre);
    
    // Redirigir a la página de inicio
    window.location.href = "inicio.html?nivel=" + nivel;
}

// Función para deshabilitar los niveles no accesibles según la edad
function deshabilitarNiveles(nivelPermitido) {
    // Obtener todos los botones de nivel
    const niveles = document.querySelectorAll(".boton-nivel");

    niveles.forEach(function(nivel) {
        if (nivel.getAttribute("data-nivel") !== nivelPermitido) {
            nivel.disabled = true; // Deshabilitar los niveles que no correspondan
            nivel.classList.add("bloqueado"); // Añadir clase para estilo visual si se requiere
        }
    });
}*/
