document.addEventListener("DOMContentLoaded", function() {
    actualizarLinks();
});

function actualizarLinks() {
    const proyectosLink = document.getElementById('proyectos--link');
    const acercaLink = document.getElementById('acerca--link');
    const currentPath = window.location.pathname;

    if (proyectosLink && acercaLink) {
        if (currentPath.includes("index.html")) {
            proyectosLink.onclick = function() {
                window.location.href = './src/pages/proyectos.html';
            };
            acercaLink.onclick = function() {
                window.location.href = './src/pages/acerca.html';
            };
        } else {
            proyectosLink.onclick = function() {
                window.location.href = './proyectos.html';
            };
            acercaLink.onclick = function() {
                window.location.href = './acerca.html';
            };
        }
    } else {
        console.error("Elementos no encontrados");
    }
}