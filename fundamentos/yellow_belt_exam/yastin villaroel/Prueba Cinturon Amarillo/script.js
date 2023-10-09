//COOOKIEEEEES//

function mostrarAlert() { //MUESTRA LA ALERTA
    alert("You cart is empty");
}





//CAMBIA LA IMAGEN AL PASAR POR ENSIMA//

function entro() {  //AL ENTRAR
    document.querySelector(".img-a").src = 'images/assets/succulents-2.jpg';
}
function fuera() {  //AL FSALIR
    document.querySelector(".img-a").src = 'images/assets/succulents-1.jpg';
}




//ELIMINA COOKIES//

var cookies = document.querySelector(".cookies"); //DETERMINA EL VALOR DE COOKIES


function aceptar(element) { //ELIMINA EL ELEMENTO COOKIES
    cookies.remove();
}




