var boton = document.querySelector('#boton');
boton.addEventListener('click', function name(params) {
    console.log('chao');
    var caja = document.querySelector('#final')
    caja.remove()
})
function arriba() {
    document.querySelector('#img').src="/images/assets/succulents-2.jpg";
}
function fuera() {
    document.querySelector('#img').src="/images/assets/succulents-1.jpg";
}