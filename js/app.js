/*
 * Archivo principal de funcionalidad de JS
 */
 // Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal
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
// Get the <span> element that closes the modal
var span = document.getElementById("close");

// When the user clicks on <span> (x), close the modal
span.addEventListener("click",cerrar)

function cerrar() {
  modal.style.display = "none";
}
