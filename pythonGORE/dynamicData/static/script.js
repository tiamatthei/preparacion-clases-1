function traerCategorias(event) {
  fetch(`/categorias/${event.target.value}`) //LO FUE A BUSCAR A LA RUTA
    .then((res) => {
      //Lo recibio
      return res.json();
    })
    .then((datos) => {
      //LO PROCESÓ
      //hago algo con los datos
      var selectCategorias = document.getElementById("categorias");
      selectCategorias.innerHTML = "";
      console.log(datos);
      datos.forEach((categoria) => {
        var content = `<option value="${categoria.id}">${categoria.nombre}</option>`;
        selectCategorias.innerHTML += content;
      });

    
    });
}
