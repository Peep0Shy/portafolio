// funcion fetch para insertar la navbar
document.addEventListener("DOMContentLoaded", function() {
    fetch('./src/pages/footer.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('footer--place').innerHTML = data;

      })



      .catch(error => console.error('Error loading navigation:', error));
  });
  