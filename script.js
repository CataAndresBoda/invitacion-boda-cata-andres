// Duplicamos las imágenes para lograr un bucle infinito suave
const track = document.getElementById("carousel-track");
track.innerHTML += track.innerHTML;