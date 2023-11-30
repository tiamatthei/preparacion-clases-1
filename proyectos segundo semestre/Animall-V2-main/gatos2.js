var click = true;
var clickCarr = true;
var otroClick = false;
var cat = document.getElementById("cate");
var flecha = document.getElementById("flecha-op");
document.getElementById("carrito-cont").style.display = "none"
const productoo = [
    {
        img: 'Gatos/16.png',
        marca: 'betty',
        nombre: 'Caja_Catit_Vesper_Grande_Nogal',
        precio: '16.270',
        precioAnterior: '17.260'
    },
    {
        img: 'Gatos/17.png',
        marca: 'sussy',
        nombre: 'ARENA_SANITARIA_MULTICAT',
        precio: '17.270',
        precioAnterior: '18.260'
    },
    {
        img: 'Gatos/18.png',
        marca: 'Windows',
        nombre: 'PALA_DE_ARENA_PARA_FECAS',
        precio: '3.270',
        precioAnterior: '8.260'
    },
    {
        img: 'Gatos/19.png',
        marca: 'Fazbear',
        nombre: 'BAÑO_GATO_ABIERTO-LIMPIA_PATITAS',
        precio: '19.990',
        precioAnterior: '22.960'
    },
    {
        img: 'Gatos/20.png',
        marca: 'Splash',
        nombre: 'CLUB_P&G_BAÑO_IGLU_VERDE_CON_FILTRO_Y_PALA',
        precio: '22.270',
        precioAnterior: '24.260'
    },
    {
        img: 'Gatos/21.png',
        marca: 'virbac',
        nombre: 'VIRBAC_MILPRO_GATOS-2 KG',
        precio: '14.990',
        precioAnterior: '18.000'
    },
    {
        img: 'Gatos/22.png',
        marca: 'clumping',
        nombre: 'ARENA_SANITARIA_CLUMPING_FORMULA',
        precio: '22.270',
        precioAnterior: '23.990'
    },
    {
        img: 'Gatos/23.png',
        marca: 'petdroid',
        nombre: 'Gigwi_Feather_Hider',
        precio: '9.660',
        precioAnterior: '10.990'
    },
    {
        img: 'Gatos/24.png',
        marca: 'ferplast',
        nombre: 'CEPILLO_PARA_GATOS_FERPLAST',
        precio: '3.990',
        precioAnterior: '5.000'
    },
    {
        img: 'Gatos/25.png',
        marca: 'Catit',
        nombre: 'Catit_Vesper_Cubo',
        precio: '15.670',
        precioAnterior: '17.260'
    },
    {
        img: 'Gatos/26.png',
        marca: 'atigrado',
        nombre: 'CATIT_BAÑO_JUMBO_ATIGRADO',
        precio: '25.000',
        precioAnterior: '27.690'
    },
    {
        img: 'Gatos/27.png',
        marca: 'Bolas',
        nombre: 'Bola_de_Mimbre_con_Plumas_y_Cascabel',
        precio: '2.990',
        precioAnterior: '4.000'
    },
    {
        img: 'Gatos/28.png',
        marca: 'Juguetones',
        nombre: 'Juguete_Pescado_Para_Gato_Con_Movimiento_Interactivo_Con_Usb',
        precio: '7.370',
        precioAnterior: '8.660'
    },
    {
        img: 'Gatos/29.png',
        marca: 'Bolsos',
        nombre: 'Bolso_Tipo_Canguro_Para_Mascotas',
        precio: '5.270',
        precioAnterior: '8.270'
    },
    {
        img: 'Gatos/30.png',
        marca: 'casitas',
        nombre: 'Casa_Iglu_Cueva_Para_Mascotas',
        precio: '23.270',
        precioAnterior: '25.260'
    }
    
]
console.log(productoo[0].marca);
var a = document.querySelectorAll(".product");


for (var i = 0; i < 15; i++) {
    a[i].innerHTML = `
<div class="product-img">
                <img class="imag" src="${productoo[i].img}" alt="">
            </div>
            <p class="marca">${productoo[i].marca}</p>
            <div class="product-info">
                <p class="product-name">${productoo[i].nombre}</p>
                <div class="cont-precio">
                    <p class="precio">$${productoo[i].precio}</p>
                    <img src="img/Flecha.png" alt="">
                </div>
                <p class="precio-tachado">$${productoo[i].precioAnterior}</p>
                <img onclick="fav(this)" class="corazao" src="img/Corazon-black.png" alt="">
            </div>
            <div class="agregar-cont">
            <button style="cursor: pointer;" onclick="agregarCarro(this)" class="agregar">
                Agregar al carro
            </button>
            </div>`
    console.log("si")
}
function borraEmail() {
    document.getElementById("email").value = "¡Gracias!"
}
var isClick = false;
function fav(element) {
    if (isClick == false) {
        element.src = 'img/Corazon-green.png';
        isClick = true;
    }
    else if (isClick == true) {
        element.src = 'img/Corazon-black.png';
        isClick = false;
    }
}
var num = 1;
function cantidadMas(element) {
    num = num + 1;
    var pa = element.parentNode.querySelector('p');
    pa.innerHTML = num;
}
function cantidadMenos(element) {
    if (num == 1) {
        element.parentNode.parentNode.remove()
    }
    else {
        num = num - 1;
        element.parentNode.querySelector('p').innerHTML = num;
    }
}

function ClicleameEsta() {
    if (click == false) {
        cat.getElementsByTagName("ul")[0].removeAttribute("cat");
        cat.getElementsByTagName("ul")[0].setAttribute("id", "active");
        flecha.style = "margin: 0.4vw 0 0 0.2vw ; transition: 0.5s;"
        click = true;
    }
    else if (click == true) {
        cat.getElementsByTagName("ul")[0].removeAttribute("id");
        flecha.style = " margin: 0.3vw 0 0.1vw 0.2vw ;transition: 0.5s;transform: rotate(180deg);"
        cat.getElementsByTagName("ul")[0].setAttribute("class", "cat");
        click = false;
    }
}   
function ClicleameElCarrito() {
    if (clickCarr == false) {
        document.getElementById("carrito-cont").style.display = "flex";
        clickCarr = true;
    }
    else if (clickCarr == true) {
        document.getElementById("carrito-cont").style.display = "none";
        clickCarr = false;
    }
}   
function borraCarr(){
    document.getElementById("carrito-cont").style.display = "none"
}
var carrElements = document.getElementById("carrito-elements") 
function agregarCarro(element){
    var papi = element.parentNode.parentNode;
    var imgCarr = papi.querySelector(".imag").src;
    var name = papi.querySelector(".product-name").innerText;
    var precio = papi.querySelector(".precio").innerText;
    if(otroClick == false){
        document.getElementById("nada").style.display = 'none';
    carrElements.innerHTML += `<div class="cont-carrito-product">
    <div class="carrito-product">
        <div class="cantidad-cont">
            <button onclick="cantidadMenos(this)">-</button>
            <p>1</p>
            <button onclick="cantidadMas(this)"">+</button>
        </div>
        <img class="img-carr" src="${imgCarr}" alt="">
        <div class="info-carrito">
            <p>${name}</p>
            <p class="pe">${precio}</p>
        </div>
    </div>
</div>`
    }
    else if(otroClick == true){
        document.getElementById("nada").style.display = 'block';
    }
    else{
        carrElements.innerHTML += `<div class="cont-carrito-product">
    <div class="carrito-product">
        <div class="cantidad-cont">
            <button onclick="cantidadMenos(this)">-</button>
            <p>1</p>
            <button onclick="cantidadMas(this)"">+</button>
        </div>
        <img class="img-carr" src="${imgCarr}" alt="">
        <div class="info-carrito">
            <p>${name}</p>
            <p class="pe">${precio}</p>
        </div>
    </div>
</div>`
    }
}