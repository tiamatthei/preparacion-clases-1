var click = true;
var clickCarr = true;
var otroClick = false;
var cat = document.getElementById("cate");
var flecha = document.getElementById("flecha-op");
document.getElementById("carrito-cont").style.display = "none"
const productoo = [
    {
        img: 'productos/Saco-Nomade_Pellets_10kg_1_720x.webp',
        marca: 'Nomade',
        nombre: 'Alimento Gato Adulto 10kg',
        precio: '23.990',
        precioAnterior: '30.000',
        link: 'producto1.html'
    },
    {
        img: 'productos/lw_alimento_extruido_hamster_1_1_1.jpg',
        marca: 'Hunter',
        nombre: 'Alimento extruido para hamster y gerbos',
        precio: '14.990',
        precioAnterior: '19.990',
        link: 'producto2.html'
    },
    {
        img: 'productos/golden-fishless-filet-94288_2000x.webp',
        marca: 'Protteina Foods',
        nombre: 'GARDEIN GOLDEN FISHLESS FILETS',
        precio: '7.990',
        precioAnterior: '10.990',
        link: 'producto3.html'
    },
    {
        img: 'img-productos/30.png',
        marca: 'Cepillate',
        nombre: 'Cepillo Desplazador',
        precio: '2.990',
        precioAnterior: '3.990'
    },
    {
        img: 'img-productos/31.jpg',
        marca: 'Collaraca',
        nombre: 'Collar para perro de cuero con placa',
        precio: '3.990',
        precioAnterior: '5.990'
    },
    {
        img: 'img-productos/32.jpg',
        marca: 'Collaraca',
        nombre: 'Collares De Perro',
        precio: '2.990',
        precioAnterior: '8.990'
    },
    {
        img: 'img-productos/7.jpg',
        marca: 'Cannes',
        nombre: 'Alimentos para perros Cannes adulto 9kg',
        precio: '10.990',
        precioAnterior: '20.990'
    },
    {
        img: 'img-productos/8.png',
        marca: 'img-productos/2.png',
        nombre: 'Juguete para Perro Pelota Interactiva 7 Cm Kulcan',
        precio: '5.990',
        precioAnterior: '12.990'
    },
    {
        img: 'img-productos/9.png',
        marca: 'Vitakraft',
        nombre: 'Vitakraft Snack Treaties Minis Salmon',
        precio: '5.990',
        precioAnterior: '10.000'
    },
    {
        img: 'img-productos/10.png',
        marca: 'Vitakraft',
        nombre: 'Vitakraft Beed Stick Jr Mineral',
        precio: '5.990',
        precioAnterior: '10.000'
    },
    {
        img: 'img-productos/11.png',
        marca: 'Virbac',
        nombre: 'VIRBAC MILPRO PERROS-5 KG',
        precio: '3.990',
        precioAnterior: '5.990'
    },
    {
        img: 'img-productos/12.png',
        marca: 'Virbac',
        nombre: 'Virbac HPM Canino Junior Special Medium 12 kg',
        precio: '2.990',
        precioAnterior: '5.990'
    },
    {
        img: 'img-productos/13.png',
        marca: 'Virbac',
        nombre: 'Virbac HPM Canino Junior Special Large 12 kg',
        precio: '4.990',
        precioAnterior: '7.990'
    },
    {
        img: 'img-productos/14.png',
        marca: 'Virbac',
        nombre: 'Virbac HPM Canino Baby Large-Medium 12kg',
        precio: '8.990',
        precioAnterior: '15.990'
    },
]
console.log(productoo[0].marca);
var a = document.querySelectorAll(".product");


for (var i = 0; i < 12; i++) {
    a[i].innerHTML = `
<a href="${productoo[i].link}" class="product-img">
                <img class="imag" src="${productoo[i].img}" alt="">
            </a>
            <p class="marca">${productoo[i].marca}</p>
            <div class="product-info">
                <a href="${productoo[i].link}" class="product-name">${productoo[i].nombre}</a>
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
function borraCarr() {
    document.getElementById("carrito-cont").style.display = "none"
}
var carrElements = document.getElementById("carrito-elements")
function agregarCarro(element) {
    var papi = element.parentNode.parentNode;
    var imgCarr = papi.querySelector(".imag").src;
    var name = papi.querySelector(".product-name").innerText;
    var precio = papi.querySelector(".precio").innerText;
    if (otroClick == false) {
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
    else if (otroClick == true) {
        document.getElementById("nada").style.display = 'block';
    }
    else {
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