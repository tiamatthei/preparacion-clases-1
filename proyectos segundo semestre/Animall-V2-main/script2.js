var click = true;
var clickCarr = true;
var otroClick = false;
var cat = document.getElementById("cate");
var flecha = document.getElementById("flecha-op");
document.getElementById("carrito-cont").style.display = "none"
const productoo = [
    {
        img: 'img-productos/13.png',
        marca: 'Virbac',
        nombre: 'Virbac_HPM_Canino_Junior_Special_Large_12 kg',
        precio: '4.990',
        precioAnterior: '7.990'
    },
    {
        img: 'img-productos/14.png',
        marca: 'Virbac',
        nombre: 'Virbac_HPM_Canino_Baby_Large-Medium_12kg',
        precio: '8.990',
        precioAnterior: '15.990'
    },
    {
        img: 'img-productos/15.png',
        marca: 'Charly',
        nombre: 'ALIMENTO_PARA_PERRO_SABOR_CARNE_Y_CEREALES_CHARLY_3 KG',
        precio: '12.990',
        precioAnterior: '20.990'
    },
    {
        img: 'img-productos/16.jpg',
        marca: 'Cachupin',
        nombre: 'Alimento_para_Perros_18Kg',
        precio: '13.990',
        precioAnterior: '15.990'
    },
    {
        img: 'img-productos/17.jpg',
        marca: 'Champion Dog',
        nombre: 'Alimento_Perro_Adulto_Carne_3_kg',
        precio: '20.990',
        precioAnterior: '25.990'
    },
    {
        img: 'img-productos/18.jpeg',
        marca: 'Champion Dog',
        nombre: 'Alimento_seco_para_perro_adulto_15_kg_carne_y_rroz',
        precio: '12.990',
        precioAnterior: '26.990'
    },
    {
        img: 'img-productos/19.jpg',
        marca: 'Cachupin',
        nombre: 'Alimento-perro-cachorro-carne-pollo-y-leche-3-kg',
        precio: '12.990',
        precioAnterior: '15.990'
    },
    {
        img: 'img-productos/20.jpeg',
        marca: 'Champion Dog',
        nombre: 'Alimento-seco-para-cachorro-3-kg-carne-y-pollo.',
        precio: '10.990',
        precioAnterior: '16.990'
    },
    {
        img: 'img-productos/21.jpg',
        marca: 'Champion Dog',
        nombre: 'Alimento-Seco-Para-Perros-Cachorros-3-kg',
        precio: '',
        precioAnterior: ''
    },
    {
        img: 'img-productos/22.png',
        marca: 'Puppy',
        nombre: 'Amity_Chicken_Puppy_SP_Low_Grain_4kg',
        precio: '20.990',
        precioAnterior: '28.990'
    },
    {
        img: 'img-productos/23.jpg',
        marca: 'Atacama',
        nombre: 'Atacama_Premium_Adulto_para_todas_las_Razas',
        precio: '22.990',
        precioAnterior: '28.990'
    },
    {
        img: 'img-productos/24.png',
        marca: 'Beeps',
        nombre: 'BEEPS_SHAMPOO_2_EN_1.',
        precio: '4.990',
        precioAnterior: '8.990'
    },
    {
        img: 'img-productos/25.png',
        marca: 'Beeps',
        nombre: 'BEEPS-SHAMPOO_CON_ALOE_VERA_502_ML',
        precio: '4.990',
        precioAnterior: '8.990'
    },
    {
        img: 'img-productos/26.png',
        marca: 'Belcano',
        nombre: 'Belcando_Junior_Grain_Free_Poultry_12.5Kg',
        precio: '17.990',
        precioAnterior: '20.990'
    },
    {
        img: 'img-productos/27.png',
        marca: 'Doockson',
        nombre: 'CALZÓN_PROTECTOR',
        precio: '5.990',
        precioAnterior: '8.990'
    },
]
console.log(productoo[0].marca);
var a = document.querySelectorAll(".product");


for (var i = 0; i < 12; i++) {
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