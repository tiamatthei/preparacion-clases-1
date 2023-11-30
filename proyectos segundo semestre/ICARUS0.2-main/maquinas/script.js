var cotain = document.querySelector('.menu-vertical');
function agregarCarrito(element) {
    var padre = element.parentElement.parentElement;
    var titulo = padre.querySelector(".title").innerText;
    var precio = padre.querySelector(".precios").innerText;
    var imagen = padre.querySelector(".imagen").src;
    console.log(padre);
    cotain.innerHTML +=`
    <li class="LI-ESPECIAL">
    <img class="imagen" src="${imagen}" alt="" width="65%">
    <p class="title">${titulo}</p>
    <p class="precios">${precio}</p>
    <button href="" class="btn-card2"onclick="ELIMINAR()" >ELIMINAR</button>
    </li>
    `
    
}
function ELIMINAR() {
    var cntain2 = document.querySelector('.LI-ESPECIAL');
    cntain2.remove();
    }
