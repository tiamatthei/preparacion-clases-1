var cookieDiv = document.querySelector(".policy")

function accept() {
    cookieDiv.remove()
}

function alerta() {
    alert("Loading weather report...")
}


//cambia imagen

var boton = document.querySelector('#boton');

boton.addEventListener('click', () => {
    var caja = document.querySelector('#final');
    caja.remove();
});

function arriba() {
    document.querySelector('#img').src = "images/assets/succulents-2.jpg";
}

function fuera() {
    document.querySelector('#img').src = "images/assets/succulents-1.jpg";
}