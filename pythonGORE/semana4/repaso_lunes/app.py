from flask import Flask, render_template, url_for



app = Flask(__name__)


@app.route("/index/<int:numero>/<string:color>")
def color_y_numero(numero, color):
    return render_template("index.html", cantidad_divs = numero, color=color)



@app.route("/index/<int:numero>")
def index(numero):
    return render_template("index.html", cantidad_divs = numero, color="blue")


@app.route("/index")
def index_sin():
    return render_template("index.html", cantidad_divs = 3, color = "blue")





@app.route("/lists")
def lists():
    lista_usuarios = [
        {"nombre":"juan", "edad":25},
        {"nombre":"pedro", "edad":20},
        {"nombre":"diego", "edad":21}
    ]
    
    return render_template("lists.html", perro = lista_usuarios)










