
const flores = [
    {
        id: 1,
        nombre: "tulipan",
        imag: "/img/tulipan3.jpg",
        precio: 999,
        descripcion: "El tulipan simboliza la pasion y el romanticismo que puede ser mas perfecto que un tulipan para demostrar tu amor.",
    },
    {
        id: 2,
        nombre: "rosa",
        imag: "/img/rosa3.jpg",
        precio: 999,
        descripcion: "Las rosas estan asociadas al amor, amistad y a la dulzura, es perfecta para cualquien ocasion.",
    },
    {
        id: 3,
        nombre: "Margarita",
        imag: "/img/margaritas2.jpg",
        precio: 500,
        descripcion: "Las margaritas representan la belleza, es perfecta para ocaciones memorables.",
    },
    {
        id: 4,
        nombre: "Girasol",
        imag: "/img/girasoles5.jpg",
        precio: 876,
        descripcion: "Los girasoles son simbolos del amor y admiracion, perfecta para las personas que amas.",
    },
    {
        id: 5,
        nombre: "Dahlias",
        imag: '/img/dalias2.jpg',
        precio: 578,
        descripcion: "Las dahlias son un simpolo de seduccion, es una perfecta opcion si la quieres regalar a alguien espcial.",
    },
    {
        id: 6,
        nombre: "Hortensias",
        imag: "/img/hortensias1.jpg",
        precio: 845,
        descripcion: "Las Hortensias son simbolo de gratitud, belleza y abundancia, perfectas para demostrar cariño y gratutud a alguien.",
    },
    {
        id: 7,
        nombre: "Lirios",
        imag: '/img/lirio1.jpg',
        precio: 990,
        descripcion: "El lirio lo asociamos el poder, la lealtad y honor , asi que es una perfecta idea regalarlo a alguien que quieras mucho."
    },
    {
        id: 8,
        nombre: "Peonias",
        imag: 'img/peonias2.jpg',
        precio: 990,
        descripcion: "Las peonias evocan exito y felicidad que mejor auto regalo que peonias para nosotros."
    },
    {
        id: 9,
        nombre: "Orquideas",
        imag: 'img/orquideas2.jpg',
        precio: 990,
        descripcion: "Las orquideas representan la belleza, perfeccion y el amor, perfecto para demostrar afecto."
    }
]

var carrito = [];


var container = document.getElementById("container-card");
for (let i = 0; i < 10; i++) {
    const element = flores[i];
    container.innerHTML += ` 
<div class='product-card'>
<img src="`+ element.imag + `">
<h1>`+ element.nombre + `</h1>
<p class="descripcion">` + element.descripcion + ` </p>
<p class="precio">$<b>` + element.precio + `</p>
<button class="buy-button"  onclick="agregarAlCarrito(${element.id})">Comprar</button>
</div>`;

}

function agregarAlCarrito(id) {
    const florSeleccionada = flores.find(flor => flor.id === id);
    florSeleccionada.cantidad = 1;
    carrito.push(florSeleccionada);
    mostrarCarrito();
}

function mostrarCarrito() {
    var carritoContainer = document.getElementById("ripley");
    carritoContainer.innerHTML = "";

    var total = 0;
    if (carrito.length > 0) {
        carrito.forEach((flor, index) => {
            total += flor.precio * flor.cantidad;
            carritoContainer.innerHTML +=
                `<div class="producto-carrito">
                <div class="contenedor-botones-carrito">
                    <button id="agregate" onclick="botonMas(${flor.id})">
                        <i class="fa-solid fa-arrow-up"></i>
                    </button>
                    <div class="contenedor-carrito-cantidad">
                        <div class="catidad-carrito">
                            ${flor.cantidad}
                        </div>
                    </div>
                    <button id="qitate" onclick="botonMenos(${flor.id})">
                        <i class="fa-solid fa-arrow-down"></i>
                    </button>
                </div>
                <div class="nombre-precio-producto">
                    <div class="img-producto-carrito">
                        <img class="img-producto-carrito-uno" src=" ${flor.imag}" width="50" >
                    </div>
                    <div class="p-producto">
                        <p>${flor.nombre} - ${flor.precio} CPL</p>
                    </div>
                </div>
            <div class="contenedor-eliminar">
                <button class="boton-eliminar" onclick="eliminarDelCarrito(${index})">
                    <i class="fa-solid fa-trash-can"></i>
                </button>
            </div>
        </div>`;
        });

        carritoContainer.innerHTML += `
                                        <div class="contenedor-total">
                                            <div class="total-carrito">
                                                Total:
                                            </div>
                                            <div class="total-carrito-dos">${total} CPL</div>
                                        </div>
                                        <div>
                                            <button class="comprar-carrito">
                                                Comprar
                                            </button >
                                        </div>`;
    }
}


function eliminarDelCarrito(index) {
    carrito.splice(index, 1);
    mostrarCarrito();
}


function botonMas(id) {
    const florSeleccionada = carrito.find(flor => flor.id === id);
    florSeleccionada.cantidad += 1;
    mostrarCarrito();
};

function botonMenos(id) {
    const florSeleccionada = carrito.find(flor => flor.id === id);
    florSeleccionada.cantidad -= 1;
    if (florSeleccionada.cantidad <= 0) {
        for (let i = 0; i < carrito.length; i++) {
            const element = carrito[i];
            if (element.id == id) {
                carrito.splice(i, 1);
            }
        }
    }

    mostrarCarrito();
};


function ocultarRipley() {

var maxi = document.getElementById("ripley").style.display = "none";
}

function agregarRipley() {
    document.getElementById("ripley").style.display = "flex";

}

