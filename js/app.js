/*
 * Archivo principal de funcionalidad de JS
 */
 // Obtener modal
var modal = document.getElementById('myModal');

// obtener imagen e insertarla dentro del modal
var img = document.getElementsByClassName('img-p');

  for (var i = 0; i < img.length; i++) {
    img[i].addEventListener("click",mostrarImagen)
  }

  function mostrarImagen() {
    var modal = document.getElementById('myModal');
    var modalImg = document.getElementById("img01");
    modal.style.display = "block";
    modalImg.src = this.src;
  }
// Obtener el elemento que cierra el modal
var span = document.getElementById("close");

// Cuando el usuario da click en el espan, cierra la imagen 
span.addEventListener("click",cerrar)

function cerrar() {
  modal.style.display = "none";
}
