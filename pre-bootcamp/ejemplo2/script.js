/* Ejemplo de función javascript para cambiar el color de un botón */
function changeColor() {
    var colors = document.getElementById("colors");
    var color = colors.options[colors.selectedIndex].value;
    var button = document.getElementsByTagName("button")[0];
    button.style.backgroundColor = color; // Ojo aquí!
}

/* Ejemplo de función Javascript para actualizar una lista (de frutas) */
function updateFruitList() {
    var fruits = document.getElementsByName("fruit");
    var fruitList = document.getElementById("fruitList");
    var favoriteFruits = []; for (var i = 0; i < fruits.length; i++) {
        if (fruits[i].checked) {
            favoriteFruits.push(fruits[i].value);
        }
    }

    if (favoriteFruits.length > 0) {
        fruitList.innerHTML = "Your favorite fruits are: " + favoriteFruits.join(", ");
    } else {
        fruitList.innerHTML = "";
    }
}

/* Ejemplo de función Javascript para agregar una fila a una tabla */
function addRow() {
    var form = document.getElementById("myForm");
    var table = document.getElementsByTagName("table")[0].getElementsByTagName("tbody")[0];
    var name = form.elements["name"].value;
    var last_name = form.elements["last-name"].value;
    var email = form.elements["email"].value;

    // Ojo todo esto!
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);

    cell1.textContent = name;
    cell2.textContent = last_name;
    cell3.textContent = email;
    form.reset();

    //Pregunta: ¿Qué función cumplen estas 3 líneas?
    var table = document.getElementsByTagName("table")[0];
    var rows = table.getElementsByTagName("tr");
    setHighlight(rows);
}

/* Ejemplo de función que actualiza el método onclick de un tag */
function setHighlight(rows) {
    for (var i = 0; i < rows.length; i++) {
        rows[i].onclick = function () {
            if (!this.classList.contains("highlight")) {
                this.classList.add("highlight"); // Agregar una clase permite modificar múltiples valores en un instante
            } else {
                this.classList.remove("highlight");
            }
        }
    }
}

/* Función Javascript que se ejecuta al iniciar la página */
window.onload = function () {
    var table = document.getElementsByTagName("table")[0];
    var rows = table.getElementsByTagName("tr");
    setHighlight(rows);

}