import json

# Cargar datos
def cargarDatos():
    with open("personaje.json", "r") as file:
        personaje = json.load(file)

    return personaje

# Guardar datos
def guardarDatos(personaje):
    with open("personaje.json", "w") as file:
        json.dump(personaje, file)

