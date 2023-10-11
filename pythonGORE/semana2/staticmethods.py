    
        
class Auto:
    cantidad_ruedas = 4 #atributo de clase
    
    def __init__(self, marca, anho, modelo, velocidad_maxima): # constructor
        self.marca = marca
        self.anho = anho
        self.modelo = modelo
        self.velocidad_maxima = velocidad_maxima
    
    def pisar_acelerador(self):
        print(f"{self.marca} {self.modelo} llegaste a {self.velocidad_maxima} km/h")
    
    @classmethod
    def mostrar_cantidad_ruedas(cls):
        print(f"El auto tiene {cls.cantidad_ruedas} ruedas")
        
    @staticmethod
    def abrir_puerta(nombre_puerta, pestillo):
        if pestillo:
            print("Esta cerrada con pestillo, pelmazo")
        else:
            print(f"abriste la puerta {nombre_puerta}")
            
    


porsche911 = Auto("porsche", 2022, "911", 300)
#porsche911.pisar_acelerador()

corolla = Auto("Toyota", 2004, "Corolla", 170)
#corolla.pisar_acelerador()

porsche911.mostrar_cantidad_ruedas()
corolla.mostrar_cantidad_ruedas()


corolla.abrir_puerta("trasera", False)
porsche911.abrir_puerta("delantera", False)







