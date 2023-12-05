from flask import Flask, render_template


app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')


@app.get('/categorias/<int:id>')
def get_categoria(id):
    # aca va la logica de buscar las categorias en la base de datos, con la id que le pasamos
    query = """SELECT * FROM categorias WHERE id = ?"""

    categorias = {
        1: [
            {
                'id': 1,
                'nombre': 'futbol',
                'descripcion': 'descripcion de la categoria 1'
            },
            {
                'id': 2,
                'nombre': 'volley',
                'descripcion': 'descripcion de la categoria 2'
            }
        ],
        2: [
            {
                'id': 3,
                'nombre': 'lol',
                'descripcion': 'descripcion de la categoria 3'
            },
            {
                'id': 4,
                'nombre': 'valorant',
                'descripcion': 'descripcion de la categoria 4'
            }
        ]
    }
    
    
    return categorias[id]


if __name__ == '__main__':
    app.run(debug=True)
