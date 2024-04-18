'''
        edad = 17
        rut = "22218217-9"
        fecha_nacimiento = "27-09-2006"
        color_pelo = "café oscuro"
'''
class Persona:
    def __init__(self, nombre, edad, rut):
        self.nombre = nombre
        self.edad = edad
        self.rut = rut
    
    def caminar(self, pasos, forma):
        print(self.nombre, "caminó", pasos, "pasos, y lo hizo", forma)
    


persona1 = Persona("max", 17, "22.012.302-1") 
persona2 = Persona("cristobal", 17, "22.012.302-1")
persona3 = Persona("iñaky", 17, "22.012.302-1")

persona1.caminar(10, "saltando")
persona2.caminar(20, "de puntitas paso maría, moviendo las manos sobre un campo de lilios")







