function borrar() {
    //BUSCAR EL ELEMENTO
    var footer = document.querySelector("footer");
    //BORRAR EL ELEMENTO
    footer.remove();
}

function cambiarImg(imageUrl) {
    //busco la imagen
    var imagen = document.getElementById("imagen-suculentas");
    //cambiala por la que te di en el parametro
    imagen.src = imageUrl;

}
