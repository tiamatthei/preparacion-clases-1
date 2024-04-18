print("////////////////////////////////////")
print()

class Usuario:
    def __init__(self, nombre, email):
        self.nombre = nombre
        self.email = email
        self.balance_cuenta = 0
    
    def hacer_deposito(self, cantidad):
        self.balance_cuenta += cantidad
        return self
        
    def hacer_retiro(self, cantidad):
        self.balance_cuenta -= cantidad
        return self
    
    def mostrar_balance_usuario(self):
        print(f"Usuario: {self.nombre}, Balance: ${self.balance_cuenta}")

    def transfer_dinero(self, otro_usuario, cantidad):
        print(self.nombre, "le transfiere a", otro_usuario.nombre)
        self.balance_cuenta -= cantidad
        otro_usuario.balance_cuenta += cantidad

jorge = Usuario("Jorge", "jbejarano@codingdojo.la")

nicolas = Usuario("Nico", "ndonoso@sip.cl")

print(jorge.hacer_deposito(100).hacer_deposito(100).hacer_retiro(100))
jorge.mostrar_balance_usuario()

















print()
print("////////////////////////////////////")













