print("//////////////////////")
print()


x = [[5, 2, 3], [10, 8, 9]]
x[1][0] = 15

estudiantes = [
    {
        "first_name": "Michael",
        "last_name": "Jordan",
    },
    {
        "first_name": "John",
        "last_name": "Rosales",
    },
]
estudiantes[0]["last_name"] = "Bryant"


directorio_deportes = {
    "basketball": ["Kobe", "Jordan", "James", "Curry"],
    "fútbol": ["Messi", "Ronaldo", "Rooney"],
}

directorio_deportes["fútbol"][0] = "Andrés"
z = [{"x": 10, "y": 20}]
z[0]["y"] = 30








estudiantes = [
    {"first_name": "Michael", "last_name": "Jordan"},
    {"first_name": "John", "last_name": "Rosales"},
    {"first_name": "Mark", "last_name": "Guillen"},
    {"first_name": "KB", "last_name": "Tonel"},
]

def iterateDictionary(lista):
    for diccionario in lista:
        listaTemp = []
        for llave in diccionario:
            listaTemp.append(f"{llave} - {diccionario[llave]}")
        print(", ".join(listaTemp))
iterateDictionary(estudiantes)








print()
print("//////////////////////")
