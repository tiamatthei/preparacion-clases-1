import random

def crearEnemigo():
    listaEnemigos = [
        {"nombre": "max", "vida": 50, "ataque": 15},
        {"nombre": "daniel", "vida": 60, "ataque": 10},
        {"nombre": "renato", "vida": 100, "ataque": 50},
        {"nombre": "profe", "vida": 1000, "ataque": 100},
    ]
    return random.choice(listaEnemigos)
