
from flask import Flask, render_template, request, redirect, session
import time

app = Flask(__name__)
app.secret_key = 'secreto'


#RESTful
#GET: obtengo informacion del servidor
#POST: envio informacion al servidor { "name": "Jorge", "email": "jbejarano@codingdojo" }
#PUT: envio/actualizo informacion del servidor
#DELETE: elimino informacion del servidor


@app.route('/fallido', methods=['GET'])
def fallido():
    return render_template("fallido.html")


@app.route('/loguearse', methods=['POST'])
def loguearse():
    print(request.form)
    #anda a buscar a la base de datos si hay algun usuario que coincida con request.form['usuario']
    usuarios = [
        {
            "usuario": "admin",
            "contrasena": "1234",
            'edad': '19'
        },
        {
            "usuario": "user",
            "contrasena": "blabla",
            'edad': '20'
        },
        
    ]
    for usuario in usuarios:
        if request.form['usuario'] == usuario['usuario'] and request.form['contrasena'] == usuario['contrasena']:
            session['tiempo_logueo'] = time.strftime("%Y-%m-%d %H:%M:%S") #guarda en la sesion, el tiempo de logueo        
            
            session['usuario'] = usuario['usuario'] #guarda en la sesion, el usuario
            session['contrasena'] = usuario['contrasena'] #guarda en la sesion la contra
            session['edad'] = usuario['edad']
            
            return redirect('/inicio')
    else:
        return redirect("/fallido")


@app.route('/login', methods=['GET']) #Con el arroba, yo uso decoradores, un decorador es como codigo que las librerias usan
def login():
    return render_template("login.html")


@app.route('/inicio', methods=['GET']) #Con el arroba, yo uso decoradores, un decorador es como codigo que las librerias usan
def inicio():
    return render_template("index.html") #Muestra el archivo index.html


# Con esto, nos aseguramos que solo se corra esta parte del codigo, no lo de arriba
if __name__ == "__main__":
    app.run(debug=True)



