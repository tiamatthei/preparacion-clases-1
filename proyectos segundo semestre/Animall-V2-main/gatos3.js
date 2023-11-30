var click = true;
var clickCarr = true;
var otroClick = false;
var cat = document.getElementById("cate");
var flecha = document.getElementById("flecha-op");
document.getElementById("carrito-cont").style.display = "none"
const productoo = [
    {
        img: 'Gatos/31.png',
        marca: 'Lavanda',
        nombre: 'ARENA_AMERICA_LITTER_LAVANDA_15_KG',
        precio: '6.270',
        precioAnterior: '7.270'
    },
    {
        img: 'Gatos/32.png',
        marca: 'catnip',
        nombre: 'Bola_Hierba_Gatera_Catnip_Snack_Para_Gatos_Bola_Adhesiva_Cat',
        precio: '13.270',
        precioAnterior: '14.270'
    },
    {
        img: 'Gatos/33.png',
        marca: 'Premier',
        nombre: 'PremieR_Gatos_Gatitos_Pollo_7,5_Kg',
        precio: '5.270',
        precioAnterior: '10.540'
    },
    {
        img: 'Gatos/34.png',
        marca: 'Premier2',
        nombre: 'PremieR_Gatos_Adultos_Pollo_7,5_Kg-LIMPIA_PATITAS',
        precio: '7.990',
        precioAnterior: '13.960'
    },
    {
        img: 'Gatos/35.png',
        marca: 'hpm',
        nombre: 'Virbac_hpm_felino_hypoallergy_3kg&G_BAÑO_IGLU_VERDE_CON_FILTRO_Y_PALA',
        precio: '4.220',
        precioAnterior: '5.990'
    },
    {
        img: 'Gatos/36.png',
        marca: 'neutered',
        nombre: 'Virbac_HPM_Felino_Adult_Neutered_3kg-2 KG',
        precio: '6.990',
        precioAnterior: '8.000'
    },
    {
        img: 'Gatos/37.png',
        marca: 'amily',
        nombre: 'Amity_Lata_Chicken,Salmon_Adult_Cat_80_gr',
        precio: '2.270',
        precioAnterior: '3.990'
    },
    {
        img: 'Gatos/38.png',
        marca: 'catit',
        nombre: 'CATIT_CABRIO_COLOR_TURQUESA',
        precio: '12.660',
        precioAnterior: '15.990'
    },
    {
        img: 'Gatos/39.png',
        marca: 'Senior',
        nombre: 'Virbac_HPM_Felino_Senior_Neutered_1.5kg',
        precio: '3.690',
        precioAnterior: '4.690'
    },
    {
        img: 'Gatos/40.png',
        marca: 'Fit',
        nombre: 'Fit_Formula_Arena_para_gato_aglutinante_Carbón_Activado',
        precio: '17.670',
        precioAnterior: '19.260'
    },
    {
        img: 'Gatos/41.png',
        marca: 'odour',
        nombre: 'ODOUR_BUSTER_ORIGINAL_ARENA_PARA_GATOS',
        precio: '7.500',
        precioAnterior: '10.690'
    },
    {
        img: 'Gatos/42.png',
        marca: 'churu',
        nombre: 'Churu_Broth_Chicken_Salmon_Recipe_50gr',
        precio: '4.990',
        precioAnterior: '6.000'
    },
    {
        img: 'Gatos/43.png',
        marca: 'kitten',
        nombre: 'Leonardo_lata_kitten_Quality_Selection_200grs',
        precio: '2.220',
        precioAnterior: '3.330'
    },
    {
        img: 'Gatos/44.jpg',
        marca: 'Arnes',
        nombre: 'Arnés_para_Gato_Rojo',
        precio: '8.270',
        precioAnterior: '13.270'
    }
    
]
console.log(productoo[0].marca);
var a = document.querySelectorAll(".product");


for (var i = 0; i < 14; i++) {
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