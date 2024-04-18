def countdown(numero):
    lista = []
    for i in range(numero, -1, -1):
        lista.append(i)
    
    return lista

#print(countdown(5))


def imprimir_y_devolver(lista):
    print(lista[0])
    return lista[1]


def primero_mas_longitud(lista):
    return lista[0] + len(lista)


def valores_mayores_que_el_segundo(lista):
    if len(lista) < 2:
        return False

    mayores = []
    for elemento in lista:
        if elemento > lista[1]:
            mayores.append(elemento)
    print(len(mayores))
    return mayores

#mayores =valores_mayores_que_el_segundo([5,2,3,2,1,4])
#print(mayores)

def length_and_value(size, value):
    lista = []
    for i in range(size):
        lista.append(value)

    return lista

variable = length_and_value(4, 7)
print(variable)





