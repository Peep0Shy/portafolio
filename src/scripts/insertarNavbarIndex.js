// funcion fetch para insertar la navbar
document.addEventListener("DOMContentLoaded", function() {
    fetch('./src/pages/navbar.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('navbar--place').innerHTML = data;

      })



      .catch(error => console.error('Error loading navigation:', error));
  });
  