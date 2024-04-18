# Juego de preguntas tipo quiz en python
def mostrar_pregunta(pregunta):
    print(pregunta)


def verificar_respuesta(respuesta, respuesta_usuario):
    if respuesta_usuario == respuesta:
        print("Correcto, eres el mejor!")
    else:
        print("Incorrecto, siga intentando!")


preguntas_quiz = {
    "¿Cuál es la capital de Francia?": "París",
    "¿Cuál es el mamífero más grande de la Tierra?": 
    "Ballena azul",
    # Agregar más preguntas de quiz aquí
}

def ejecutar_quiz(preguntas):
    """
    Use un bucle para iterar sobre el diccionario de preguntas del quiz, 
    mostrando cada pregunta y solicitando al usuario una respuesta.
     Verifique si la respuesta del usuario es correcta y dígale algo.
    """
    for pregunta in preguntas:
        mostrar_pregunta(pregunta) # Paso 1
        print()
        print("Responda la pregunta: ")
        respuesta = input() # Paso 2
        print("Usted respondió:", respuesta)

        respuesta_correcta = preguntas[pregunta]

        if respuesta.lower() == respuesta_correcta.lower():
            print("Correcto!!")
        else:
            print("PEEEEEEEEEENCAAAAA")
            print("La respuesta es: ", respuesta_correcta)





# Llame a la función ejecutar_quiz con el diccionario preguntas_quiz
ejecutar_quiz(preguntas_quiz)