import random
from configuracion import cargarDatos, guardarDatos
from personajes import crearEnemigo
from utilidades import mostrarEstadoBatalla
from ataques import ataque, superAtaque

def start():
    print()
    print("BIENVENIDO AL JUEGO DE TOMASITO :)")
    print()

    personaje = cargarDatos()

    print("----------------------------------------")
    print("LOS DATOS DEL JUEGO HAN SIDO CARGADOS!!!")
    print()

    enemigo = crearEnemigo()
    print(f"Un {enemigo['nombre']} salvaje ha aparecido")


# Game Loop
def gameLoop(personaje, enemigo):
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



def main():
    personaje = cargarDatos()
    enemigo = crearEnemigo()
    #Ejecuto el bucle del juego
    gameLoop(personaje, enemigo)

    print()
    print()
    print("-----------------------------------------")
    guardarDatos(personaje)
    print("Los datos se han guardado correctamente!")


if __name__ == "__main__":
    main()






