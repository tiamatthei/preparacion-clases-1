// Obtén una referencia al botón por su clase
var boton = document.querySelector(".boton-login");

// Agrega un evento de clic al botón
boton.addEventListener("click", function () {
  // Verifica el texto actual del botón
  if (boton.innerHTML === "Log In") {
    // Cambia el texto a "Log Out"
    boton.innerHTML = "Log Out";
  } else {
    // Si el texto no es "Log In", cámbialo a "Log In"
    boton.innerHTML = "Log In";
  }
});

// Obtén el botón por su clase
var addButton = document.querySelector(".boton-add");

// Agrega un event listener para el clic
addButton.addEventListener("click", function () {
  // Cambia el estilo del botón para ocultarlo
  addButton.style.display = "none";
});

// Obtén todos los botones "Me gusta" por su clase
var likeButtons = document.querySelectorAll(".boton-like");

// Agrega un event listener para cada botón "Me gusta"
likeButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    // Muestra una alerta al hacer clic en el botón "Me gusta"
    alert("A Ninja le gustó");
  });
});
