class Vehiculo:
    def __init__(self, marca, modelo, anho):
        self.marca = marca
        self.modelo = modelo
        self.anho = anho
    
    def manejar(self):
        print("estas manejando")



class Moto( Vehiculo ):
    def __init__(self, marca, modelo, anho, largo_cadena):
        super().__init__(marca, modelo, anho)
        self.largo_cadena = largo_cadena




class Auto:
    def __init__(self, marca, modelo, anho):
        pass
    

motito = Moto("honda", "cbr1000rr", 2020, 120)
motito.manejar()





