// script.js

// Esperar a que el documento esté completamente cargado
window.onload = function() {
    // Recuperar la edad del usuario desde localStorage
    const edad = localStorage.getItem('edad');

    // Selecciona el div donde se colocarán los niveles
    const nivelesDiv = document.getElementById('niveles');
    
    if (edad) {
        const edadInt = parseInt(edad);

        // Mostrar niveles según la edad del usuario
        if (edadInt < 4) {
            nivelesDiv.innerHTML = `<button id="parvularia">Nivel Parvularia</button>`;
        } else if (edadInt >= 4 && edadInt <= 9) {
            nivelesDiv.innerHTML = `<button id="parvularia">Nivel Parvularia</button>`;
        } else if (edadInt >= 10 && edadInt <= 13) {
            nivelesDiv.innerHTML = `<button id="basica">Nivel Básica</button>`;
        } else if (edadInt >= 14 && edadInt <= 18) {
            nivelesDiv.innerHTML = `<button id="bachillerato">Nivel Bachillerato</button>`;
        }

        // Agregar funcionalidad a los botones después de que se hayan generado
        if (document.getElementById("parvularia")) {
            document.getElementById("parvularia").addEventListener("click", function() {
                window.location.href = "parvularia.html"; // Redirige a la página de Parvularia
            });
        }

        if (document.getElementById("basica")) {
            document.getElementById("basica").addEventListener("click", function() {
                window.location.href = "basica.html"; // Redirige a la página de Básica
            });
        }

        if (document.getElementById("bachillerato")) {
            document.getElementById("bachillerato").addEventListener("click", function() {
                window.location.href = "bachillerato.html"; // Redirige a la página de Bachillerato
            });
        }
    } else {
        alert("Edad no definida. Redirigiendo a la validación de edad.");
        window.location.href = "validacion.html"; // Si no hay edad definida, redirigir a validación
    }
};

