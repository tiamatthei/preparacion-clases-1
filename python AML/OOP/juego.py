import json
import random


def ataque(atacante, atacado):
    atacado["vida"] -= atacante["ataque"]
    print()
    print(f"El {atacante['nombre']}, ha atacado a {atacado['nombre']}")


def superAtaque(atacante, atacado):
    print()
    print(
        f"El {atacante['nombre']}, ha realizado un SUPER ATAQUE a {atacado['nombre']}"
    )
    print()
    print("...")
    print()
    aleatorio = random.random()
    if aleatorio > 0.5:
        atacado["vida"] -= (atacante["ataque"] * 2)
        print("Y ha funcionado con éxito!!!")
    else:
        print("Pero ha fallado!!")


# Cargar datos
def cargarDatos():
    with open("personaje.json", "r") as file:
        personaje = json.load(file)

    return personaje

# Guardar datos
def guardarDatos(personaje):
    with open("personaje.json", "w") as file:
        json.dump(personaje, file)


def crearEnemigo():
    listaEnemigos = [
        {"nombre": "max", "vida": 50, "ataque": 15},
        {"nombre": "daniel", "vida": 60, "ataque": 10},
        {"nombre": "renato", "vida": 100, "ataque": 50},
        {"nombre": "profe", "vida": 1000, "ataque": 100},
    ]
    return random.choice(listaEnemigos)


def mostrarEstadoBatalla(personaje, enemigo):
    print()
    print("----------------------------------")
    print("Tu vida es:", personaje["vida"])
    print()
    print(f"La vida del enemigo {enemigo['nombre']} es:", enemigo["vida"])
    print()
    print("----------------------------------")


print()
print("BIENVENIDO AL JUEGO DE TOMASITO :)")
print()

personaje = cargarDatos()

print("----------------------------------------")
print("LOS DATOS DEL JUEGO HAN SIDO CARGADOS!!!")
print()

# Game Loop
enemigo = crearEnemigo()
print(f"Un {enemigo['nombre']} salvaje ha aparecido")
def gameLoop():
    while True:    
        mostrarEstadoBatalla(personaje, enemigo)

        print("Elige un movimiento (con el numero):")
        print("1. ataque")
        print("2. super ataque")
        respuesta = int(input("INGRESA TU ELECCIÓN: "))
        if respuesta == 1:
            ataque(personaje, enemigo)
        elif respuesta == 2:
            superAtaque(personaje, enemigo)

        if enemigo["vida"] <= 0:
            print("---------------------------------")
            print()
            print("GANASTE!")
            print(f"Vida {personaje['nombre']}: ", personaje["vida"])
            break

        probabilidad_ataque_enemigo = random.random()

        if probabilidad_ataque_enemigo < 0.5:
            ataque(enemigo, personaje)
        elif probabilidad_ataque_enemigo > 0.8:
            print()
            print(f"{enemigo['nombre']} falló")
        else:
            superAtaque(enemigo, personaje)

        if personaje["vida"] <= 0:
            print("---------------------------------")
            print()
            print("GAME OVER")
            print(f"Vida enemigo {enemigo['nombre']}: ", enemigo["vida"])
            break

#Ejecuto el bucle del juego
gameLoop()        

print()
print()
print("-----------------------------------------")
guardarDatos(personaje)
print("Los datos se han guardado correctamente!")
