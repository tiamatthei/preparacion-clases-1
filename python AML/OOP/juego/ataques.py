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
