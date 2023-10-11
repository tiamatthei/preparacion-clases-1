class Usuario:
    def __init__(self, nombre:str, balance:int): # molde
        self.nombre = nombre  # cuando tomes el nombre, guardalo en objeto, como nombre
        self.balance = balance
        
    def hacer_retiro(self, amount:int):
        # tomo la ammount
        # verifico si la ammount es menor a la cantidad de plata que tengo (self.balance)
        # verifico tambien si es mayor que 0 (no puedo sacar plata negativa...)
        # sacar la plata (restarle el ammount a self.balance)
        pass
    
    def mostrar_balance_usuario(self):
        #tomo el balance del usuario
        #lo muestro
        pass
    
    def transfer_dinero(self, otro_usuario, amount:int):
        #tomo el balance del usuario
        #lo muestro
        print(f"este es el usuario propio {self.nombre}")
        otro_usuario.tranfer_dinero()
        print(f"este es el other_user {otro_usuario}")

        
    


jorge = Usuario("Jorge", 1000)
baltazar = Usuario("Baltazar", 500)

jorge.transfer_dinero(baltazar, 1000)
#print(jorge.nombre)









