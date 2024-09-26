// funcion fetch para insertar la navbar
document.addEventListener("DOMContentLoaded", function() {
    fetch('../pages/navbar.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('navbar--place').innerHTML = data;

        actualizarElementosSegunSesion();
      })



      .catch(error => console.error('Error loading navigation:', error));
  });
  