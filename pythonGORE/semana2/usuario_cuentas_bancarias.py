class CuentaBancaria:
    def __init__(self, tasa_interes, balance):
        self.tasa_interes = tasa_interes
        self.balance = balance

    def deposito(self, cantidad):
        self.balance += cantidad


class Usuario:
    def __init__(self, nombre, cuenta_bancaria: 'CuentaBancaria'): #Constructor
        self.nombre = nombre
        self.cuenta_bancaria = cuenta_bancaria
    
    def hacer_deposito(self, plata):
        self.cuenta_bancaria.deposito(plata)
    
    def hacer_retiro(self):
        pass
    
    def mostrar_balance_usuario(self):
        pass


cuenta1 = CuentaBancaria(0.89, 10_000)

usuario1 = Usuario("Jorge", cuenta1)
usuario1 = Usuario("Jorge", CuentaBancaria(0.89, 10_000))




        
        







