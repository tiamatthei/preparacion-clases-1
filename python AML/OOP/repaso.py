print("/////////////////////////")
print()
nombre = "Tomás"  # string
edad = 17  # int
promedio = 5.8  # float double
estudia = True  # bool

# lista edades de tomás cristobal y cristian
edades = [17, 17, 18]
nombres = ["Tomás", "Cristobal", "Cristian"]
lista_edades_nombres = [17, "Tomás", 17, "Cristobal", 18, "Cristian"]
diccionario = {"edad": 17, "nombre": "Cristobal"}
lista_datos_alumnos = [
    {"edad": 17, "nombre": "Tomás"},
    {"edad": 18, "nombre": "Cristian"},
]
# listas van de: 0,1,2,3 ... infinito

def guardia_disco(edad=17, 
                  nombre="Pepito", 
                  apellido="Perez"):
    if edad > 70:
        print(f"Vayase pa la casa, {nombre}")
    elif edad >= 18:
        print(f"Puede entrar a la disco, {nombre}")
    else:
        print(f"¡No puede entrar {nombre}!")

guardia_disco(nombre="Jorge") 
guardia_disco(17, "Tomás")
guardia_disco(80, "Cristobal")


















print()
print("/////////////////////////")
