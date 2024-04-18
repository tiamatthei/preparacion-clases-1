print("/////////////////////////")
print()



#lista = ["daniel", "max", "benjamin", "tomas", "tobalito"]

import random
lista = []
with open("texto.txt", "r", encoding="utf-8") as file:
    for line in file.readlines():
        lista.append(line.strip())
    palabra_elegida = random.choice(lista)
    desorden = random.sample(palabra_elegida, 
                  len(palabra_elegida))
    print(''.join(desorden))
    palabra = input("Adivine la palabra: ")
    if palabra.strip().lower() == palabra_elegida.strip().lower():
        print("correcto!!!!")
    else:
        print("intenta nuevamente :(((")


















print()
print("/////////////////////////")
