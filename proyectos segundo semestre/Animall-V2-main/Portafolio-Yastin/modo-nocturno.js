window.addEventListener("DOMContentLoaded", function () {
    const toggleCheckbox = document.getElementById("toggleCheckbox");
    const stylesheet = document.getElementById("stylesheet");
    const scriptElements = document.querySelectorAll("script[data-custom]");

    var currentStylesheet = "style.css";
    var currentScripts = ["script.js"];
    var noche = false;

    toggleCheckbox.addEventListener("change", function () {
        if (currentStylesheet === "style.css") {
            currentStylesheet = "noche.css";
            currentScripts = ["noche.js"];
            noche = true;
        } else {
            currentStylesheet = "style.css";
            currentScripts = ["script.js"];
            noche = false;
        }

        // Cambiar la hoja de estilo
        stylesheet.href = currentStylesheet;

        // Cambiar los archivos JavaScript
        for (const scriptElement of scriptElements) {
            scriptElement.parentNode.removeChild(scriptElement);
        }

        for (const scriptSrc of currentScripts) {
            const newScript = document.createElement("script");
            newScript.src = scriptSrc;
            newScript.setAttribute("data-custom", "true");
            document.body.appendChild(newScript);
        }
    });

    var menu = document.getElementById("menu");
    var items_menu = menu.getElementsByClassName("menu");

    // Función para cambiar los colores al hacer scroll
    function changeColorsOnScroll() {
        var scrollY = window.scrollY || document.documentElement.scrollTop;

        if (scrollY > 50) {
            menu.style.backgroundColor = noche ? "#1a1a1a" : "#fff";
            menu.style.color = noche ? "#fffcf1" : "#000";
            for (const item of items_menu) {
                item.style.color = noche ? "#fffcf1" : "#000";
            }
        } else {
            menu.style.backgroundColor = noche ? "" : "#000";
            menu.style.color = noche ? "#fffcf1" : "white";
            for (const item of items_menu) {
                item.style.color = noche ? "#fffcf1" : "white";
            }
        }
    }

    // Agregar evento scroll para cambiar colores al cargar la página
    changeColorsOnScroll();

    window.addEventListener("scroll", changeColorsOnScroll);

    // Agrega eventos de escucha para el color del texto al pasar el mouse
    for (const item of items_menu) {
        item.addEventListener("mouseenter", function () {
            this.style.color = noche ? "#ebb40c" : "#ebb40c";
        });
        item.addEventListener("mouseleave", function () {
            changeColorsOnScroll();
        });
    }
});









function llenarBarra(porcentaje, elementoId) {
    const progreso = document.getElementById(elementoId);
    progreso.style.width = porcentaje + '%';
}

// Llena la barra de HTML al 80%
llenarBarra(90, 'miProgreso');

// Llena la barra de CSS al 65%
llenarBarra(80, 'miProgreso-css');

// Llena la barra de JavaScript al 90%
llenarBarra(60, 'miProgreso-js');

llenarBarra(30, 'miProgreso-py');

function cambiarColor(id, color) {
    const button = document.getElementById(id);
    button.style.color = color;
}

function restaurarColor(id) {
    const button = document.getElementById(id);
    button.style.color = ''; // Restaurar el color original
}




function enviarCorreo() {
    var email = document.getElementById("email").value;
    var nombre = document.getElementById("nombre").value;
    var comentario = document.getElementById("comentario").value;
    var cuerpoCorreo = "Nombre: " + nombre + "\nEmail: " + email + "\nMensaje:\n" + comentario;

    // Aquí debes agregar código para enviar el correo, pero ten en cuenta que esto no es seguro.

    // Ejemplo de cómo abrir un cliente de correo predeterminado del usuario.
    var mailtoLink = "mailto:yastinvillarroel2005@gmail.com?subject=Mensaje de contacto&body=" + cuerpoCorreo;
    window.location.href = mailtoLink;
}