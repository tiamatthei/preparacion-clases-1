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

        
    

usuarios = [
    Usuario("Jorge", 10000),
    Usuario("Felipe", 1000)
]

def menu():
    for i in range(len(usuarios)):
        usuario = usuarios[i]
        print(f"{i+1}. {usuario.nombre}")
        
    opcion = int(input("Ingrese una opcion: "))
    usuario = usuarios[opcion-1]
    print(f"Elegiste a {usuario.nombre}")
    menu_x_usuario(usuario)


def menu_x_usuario(usuario):
    for us in usuarios:
        if us != usuario:
            print(f"{us.nombre} no es {usuario.nombre}")
        
        
    




menu()








