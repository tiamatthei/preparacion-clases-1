#encapsulamiento

class Usuario:
    def __init__(self, nombreusuario, password):
        self.nombreusuario = nombreusuario
        self.password = password
    
    @getattr
    def getPassword(self):
        return self.password
    
    @setattr  
    def setPassword(self, newPassword):
        self.password = newPassword
        return self.password
    
usuario1 = Usuario("jorge", "blabla123")
print(usuario1.setPassword("hola"))
usuario1.password = "kakakakka"
print(usuario1.password)
















