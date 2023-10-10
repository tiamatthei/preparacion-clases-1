function over(element) {
    alert("you cart is empty");    

}
function cambiaImagen(){
    document.querySelector(".cambiaimagen").src = "img/succulents-2.jpg"

}

function reseteaImagen(){
    document.querySelector(".cambiaimagen").src = "img/succulents-1.jpg"
}

function accept() {
    var cookieDiv =document.getElementsByClassName("footer")[0];
    cookieDiv.remove();
}