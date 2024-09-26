// funcion fetch para insertar la navbar
document.addEventListener("DOMContentLoaded", function() {
    fetch('../pages/footer.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('footer--place').innerHTML = data;

        actualizarElementosSegunSesion();
      })



      .catch(error => console.error('Error loading navigation:', error));
  });
  