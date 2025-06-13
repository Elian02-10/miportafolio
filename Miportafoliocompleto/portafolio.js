// Ejemplo funcional: mensaje de bienvenida al cargar
window.addEventListener('DOMContentLoaded', () => {
    console.log("Página completamente cargada");
    
    // Evento de validación para el formulario
    document.querySelector("form").addEventListener("submit", function(e) {
        e.preventDefault(); // Evita envío real para demostración
        alert("Gracias por enviar la encuesta, " + document.getElementById("txtNombre").value);
    });

    // Cambio de color al hacer clic en la palabra "infinix"
    const itemInfinix = document.getElementById("infinix");
    itemInfinix.addEventListener("click", () => {
        itemInfinix.style.color = "red";
        itemInfinix.textContent = "¡Haz hecho clic!";
    });
});
