print("////////////////////////////")
print()






from flask import Flask, render_template, send_file


app = Flask(__name__)


@app.route('/python')
def python():
    return send_file("main_copy.py")

@app.route('/template')
def template():
    return send_file("templates/index.html")

if __name__ == '__main__':
    app.run(host="0.0.0.0")




    











print()
print("////////////////////////////")
