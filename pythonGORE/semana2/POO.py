#encapsulamiento

class Usuario:
    respirar = True
    
    def __init__(self, nombre, clave):
       self.nombre = nombre
       self.clave = clave
    
    @classmethod
    def respirar(cls):
        if cls.respirar:
            print("esta respirando")
        else:
            print("no respira, llamen al doctor")
    
    @staticmethod
    def sumar(valor1, valor2):
        print(valor1 + valor2)
    
    
usuario1 = Usuario("jorge", "blabla123")

usuario1.sumar(2, 3)

usuario2 = Usuario("alejandro", "blabla123")


usuario3 = Usuario("nicolas", "blabla123")
usuario4 = Usuario("felipe", "blabla123")
















