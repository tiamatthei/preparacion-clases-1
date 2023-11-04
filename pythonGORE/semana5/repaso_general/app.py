from flask import Flask, render_template, flash, session, get_flashed_messages, request
import pymysql.cursors






# esta clase nos dará una instancia de una conexión a nuestra base de datos
class MySQLConnection:
    def __init__(self, db):
        # cambiar el usuario y la contraseña según sea necesario
        connection = pymysql.connect(host = 'localhost',
                                    user = 'root', 
                                    password = '1234',
                                    db = db,
                                    charset = 'utf8mb4',
                                    cursorclass = pymysql.cursors.DictCursor,
                                    autocommit = True)
        # establecer la conexión a la base de datos
        self.connection = connection
        
    # el método para consultar la base de datos
    def query_db(self, query, data=None):
        with self.connection.cursor() as cursor:
            try:
                query = cursor.mogrify(query, data)
                print("Running Query:", query)
     
                cursor.execute(query, data)
                if query.lower().find("insert") >= 0:
                    # las consultas INSERT devolverán el NÚMERO DE ID de la fila insertada
                    self.connection.commit()
                    return cursor.lastrowid
                elif query.lower().find("select") >= 0:
                    # las consultas SELECT devolverán los datos de la base de datos como una LISTA DE DICCIONARIOS
                    result = cursor.fetchall()
                    return result
                else:
                    # las consultas UPDATE y DELETE no devolverán nada
                    self.connection.commit()
            except Exception as e:
                # si la consulta falla, el método devolverá FALSE
                print("Something went wrong", e)
                return False
            finally:
                # cerrar la conexión
                self.connection.close() 

# connectToMySQL recibe la base de datos que estamos usando y la usa para crear una instancia de MySQLConnection
def connectToMySQL(db):
    return MySQLConnection(db)


app = Flask(__name__)

app.secret_key = "algun secreto"


@app.route("/")
def index():
    coneccion = connectToMySQL("nuestro_schema")
    productos = coneccion.query_db("SELECT * FROM productos;")
    
    user = {
        "nombre": "Juan",
        "apellido": "Perez",
        "email": "juan.perez@gmail.com"
        }
    
    
    session['user'] = user
    
    return render_template("index.html", productos=productos)


    


@app.route("/productos")
def productos():
    return render_template("productos.html")


@app.route("/catalogo")
def catalogo():

    return render_template("index.html", productos=productos)




if __name__ == "__main__":
    app.run(debug=True)










