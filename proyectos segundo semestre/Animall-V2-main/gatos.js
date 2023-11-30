var click = true;
var clickCarr = true;
var otroClick = false;
var cat = document.getElementById("cate");
var flecha = document.getElementById("flecha-op");
document.getElementById("carrito-cont").style.display = "none"
const productoo = [
    {
        img: 'Gatos/1.jpeg',
        marca: 'Kit kat',
        nombre: 'Alimento-gato-adulto-carne-1-kg',
        precio: '10.990',
        precioAnterior: '20.990'
    },
    {
        img: 'Gatos/2.jpeg',
        marca: 'Acme',
        nombre: 'Alimento-gato-pescado-3-kg',
        precio: '13.690',
        precioAnterior: '18.250'
    },
    {
        img: 'Gatos/3.jpeg',
        marca: 'ambrosofi',
        nombre: 'Alimento_gato_8_kg_salmón_Premium_Felinnes',
        precio: '14.290',
        precioAnterior: '16.900'
    },
    {
        img: 'Gatos/4.png',
        marca: 'Ziggs',
        nombre: 'purina-pro-plan-gatos-sterilized8485',
        precio: '16.900',
        precioAnterior: '18.900'
    },
    {
        img: 'Gatos/5.jpeg',
        marca: 'Zac',
        nombre: 'Alimento_seco_para_gato_adulto_8_kg_salmón_y_sardina',
        precio: '13.900',
        precioAnterior: '15.000'
    },
    {
        img: 'Gatos/6.jpg',
        marca: 'Mordekaiser',
        nombre: 'Collar_isabelino_Acolchado_Para_Razas_Medianas_Grandes',
        precio: '11.900',
        precioAnterior: '13.000'
    },
    {
        img: 'Gatos/7.png',
        marca: 'Darius',
        nombre: 'Amity_Lata_Chicken_and_Peas_Adult_Cat_80gr',
        precio: '12.690',
        precioAnterior: '13.000'
    },
    {
        img: 'Gatos/8.jpg',
        marca: 'seraphine',
        nombre: 'Cepillo_Masajeador_Para_Gatos',
        precio: '10.000',
        precioAnterior: '10.990'
    },
    {
        img: 'Gatos/9.png',
        marca: 'zed',
        nombre: 'Catit_Vesper_Base_Alta_Negro',
        precio: '23.990',
        precioAnterior: '28.000'
    },
    {
        img: 'Gatos/10.png',
        marca: 'ornn',
        nombre: 'Vitakraft_Poesie_Delice_Carne',
        precio: '7.990',
        precioAnterior: '8.000'
    },
    {
        img: 'Gatos/11.png',
        marca: 'fiora',
        nombre: 'Churu_Broth_Chicken_Recipe_50gr',
        precio: '6.000',
        precioAnterior: '6.990'
    },
    {
        img: 'Gatos/12.png',
        marca: 'rammus',
        nombre: 'CAJA_SANITARIA_TRANSPARENTE',
        precio: '15.990',
        precioAnterior: '17.990'
    },
    {
        img: 'Gatos/13.png',
        marca: 'chogath',
        nombre: 'Churu_Broth_Chicken_Scallop_Recipe_50gr',
        precio: '5.000',
        precioAnterior: '5.550'
    },
    {
        img: 'Gatos/14.png',
        marca: 'nunu',
        nombre: 'Catit_Vesper_Minou',
        precio: '19.990',
        precioAnterior: '21.690'
    },
    {
        img: 'Gatos/15.png',
        marca: 'zeri',
        nombre: 'Catit_Play_Spinning_Bee',
        precio: '12.270',
        precioAnterior: '14.000'
    },
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